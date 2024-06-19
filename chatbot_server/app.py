from flask import Flask, request, jsonify
import flask_cors , os
from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_community.document_loaders import PyPDFLoader
from langchain.chains import ConversationalRetrievalChain
from langchain_core.prompts import PromptTemplate

app = Flask(__name__)
flask_cors.CORS(app)

GOOGLE_API_KEY = "AIzaSyCYeE0wT2nMhNV5aIwp1tpLrdKc37GRizM"  
model = ChatGoogleGenerativeAI(model="gemini-pro", google_api_key=GOOGLE_API_KEY, temperature=0.5,
                               convert_system_message_to_human=True)

default_prompt = """You are a helpful Customer support Assistant who answers users' questions regarding their payment issues with Amazon Pay and based on multiple contexts given to you.
    
    Keep your answer short and to the point.
    
    The evidence is the context of the PDF extract with metadata. 
        
    Reply "Not relevant" if text is irrelevant to the field of payment processes. 

    give the answer in plain text
    """
pdf_path = os.path.join(os.path.dirname(__file__), "chatdata.pdf")
pdf_loader = PyPDFLoader(pdf_path)
pages = pdf_loader.load_and_split()
texts = [page.page_content for page in pages]

embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key=GOOGLE_API_KEY)
vector_index = Chroma.from_texts(texts, embeddings).as_retriever(search_kwargs={"k": 5})

qa = ConversationalRetrievalChain.from_llm(model, retriever=vector_index, prompt_template=PromptTemplate(default_prompt))
discussion = []

def res(prompt):
    result = qa({"question": prompt, "chat_history": discussion, "system": default_prompt})
    print(result)
    discussion.append((prompt, result['answer']))
    return result['answer']
    
@app.route("/predict", methods=["POST"])
def predict():
    request_data = request.get_json()
    if not request_data or "message" not in request_data:
        return jsonify({"error": "Invalid request"}), 400
    
    text = request_data["message"]
    response = res(text)
    message = {"answer": response}
    
    return jsonify(message)

if __name__ == "__main__":
    app.run(debug=True)
