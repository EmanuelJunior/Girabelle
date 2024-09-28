"use client"

import {ProductCard} from "../cards"
import {Tabs, Tab} from "@nextui-org/react";



export const Products = () => {
    return(
        <section className="flex flex-col justify-center items-center">
          <h1 className='text-3xl bg-clip-text text-transparent font-serif font-extrabold mb-5 bg-gradient-to-r from-emerald-500 to-emerald-400'>Explora nuestros servicios</h1>
                
          <Tabs variant="underlined">
              <Tab key="Servicios " title="Servicios de estilistas"/>
              <Tab key="Servicios" title="Servicios de spa"/>
              <Tab key="servicios" title="Servicios de make-up "/>
              <Tab key="servicio de uñas" title="Servicios de uñas"/>
              <Tab key="Servicios cosmetologicos" title="Servicios cosmetologicos"/>
          </Tabs>

          <div className="gap-8 px-8 sm:px-14 md:px-20 lg:px-24 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
            
            {
              [...Array(8)].map( i => (
                <ProductCard
                  img="/foto-de-perfil.png"
                  title="Sofia"
                  description="Cosmetóloga certificada con más de 8 años de experiencia. Experta en tratamientos faciales y rejuvenecimiento de piel."
                  price={599}
                  rating={5}
                />
              ))
            }
            
            {/* <ProductCard
              img="/foto-de-perfil.png"
              title="Sofia"
              description="Cosmetóloga certificada con más de 8 años de experiencia. Experta en tratamientos faciales y rejuvenecimiento de piel."
              price={599}
              rating={5}
            />
                
            <ProductCard
              img="/foto-de-perfil.png"
              title="Ana"
              description="Estilista profesional con 10 años de experiencia. Especializada en cortes modernos y coloración avanzada."
              price={599}
              rating={5}
            />

            <ProductCard
              img="/foto-de-perfil.png"
              title="Camila"
              description="Manicurista creativa con 6 años de experiencia. Especialista en nail art y cuidado de uñas."
              price={599}
              rating={5}
            /> */}

            {/* <ProductCard
              img="/foto-de-perfil.png"
              title="Johana"
              description=" Maquilladora con 7 años de experiencia, especializada en maquillaje para novias y eventos de gala."
              price={599}
              rating={5}
            /> */}


              
          

           
            
            
          </div>
        </section>
    )
}