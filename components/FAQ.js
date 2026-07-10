"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What does a turnkey interior project mean?",
      a: "A turnkey interior project means Adroit Design handles every stage of your space — design, approvals, civil work, electrical, furniture and finishing — under one contract, so you receive a ready-to-use space without coordinating multiple vendors."
    },
    {
      q: "What is the difference between corporate and commercial interior design?",
      a: "Corporate interior design focuses on offices, headquarters and workspaces built around productivity and brand identity. Commercial interior design covers a wider range of business spaces such as retail stores, showrooms, restaurants and clinics, each with its own functional and customer-facing needs."
    },
    {
      q: "How long does a typical office fit-out take?",
      a: "Most office fit-outs with Adroit Design are completed in 6 to 12 weeks depending on the built-up area, scope of civil work, and approval timelines, with a detailed schedule shared before execution begins."
    },
    {
      q: "Does Adroit Design handle both design and construction?",
      a: "Yes. Adroit Design is a design-and-build firm, which means the same team that designs your space also executes the civil, MEP and finishing work, removing the gap between design intent and site reality."
    },
    {
      q: "Which cities does Adroit Design operate in?",
      a: "Adroit Design executes corporate and commercial interior projects across Chennai and Tamil Nadu, and takes on select turnkey projects in other Indian cities on request."
    }
  ];

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Turnkey interior design, explained</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openIndex === idx ? "open" : ""}`}>
              <button className="faq-q" onClick={() => toggleFAQ(idx)}>
                {faq.q}
                <span className="plus">+</span>
              </button>
              <div
                className="faq-a"
                style={{ maxHeight: openIndex === idx ? "500px" : "0" }}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
