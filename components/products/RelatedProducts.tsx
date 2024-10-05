import { ProductCard } from "../cards"

export const RelatedProducts = () => {
  return (
    <article className="flex flex-col items-center gap-3 justify-center mt-10">
        <h1 className="font-bold text-2xl mb-5">Productos relacionados</h1>

        <div className="grid grid-cols-4 gap-3 mb-10">
            {
                [...Array(4)].map( i => (
                    <ProductCard
                        key={i}
                        img="/foto-de-perfil.png"
                        title="Sofia"
                        description="Cosmetóloga certificada con más de 8 años de experiencia."
                        price={599}
                        rating={5}
                    />
                ))
            }
        </div>
    </article>
  )
}