import React, { useState } from "react";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      question: "What is your return policy?",
      answer:
        "You may return undamaged items 30 days after purchase for a full refund of your purchase."
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order using the tracking link sent to your email after purchase."
    },
    {
      question: "Can I purchase items again?",
      answer:
        "Yes, you can reorder items from your order history anytime."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ width: "800px", margin: "50px auto", fontFamily: "Arial", marginTop:"100px"}}>
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: "8px" }}>
          
          <div
            onClick={() => toggleAccordion(index)}
            style={{
              padding: "12px",
              background: "#f2f2f2",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold"
            }}
          >
            {item.question}
 
            <span>
              {activeIndex === index ? "-" : "+"}
            </span>
          </div> 

          {activeIndex === index && (
            <div style={{ padding: "12px", background: "#fff" }}>
              {item.answer}
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

export default Accordian;