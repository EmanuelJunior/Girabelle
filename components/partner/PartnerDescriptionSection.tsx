import { listService } from "@/data"
import { CheckListItem } from "../widget"
import { InfoCard } from "../cards"

export const PartnerDescriptionSection = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-center gap-3">
        <ul className="flex flex-col gap-2 w-full md:w-1/2 ">
        <p>
            Resalta tu belleza con nuestro servicio de maquillaje profesional. Ya sea para un evento especial, una boda o una sesión fotográfica, nuestros maquilladores expertos se asegurarán de que luzcas espectacular. Utilizamos productos de alta calidad y técnicas avanzadas para crear un look personalizado que resalte lo mejor de ti. ¡Agenda tu cita y brilla en cualquier ocasión!
        </p>
        
        { 
            listService.map(({ description } ) => {
                return (
                    <CheckListItem
                        description={description} 
                    />
                )
            })
        }
        </ul>

        <div className="w-full md:w-1/2">
            <img
                src="https://www.letsmakeup.es/wp-content/uploads/2020/02/LETSMAKEUP-Video-principal-maquillando.jpg"
                alt="banner"
                className='w-full h-full rounded-md'
            />

            <div className="flex gap-2 justify-between flex-row mt-4 border-medium p-5 rounded-md">
                <InfoCard/>
                <InfoCard/>
            </div>
        </div>
    </section>
  )
}