"use client"
import { Icon } from "@/utils";
import { Products } from "../products/Products";
import { Chip, Button } from "@nextui-org/react";
import { IProduct } from "@/interfaces";

export const ProductCard = ({ img,title, description, rating, price }: IProduct) => {
    return (
        <section className="bg-white gap-5 flex flex-col p-4 border shadow-md rounded-md justify-center items-center">
            <div className="flex items-center hidden">
                <Chip className="text-white bg-emerald-400 " color="success" variant="shadow">sale 50%</Chip>
            </div>

            <div
                className="flex justify-center items-center rounded-full w-2/3 bg-contain "
                style={{
                    backgroundImage: 'url(fondo-partner.png)',
                    backgroundPosition: 'center',
                }}
            >
                <img src={ img } alt={ title } className='w-36 h-36 rounded-full w-full'/>
            </div>

            {/* flex, flex-row, justify-between items-center */}
            <article className=" gap-5 flex flex-row justify-between items-center" >
                <div>
                    {/* title */}
                    <h3 className="text-gray-700 font-semibold">{title} </h3>
                    <p className="text-gray-400 text-xs">{description} </p> 

                    {/* price */}
                    <p className="font-bold font-serif">${price} </p>
                    {/* Raiting */}
                    <div className="mt-4 flex justify-center items-center flex-row">
                        { Icon({ name: 'FaStar', library: 'fa', className: "w-4 h-4 text-yellow-300 ms-1" }) }
                        { Icon({ name: 'FaStar', library: 'fa', className: "w-4 h-4 text-yellow-300 ms-1" }) }
                        { Icon({ name: 'FaStar', library: 'fa', className: "w-4 h-4 text-yellow-300 ms-1" }) }
                        { Icon({ name: 'FaStar', library: 'fa', className: "w-4 h-4 text-yellow-300 ms-1" }) }
                        { Icon({ name: 'FaStar', library: 'fa', className: "w-4 h-4 text-yellow-300 ms-1" }) }
                    </div>
                </div>

                <Button isIconOnly className="bg-emerald-400 my-6">
                    {
                        Icon( { 
                            className: "text-white w-6 h-6 ", 
                            name:"IoAdd",
                            library: "io5", 
                        })
                    }
                </Button>

                    
            </article>
        </section>
    )
}
