import { FeatureCard } from "./FeatureCard"
import { Icon } from "@/utils"

// BenefitsCard
export const BenefitsCard = () => {
    return(
        <section className="border border-gray-100 p-5 mx-5 my-10 md:mx-10 shadow-xl bg-white rounded-md gap-9 flex flex-col md:flex-row items-start md:items-center justify-center">
            
            <FeatureCard 
                icon={ Icon({ name: 'FaClock', library: 'fa', className: 'text-emerald-500 text-3xl md:text-4xl lg:text-5xl' }) }
                title='Agenda tu cita en segundos '
                description="Accede a tu servicio ideal con solo unos clics"
            />

            <FeatureCard
                icon={ Icon({ name: "IoChatboxEllipses" , library: "io5" , className: "text-emerald-500 text-3xl md:text-4xl lg:text-5xl" })}
                title="Comunicacion directa con tu profesional"
                description="Habla directamente con los profesionales antes de reserva"
            />
                

            <FeatureCard
                icon={ Icon({ name: "FaSmileBeam" , library: "fa" , className: "text-emerald-500 text-3xl md:text-4xl lg:text-5xl" })}
                title="Servicios garantizados para encantar"
                description="Calidad asegurada para tu total satisfacción"
            />
            
            <FeatureCard
                icon={ Icon({ name: "IoPeople" , library: "io5" , className: "text-emerald-500 text-3xl md:text-4xl lg:text-5xl" })}
                title="Explora perfiles completos de profesionales"
                description="Conoce su experiencia y habilidades antes de reservar"
            />
        </section>
    )
}