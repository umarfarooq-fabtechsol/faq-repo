import React from 'react'
import { Filter } from 'lucide-react'

/**
 * CategoryFilter component for filtering FAQs by category
 * @param {Array} categories - Array of available categories
 * @param {string} selectedCategory - Currently selected category
 * @param {function} onCategoryChange - Callback function when category changes
 */
const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const handleCategoryClick = (category) => {
    onCategoryChange(category)
  }

  const handleKeyDown = (event, category) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleCategoryClick(category)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <Filter className="h-5 w-5 text-gray-600" aria-hidden="true" />
        <span className="text-sm font-medium text-gray-700">Filter by category:</span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isSelected = selectedCategory === category
          
          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              onKeyDown={(e) => handleKeyDown(e, category)}
              className={`category-tab px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm'
              }`}
              aria-pressed={isSelected}
              type="button"
            >
              {category}
              {isSelected && (
                <span className="ml-2 inline-block w-2 h-2 bg-white rounded-full" aria-hidden="true" />
              )}
            </button>
          )
        })}
      </div>
      
      <div className="mt-3 text-xs text-gray-500">
        Select a category to filter questions, or choose "All" to see everything.
      </div>
    </div>
  )
}

export default CategoryFilter