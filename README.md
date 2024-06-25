## Amazon Hackon 2024 (Season 4) Prototype

**Theme**: *Personalized Payment Experiences and Financial Management*

**Team Name**: *Audacious Aloos*

# Prototype Resources
- Deployed on Website: [Website Link]()
- Presentation of Idea Submission Round: [Link](https://drive.google.com/file/d/1mzPJ2t67L8unvYl5UUxb3jMq0L6UuF4u/view?usp=sharing)

# Prototype Images
1. **Payment Assistant Smart Payments**

    ![image](https://github.com/AAnimeshTripathy/Amazon-hackon/blob/main/images/chatbot.jpg)
    
2. **Budget Dashboard and Management Tools**

    ![image](https://github.com/AAnimeshTripathy/Amazon-hackon/blob/main/images/dashboard.jpg)
    
3. **Smart Payment**

    ![image](https://github.com/AAnimeshTripathy/Amazon-hackon/blob/main/images/paymentrecommendationpage.jpg)

# Introduction
Welcome to the Audacious Aloos' Amazon Payment and Financial Management Assistant project! Our solution aims to revolutionize the way you manage your finances and payment experiences on Amazon. We understand that keeping track of transactions, optimizing payment methods, and managing budgets can be daunting. That's why we've developed a comprehensive AI-powered assistant to help you streamline these processes.

# Project Overview
## Our Goal
Our primary objective is to provide a seamless, personalized financial management experience that simplifies payment handling, budgeting, and savings tracking. Our solution leverages advanced AI technologies to ensure you make informed financial decisions effortlessly.

## How It Works
Our solution integrates various AI and ML models to offer personalized payment recommendations, detailed transaction summaries, and budget management tools. By analyzing your payment history, current success rates, available cashbacks, and the costs of different payment options, our assistant provides optimized suggestions tailored to your needs.

# Features
1. **Personalized Payment Method Suggestions:** Optimize your payment choices based on past history, success rates, cashbacks, and costs.
2. **Detailed Transaction Summary:** Get comprehensive details of your transactions, categorized and summarized for easy understanding.
3. **Comprehensive Savings Overview:** Track your savings on a yearly, monthly, and overall basis.
4. **Amazon Pay Wallet Information:** Manage your Amazon Pay wallet, view balances, and recent transactions.
5. **Budget Management Tools:** Set purchase amount limits, receive threshold notifications, and monitor spending across categories.
6. **Payment Assistant:** Resolve repetitive payment queries using generative AI, and escalate complex issues to customer support agents when necessary.

# Technologies Used
- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Machine Learning:** OpenAI API, Langchain, Numpy, Pandas
- **Cloud Services:** AWS (EC2, S3, Lambda, etc.)
- **Other Technologies:** 

# Methodology
![image](https://github.com/AAnimeshTripathy/Amazon-hackon/blob/main/images/Flowchart.jpg)

# Installation
1. **Install MongoDB Community Server:** [Download Link](https://www.mongodb.com/try/download/community)
2. **Download and Install Visual Studio 2022:** Ensure to select "Desktop development with C++". [VS Code Download Link](https://visualstudio.microsoft.com/)
3. **Clone the Repository:**
    ```
    git clone https://github.com/AAnimeshTripathy/Amazon-hackon.git
    ```
4. **Setup Environment Variables:**
    - Create a `.env` file in `./backend` and add the following:
      ```
      REACT_APP_BASE_URL="http://localhost:8000"
      PORT=8000
      CORS_ORIGIN=*
      MONGODB_URL='Generate-one from MongoDB Atlas'
      ```
    - Create a `.env` file in `./frontend` and add the following:
      ```
      REACT_APP_API_URL = 'https://fakestoreapi.com/products'
      REACT_APP_FIREBASE_API_KEY = 'add-yours'
      ```
5. **Install Dependencies and Start Servers:**
    - Backend:
      ```
      cd ./backend
      npm install
      npm i -D nodemon
      npm run dev
      ```
    - Frontend:
      ```
      cd ./amazon-clone-react
      npm install
      npm start
      ```

# Solution Details
## Payment Assistant
- **AI-Powered Chatbot**: Resolves repetitive and rule-based queries using generative AI.
- **RAG Implementation**: Uses Retrieval-Augmented Generation for accurate query responses.
- **Issue Escalation**: Redirects complex issues to customer support agents.
- **LLM-Based**: Built on Large Language Models for continuous improvements.
- **Personalization**: Fine-tuned for Amazon users and the payment platform.
- **Positive Impact**: Reduces customer support load, decreases response times, and provides 24/7 support.
- **Impact Metrics**: Measures user satisfaction, reduced query resolution time, and increased productivity.
- **Technologies Used**: Utilizes OpenAI models (GPT-3.5 Turbo), Langchain for vector similarity search, and AWS for hosting and scalability.
## Smart Payments
- **Data Retrieval:** Utilize NoSQL databases for comprehensive data.
- **Data Preprocessing:** Use NumPy and Pandas for data collection and preprocessing.
- **Features:** Analyze product discounts, expiring gift cards, and recommend optimal credit card offers.
- **User Recommendation System:** Provide personalized payment method recommendations using advanced algorithms.

## Budget Dashboard
- **User Database:** NoSQL databases for user information, Amazon Pay wallet, and transaction history.
- **Savings Overview:** Use visualization libraries like D3.js or Chart.js for data display.
- **Transaction Summary:** Implement filtering and search using Text Search algorithm.
- **Wallet Information:** Manage and display the Amazon Pay wallet balance and recent transactions.
- **Budgeting and Notifications:** Implement rule-based systems to notify users when spending limits are exceeded. Use time-series analysis algorithms to track and predict spending patterns, providing monthly and yearly savings reports.

# Conclusion
Our solution is designed to provide a holistic financial management experience, helping Amazon users manage their payments, budgets, and savings efficiently. By leveraging advanced AI technologies, we aim to make financial management intuitive, personalized, and effective.
