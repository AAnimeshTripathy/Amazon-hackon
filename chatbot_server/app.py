from flask import Flask, request, jsonify
import flask_cors
import os
import json
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
import os
from langchain_google_genai import GoogleGenerativeAIEmbeddings
import google.generativeai as genai
from langchain.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv


load_dotenv()

os.environ["GOOGLE_API_KEY"] = "AIzaSyCYeE0wT2nMhNV5aIwp1tpLrdKc37GRizM"
app = Flask(__name__)
flask_cors.CORS(app)

def get_pdf_text(file_path):
    text = ""
    pdf_reader = PdfReader(file_path)
    for page in pdf_reader.pages:
        text += page.extract_text()
    return text

def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    chunks = text_splitter.split_text(text)
    return chunks

def get_vector_store(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")

def get_conversational_chain():
    prompt_template = """
    You are a helpful Customer support Assistant who answers users' questions regarding their payment issues with Amazon Pay based on multiple contexts given to you.
    Keep your answer short and to the point.
    Reply "I'll advice to connect to our support team" if relavent information is not there in the given file. 
    Context:\n{context}\n
    Question: \n{question}\n
    Answer:
    """

    model = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.3)
    prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)

    return chain

def user_input(user_question):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)
    docs = vector_store.similarity_search(user_question)

    chain = get_conversational_chain()
    response = chain({"input_documents": docs, "question": user_question}, return_only_outputs=True)

    return response
def reco():

    response = model.generate_content('''You are a helpful Customer support Assistant who answers users' questions regarding the best payment method based on the following criteria:

    1. Amazon pay upi = 8 times successful
    2. cash on delivery/pay on delivery = 4 times successful
    3. other upi apps = 0 times used
    4. credit or debit card = 6 times successful
    5. emi = 2 times used
    6. net banking = 3 times successful
    7. gift card or promo code - 1 gift card available
    8. amazon pay wallet - 3 times successful

    On the current order, there is a cashback of 5% for amazon pay wallet, a 10% discount for choosing the credit or debit card option, and a gift card if using net banking.

    Criteria for the best payment method:
    - 55% weight for the number of successful transactions.
    - 25% weight for discounts.
    - 20% weight for cashback or gift cards.

    Based on these criteria, calculate the scores for each payment method and rank them from best to least. Return the list in plain text format. give the answer in object format like json. order the payment options in decending order. dont write the word json on top, just give the object''')
    re = response.text
    re = re[4:]
    re = re[:-3]
    json_data = json.loads(re)
    return jsonify(json_data)


raw_text = get_pdf_text("chatdata.pdf")
text_chunks = get_text_chunks(raw_text)
get_vector_store(text_chunks)
def res(user_question):
    return user_input(user_question)

model = genai.GenerativeModel('gemini-pro')

@app.route("/predict", methods=["POST"])
def predict():
    request_data = request.get_json()
    user_question = request_data["message"]
    print(user_question)
    response = res(user_question)
    # print()
    message = {"answer": response["output_text"]}
    return jsonify(message)

@app.route("/reccomend", methods=["POST"])
def reccomend():
    response = reco()
    return response

if __name__ == "__main__":
    app.run(debug=True)
