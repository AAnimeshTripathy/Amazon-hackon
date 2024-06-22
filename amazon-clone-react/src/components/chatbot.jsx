import React, { useState, useEffect } from "react";
import "./chatbot-style.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === "Enter") {
        handleSendMessage();
      }
    };

    const inputNode = document.querySelector(".chatbox__support input");
    inputNode.addEventListener("keyup", handleKeyUp);

    return () => {
      inputNode.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { name: "User", message: input };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: JSON.stringify({ message: input }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      const botMessage = { name: "Sam", message: data.answer };
      setMessages([...newMessages, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className={`chatbox ${isOpen ? "chatbox--active" : ""}`}>
        <div className="chatbox__support">
          <div className="chatbox__header">
            <div className="chatbox__image--header">
              <img
                src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                alt="User"
              />
            </div>
            <div className="chatbox__content--header">
              <h4 className="chatbox__heading--header">Chat support</h4>
              <p className="chatbox__description--header">
                Hi. How can I help you regarding your recent Amazon Pay
                transaction?
              </p>
            </div>
          </div>
          <div className="chatbox__messages">
            <div>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`messages__item messages__item--${
                    msg.name === "Sam" ? "visitor" : "operator"
                  }`}
                >
                  {msg.message}
                </div>
              ))}
            </div>
          </div>
          <div className="chatbox__footer">
            <input
              type="text"
              placeholder="Write a message..."
              value={input}
              onChange={handleInputChange}
            />
            <button
              className="chatbox__send--footer send__button"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="chatbox__button">
        <button onClick={toggleChatbox}>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/ink/48/chatbot.png"
            alt="chatbot"
          />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
