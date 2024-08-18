import React, { useState } from 'react';

const faqs = [
  {
    question: "Will Apple stock go up?",
    answer: "According to Danelfin AI, Apple has today an AI Score of 9/10 (Buy rating), because its probability of beating the market in 3 months (39.94%) is +6.13% vs. the average probability (33.81%) of all US-listed stocks."
  },
  {
    question: "What is the target price for Apple stock?",
    answer: ""
  },
  {
    question: "Is it a good time to buy, sell, or hold Apple stock right now?",
    answer: ""
  },
  {
    question: "Is Apple undervalued right now?",
    answer: ""
  },
  {
    question: "What was the price range of Apple stock over the past 12 months?",
    answer: ""
  },
  {
    question: "What is going on with Apple stock in the last 3 months?",
    answer: ""
  },
  {
    question: "Does Apple offer dividend payments?",
    answer: ""
  },
  {
    question: "What is the current market capitalization of Apple?",
    answer: ""
  },
  {
    question: "When is the next Apple earnings report date?",
    answer: ""
  },
];

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="col-xl-9 stretch-card grid-margin card  " style={{margin:'45px',}}>
    <div className='justify-content-between' style={{ width: '85%', margin: '0 auto' }}>
      <h3 style={{fontSize:'24px'}}>AAPL Frequently Asked Questions</h3>
      {faqs.map((faq, index) => (
        <div key={index} style={{ borderBottom: '1px solid #ddd', padding: '10px 0', fontSize:'18px' }}>
          <div 
            onClick={() => toggleFAQ(index)} 
            style={{ 
              cursor: 'pointer', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '10px 0' 
            }}
          >
            <span>{faq.question}</span>
            <span>{activeIndex === index ? '▲' : '▼'}</span>
          </div>
          {activeIndex === index && (
            <div style={{ margin: '10px 0', paddingLeft: '10px' }}>
              {faq.answer ? faq.answer : "No answer provided."}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQComponent;
