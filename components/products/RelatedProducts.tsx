import { ProductCard, ServiceCard } from "../cards"

export const RelatedProducts = () => {
  return (
    <article className="flex flex-col items-center gap-3 justify-center mt-10">
        <h1 className="font-bold text-2xl mb-5">Productos relacionados</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
            {
                [...Array(4)].map( i => (
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
    </article>
  )
}