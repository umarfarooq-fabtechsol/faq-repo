import React, { useState, useMemo } from 'react'
import FAQSection from './components/FAQSection'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import { faqData } from './data/faqData'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Get unique categories from FAQ data
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(faqData.map(faq => faq.category))]
    return ['All', ...uniqueCategories]
  }, [])

  // Filter FAQs based on search term and selected category
  const filteredFAQs = useMemo(() => {
    return faqData.filter(faq => {
      const matchesSearch = 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const handleSearchChange = (term) => {
    setSearchTerm(term)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Find quick answers to common questions. Can't find what you're looking for? 
            <span className="text-blue-600 font-medium"> Contact our support team</span>.
          </p>
        </header>

        <div className="mb-8 space-y-4">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={handleSearchChange} 
          />
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-500">
            {filteredFAQs.length === 0 ? (
              'No FAQs found matching your search criteria.'
            ) : (
              `Showing ${filteredFAQs.length} of ${faqData.length} questions`
            )}
          </p>
        </div>

        <FAQSection faqs={filteredFAQs} />

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No results found
              </h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search terms or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        <footer className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Our support team is here to help you 24/7.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Contact Support
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App