import os 
import json
os.environ["GOOGLE_API_KEY"] = "AIzaSyCYeE0wT2nMhNV5aIwp1tpLrdKc37GRizM"
GOOGLE_API_KEY = "AIzaSyCYeE0wT2nMhNV5aIwp1tpLrdKc37GRizM"
import google.generativeai as genai
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-pro')

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

    Based on these criteria, calculate the scores for each payment method and rank them from best to least. Return the list in plain text format. give the answer in object format like json. dont write the word json on top, just give the object''')
    json_data = json.loads(response.text)


    return (json_data)