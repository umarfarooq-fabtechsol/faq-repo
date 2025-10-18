import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

/**
 * FAQItem component renders a single FAQ with expandable answer
 * @param {string} id - Unique identifier for the FAQ item
 * @param {string} question - The FAQ question text
 * @param {string} answer - The FAQ answer text
 * @param {string} category - The category this FAQ belongs to
 */
const FAQItem = ({ id, question, answer, category }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(prev => !prev)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleExpansion()
    }
  }

  return (
    <div className="faq-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
      <button
        className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
        onClick={toggleExpansion}
        onKeyDown={handleKeyDown}
        aria-expanded={isExpanded}
        aria-controls={`faq-answer-${id}`}
        type="button"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-3 mb-1">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                {category}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800leading-relaxed">
              {question}
            </h3>
          </div>
          <div className="flex-shrink-0 ml-4">
            <div className={`p-2 rounded-full transition-all duration-200 ${
              isExpanded 
                ? 'bg-blue-100 text-blue-600 rotate-180' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>
              {isExpanded ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
          </div>
        </div>
      </button>
      
      <div 
        id={`faq-answer-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
      >
        <div className="px-6 pb-6 pt-2">
          <div className="border-t border-gray-100 pt-4">
            <p className="text-gray-700 leading-relaxed text-base">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQItem