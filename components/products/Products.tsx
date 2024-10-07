"use client"

import {ProductCard, ServiceCard} from "../cards"
import {Tabs, Tab} from "@nextui-org/react";

export const Products = () => {
    return(
        <section className="flex flex-col justify-center items-center">
          <h1 className='text-3xl bg-clip-text text-transparent font-serif font-extrabold mb-5 bg-gradient-to-r from-emerald-500 to-emerald-400'>Explora nuestros servicios</h1>
                
          <Tabs variant="underlined" color='success'>
              <Tab key="Servicios " title="Servicios de estilistas"/>
              <Tab key="Servicios" title="Servicios de spa"/>
              <Tab key="servicios" title="Servicios de make-up "/>
              <Tab key="servicio de uñas" title="Servicios de uñas"/>
              <Tab key="Servicios cosmetologicos" title="Servicios cosmetologicos"/>
          </Tabs>

          <div className="gap-8 px-8 sm:px-14 md:px-20 lg:px-24 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
            
            {
              [...Array(8)].map( i => (
                <ServiceCard
                  service={{
                    id: i,
                    category: "Estilista",
                    name: "Corte de cabello",
                    image: "https://img.freepik.com/psd-gratis/hombre-expresivo-gesticulando_23-2150198670.jpg",
                    service: "Corte de cabello para dama y caballero.",
                    tags: ["Corte", "Estilo", "Cabello"],
                    price: 50,
                    rating: 5
                  }}
                />
              ))
            }
          </div>
        </section>
    )
}