import { useState, useEffect } from 'react'
import { initialServices } from '@/data'
import { Service } from '@/interfaces'

export function useBeautyServices() {
  const [priceRange, setPriceRange] = useState<number[]>([0, 150])
  const [ratingRange, setRatingRange] = useState<number[]>([0, 5])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortOption, setSortOption] = useState<string>("rating")
  const [filteredServices, setFilteredServices] = useState<Service[]>(initialServices)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(9)

  useEffect(() => {
    let result = initialServices

    if (searchTerm) {
      result = result.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    if (selectedCategories.length > 0) {
      result = result.filter(service => selectedCategories.includes(service.category))
    }

    if (selectedTags.length > 0) {
      result = result.filter(service => 
        service.tags.some(tag => selectedTags.includes(tag))
      )
    }

    result = result.filter(service => 
      service.price >= priceRange[0] && service.price <= priceRange[1]
    )

    result = result.filter(service => 
      service.rating >= ratingRange[0] && service.rating <= ratingRange[1]
    )

    switch (sortOption) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    setFilteredServices(result)
    setCurrentPage(1)
  }, [selectedCategories, selectedTags, priceRange, ratingRange, sortOption, searchTerm])

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const handleTagChange = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentServices = filteredServices.slice(startIndex, endIndex)

  return {
    filteredServices,
    currentServices,
    totalPages,
    currentPage,
    itemsPerPage,
    searchTerm,
    selectedCategories,
    selectedTags,
    priceRange,
    ratingRange,
    sortOption,
    setSearchTerm,
    handleCategoryChange,
    handleTagChange,
    setPriceRange,
    setRatingRange,
    setSortOption,
    setItemsPerPage,
    setCurrentPage,
  }
}