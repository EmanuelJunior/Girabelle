import { CategoryCard} from "../cards"

export const CategorySection = () => {
    return (
        <section className="p-10 mb-10">
            <div className="flex justify-center">
                <h1 className="font-extrabold text-4xl text-center font-serif bg-gradient-to-r from-emerald-500 to-emerald-300 bg-clip-text text-transparent inline-block">Categorias</h1>
            </div>
            

            <div className="mt-10 gap-5 flex justify-center items-center">
                <CategoryCard
                    img= "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?cs=srgb&dl=pexels-olly-3757952.jpg&fm=jpg"
                    title="Servicios de spa"
                    description="23 Partners"
                />

                <CategoryCard
                     img= "https://i.pinimg.com/564x/af/b1/78/afb17850b787c1c41179665f84bf3875.jpg"
                     title="Servicios estilistas"
                     description="31 Partners"
                
                />
                <CategoryCard
                    img= "https://img.freepik.com/fotos-premium/manos-mujer-retrato-herramientas-maquillaje-belleza-cuidado-piel-bienestar-dermatologia-cosmetica-modelo-brillo-facial-pincel-aplicacion-cuidado-personal-vision-productos-salon-lujo-estudio_590464-130482.jpg?w=360"
                    title="Servicios make-up"
                    description="27 Partners"
                
                />
                <CategoryCard
                    img= "https://lavandacasaspa.com/wp-content/uploads/2020/09/los-servicios-de-unas-un-mantenimiento-de-belleza-y-salud.jpg"
                    title="Servicio de uñas"
                    description="12 Partners"
                 
                />
                <CategoryCard
                    img= "https://cdn.euroinnova.edu.es/img/subidasEditor/fotolia_100882315_subscription_xxl-1619509673.webp"
                    title="Servicio cosmeticos"
                    description="97 Partners"
                 
                />
            </div>  
                      
        </section>
    )
}
