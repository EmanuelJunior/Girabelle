import { categoryData } from "@/data"
import { CategoryCard} from "../cards"

export const CategorySection = () => {
    return (
        <section className="p-10 mb-10">
            <div className="flex justify-center">
                <h1 className="font-extrabold text-4xl text-center font-serif bg-gradient-to-r from-emerald-500 to-emerald-300 bg-clip-text text-transparent inline-block">Categorias</h1>
            </div>
            

            <div className="mt-10 gap-5 flex justify-center items-center">
                
                {
                    categoryData.map( ( { img, title, description } ) => {

                        return (
                            <CategoryCard
                                key={ title }
                                img={ img }
                                title={ title }
                                description={ description }
                            />
                        )
                    })
                }

            </div>  
                      
        </section>
    )
}
