import { Icon } from "@/utils"

interface FeatureCardProps {
    icon: React.ReactNode; 
    title: string;
    description: string;
}

export const FeatureCard = ({
    icon,
    title,
    description,
}: FeatureCardProps) => {

    return(
        <article className='flex justify-center gap-3 items-center'>
            
            { icon }
            
            <div className="flex-grow-0 justify-center" >
                <h1 className="text-xs md:text-sm font-semibold">{ title }</h1>
                <p className="text-xs text-gray-500">{ description }</p>
            </div>
        </article> 
    )
}

/*

{
    nombre: "Emanuel",
    apellidos: "Garcés Zuluaga",
    edad: 20,
    telefono: 3044732196
}

{
    name: 'FaHome',
    library: 'fa',
    className: 'text-red-500'
}

*/