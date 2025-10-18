import React from 'react'
import FAQItem from './FAQItem'

/**
 * FAQSection component renders a list of FAQ items
 * @param {Array} faqs - Array of FAQ objects containing id, question, answer, and category
 */
const FAQSection = ({ faqs }) => {
  if (!faqs || faqs.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.id}
          id={faq.id}
          question={faq.question}
          answer={faq.answer}
          category={faq.category}
        />
      ))}
    </div>
  )
}

export default FAQSection