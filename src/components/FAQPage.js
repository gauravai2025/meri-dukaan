import React, { useState } from "react";
import "../styles/FAQPage.css";

const faqData = [
  {
    question: "What is the delivery timing?",
    answer:
      "We deliver milk every day between 6 AM and 9 AM, and 5 PM and 8 PM for evening slots.",
  },
  {
    question: "Can I pause my subscription?",
    answer: "Yes, you can pause your subscription anytime from your dashboard.",
  },
  {
    question: "Is there any delivery charge?",
    answer:
      "Delivery is free for monthly and weekly plans. Daily plans have a nominal fee of ₹10 per delivery.",
  },
  {
    question: "How can I make payment?",
    answer: "We accept UPI, credit/debit cards, and net banking.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              <span style={{ fontSize: "1.3rem" }}>
                {activeIndex === index ? "▾" : "▸"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
