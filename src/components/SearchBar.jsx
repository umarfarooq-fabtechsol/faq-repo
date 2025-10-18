import React from 'react'
import { Search, X } from 'lucide-react'

/**
 * SearchBar component for filtering FAQ items
 * @param {string} searchTerm - Current search term
 * @param {function} onSearchChange - Callback function when search term changes
 */
const SearchBar = ({ searchTerm, onSearchChange }) => {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value)
  }

  const clearSearch = () => {
    onSearchChange('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      clearSearch()
    }
  }

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search FAQs..."
          className="search-input block w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm transition-all duration-200"
aria-label="Search frequently asked questions"
        />
        
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Clear search"
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      
      {searchTerm && (
        <div className="mt-2 text-sm text-gray-600">
          <span>Searching for: </span>
          <span className="font-medium text-gray-800">"{searchTerm}"</span>
        </div>
      )}
    </div>
  )
}

export default SearchBar