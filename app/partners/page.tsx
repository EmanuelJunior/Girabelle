'use client'

import React from 'react'
import { HeaderPartners, MainContentPartners } from '@/components/partner'
import { useBeautyServices } from '@/hooks'
import { SidebarPartners } from '@/components/partner/SidebarPartners'

export default function BeautyServices() {
  const {
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
  } = useBeautyServices()

  return (
    <>
      <HeaderPartners />
      <div className="container mx-auto px-4 py-8">
        <main className="flex flex-col md:flex-row gap-8">
          <SidebarPartners
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategories={selectedCategories}
            handleCategoryChange={handleCategoryChange}
            selectedTags={selectedTags}
            handleTagChange={handleTagChange}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            ratingRange={ratingRange}
            setRatingRange={setRatingRange}
          />
          <MainContentPartners
            filteredServices={filteredServices}
            currentServices={currentServices}
            totalPages={totalPages}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            sortOption={sortOption}
            setSortOption={setSortOption}
            setItemsPerPage={setItemsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </main>
      </div>
    </>
  )
}