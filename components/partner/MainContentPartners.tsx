import React from 'react'
import { Select, SelectItem } from "@nextui-org/react"
import { Pagination } from '@/components/widget'
import { ServiceCard } from '@/components/cards'
import { Service } from '@/interfaces'

interface MainContentPartnersProps {
  filteredServices: Service[]
  currentServices: Service[]
  totalPages: number
  currentPage: number
  itemsPerPage: number
  sortOption: string
  setSortOption: (option: string) => void
  setItemsPerPage: (count: number) => void
  setCurrentPage: (page: number) => void
}

export const MainContentPartners = ({
  filteredServices,
  currentServices,
  totalPages,
  currentPage,
  itemsPerPage,
  sortOption,
  setSortOption,
  setItemsPerPage,
  setCurrentPage,
}: MainContentPartnersProps) => {
  return (
    <section className="w-full md:w-3/4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-5">
        <span>{filteredServices.length} Resultados encontrados</span>
        <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-1/2">
          <Select 
            label="Productos por página" 
            value={itemsPerPage.toString()} 
            classNames={{
              label: 'text-xs',
            }}
            size='sm'
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <SelectItem key="9" value="9">9 por página</SelectItem>
            <SelectItem key="12" value="12">12 por página</SelectItem>
            <SelectItem key="15" value="15">15 por página</SelectItem>
          </Select>
          <Select 
            label="Ordenar por" 
            value={sortOption}
            classNames={{
              label: 'text-xs',
            }}
            size='sm'
            onChange={(e) => setSortOption(e.target.value)}
          >
            <SelectItem key="rating" value="rating">Mejor calificados</SelectItem>
            <SelectItem key="price-low" value="price-low">Precio: Bajo a Alto</SelectItem>
            <SelectItem key="price-high" value="price-high">Precio: Alto a Bajo</SelectItem>
            <SelectItem key="name" value="name">Orden alfabético</SelectItem>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          currentServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        }
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  )
}