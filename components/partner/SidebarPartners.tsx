import React from 'react'
import { CategoryFilter, PriceRangeFilter, RatingRangeFilter, SearchBar, TagFilter } from '@/components/filters'
import { TopPartners } from '@/components/partner'
import { categories, popularTags, topPartners } from '@/data'

interface SidebarPartnersProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedCategories: string[]
  handleCategoryChange: (categoryId: string) => void
  selectedTags: string[]
  handleTagChange: (tag: string) => void
  priceRange: number[]
  setPriceRange: (range: number[]) => void
  ratingRange: number[]
  setRatingRange: (range: number[]) => void
}

export const SidebarPartners = ({
  searchTerm,
  setSearchTerm,
  selectedCategories,
  handleCategoryChange,
  selectedTags,
  handleTagChange,
  priceRange,
  setPriceRange,
  ratingRange,
  setRatingRange,
}: SidebarPartnersProps) => {
  return (
    <aside className="w-full md:w-1/4">
      <div className="space-y-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter
          categories={categories} 
          selectedCategories={selectedCategories} 
          handleCategoryChange={handleCategoryChange} 
        />
        <TagFilter 
          popularTags={popularTags} 
          selectedTags={selectedTags} 
          handleTagChange={handleTagChange} 
        />
        <PriceRangeFilter priceRange={priceRange} setPriceRange={setPriceRange} />
        <RatingRangeFilter ratingRange={ratingRange} setRatingRange={setRatingRange} />
        <TopPartners topPartners={topPartners} />
      </div>
    </aside>
  )
}