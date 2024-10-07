"use client"

import { Button } from "@nextui-org/button"
import {Checkbox} from "@nextui-org/checkbox";
import { useState } from "react";
import {Input} from "@nextui-org/react";


export const Contact = () => {        

    const [ isSelected ,setIsSelected] = useState<boolean>(false);

  return (
        <section 
            className=" bg-gray-200 p-6 lg:p-10 mt-10 justify-center items-center flex flex-row"
            style={{
                background: 'url("background-header.svg")',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
        <div className="bg-white shadow-2xl justify-center rounded-lg p-10 flex flex-col w-full sm:w-3/4 md:w-3/5 lg:w-1/2">

            <h1 className="mb-5 inline-block bg-clip-text text-transparent bg-gradient-to-br from-emerald-500 to-emerald-400 text-3xl font-extrabold font-serif">Contactate con Girabelle</h1>
            <p className="text-sm"> Estamos aquí para ti. Si tienes alguna pregunta, sugerencia o simplemente quieres saber más sobre nuestros servicios, no dudes en contactarnos. ¡Nos encanta ayudarte a hacer realidad tus ideas!</p>
        
            <form className="flex flex-col mt-7 gap-5 ">
            
                <Input
                    isRequired
                    type='text'
                    minLength={5}
                    maxLength={50}
                    pattern="[A-Za-zÀ-ÿ\u00f1\u00d1\s]+"
                    placeholder="Nombre"
                    variant='underlined'
                    color='success'
                />

                <Input
                    isRequired
                    type='text'
                    minLength={5}
                    maxLength={50}
                    pattern="[A-Za-z0-9]+"
                    placeholder="Direccion"
                    variant='underlined'
                    color='success'
                />

                <Input
                    isRequired
                    type='text'
                    minLength={5}
                    maxLength={50}
                    pattern="[A-Za-zÀ-ÿ\u00f1\u00d1\s]+"
                    placeholder= "Ciudad"
                    variant='underlined'
                    color='success'
                />

                <Input
                    isRequired
                    type='number'
                    minLength={5}
                    maxLength={50}
                    id="tel"
                    placeholder= "Telefono"
                    pattern="\d{10}"
                    variant='underlined'
                    color='success' 
                />

                <Input
                    isRequired
                    minLength={5}
                    maxLength={50}
                    type="email"
                    id="correo"
                    placeholder= "Email"
                    variant='underlined'
                    color='success'  
                />
                
                <Input
                    isRequired
                    placeholder= "Cuentanos tu idea"
                    variant='underlined'
                    color='success' 
                />

                <Checkbox size="sm" color="success" className="text-white" isSelected={isSelected} onValueChange={setIsSelected}>
                    Suscribete
                </Checkbox>

                <Button className="mt-5 text-white bg-gradient-to-br from-emerald-500 to-emerald-600" variant="shadow" >
                    Enviar
                </Button>
            </form>
        </div>
      </section>
    
  )
}


