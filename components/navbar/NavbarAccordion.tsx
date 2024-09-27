"use client"

import {Accordion, AccordionItem} from "@nextui-org/react";
import Link from "next/link"

import { Icon } from "@/utils"

interface Props {
  title: string;
  setIsOpen: React.Dispatch<React.SetStateAction<{
    modulos: boolean,
    subprocesos: boolean
  }>>,
  setIsMenuOpen: (isOpen: boolean) => void,
  type: 'modulos' | 'subprocesos'
}

export const NavbarAccordion = ({ title, setIsOpen, setIsMenuOpen, type }: Props) => {
  
  const modules = [
    {
      slug: 'Vanessa',
      icon: 'FaShop',
      description: 'Estilista profesional de uñas',
      isActive: true,
      title: 'Maquilladora'

    }
  ]

  const subprocesses = [
    {
      icon: 'FaShop',
      description: 'maquillaje',
      name: 'style',
    }
  ]

  return (
    <Accordion
      className="bg-transparent p-0"
      isCompact
    >
      <AccordionItem title={ title }>
        <div className="flex flex-col gap-3 place-content-center ml-2">
          {
            type === 'modulos' ?
              modules && modules.map( (option, i) => (
                <Link 
                  key={ option.slug } 
                  href={option.isActive ? `/modulo/${option.slug}` : ''}
                  className={`flex items-center gap-4 ml-2 ${!option.isActive && 'opacity-70'}`}
                  onClick={ () => { 
                    option.isActive && setIsOpen({
                      modulos: false,
                      subprocesos: false
                    });

                    setIsMenuOpen(false);
                  }}
                >
                  {
                    Icon({ 
                      name: option.icon ?? 'FaBook', 
                      library: 'fa', 
                      className: `text-lg m-2 text-${ i % 2 === 0 ? 'red' : 'indigo'}-500`
                    })
                  }

                  <div>
                    <h6>{ option.title }</h6>
                    
                    <p style={{ fontSize: 12, color: "gray" }}>
                      {
                        option.description.length < 40 
                          ? option.description 
                          : option.description.slice(0, 40).concat('...')
                      }
                    </p>
                  </div>
                </Link>
              ))
            : (
              subprocesses && subprocesses.map( subprocess => (
                <Link
                  key={ subprocess.name }
                  href="#"
                  className="flex items-center gap-4 ml-2"
                  onClick={ () => {
                    setIsOpen({
                      modulos: false,
                      subprocesos: false
                    }) 

                    setIsMenuOpen(false);
                    // openModal({ type: 'subprocess', subprocess });
                  } }
                >
                  
                  <img 
                    src={ subprocess.icon || '' } 
                    alt={ subprocess.name } 
                    className="w-7 h-7"
                  />

                  <div>
                    <h6>{ subprocess.name }</h6>
                    <p style={{ fontSize: 12, color: "gray" }}>{ subprocess.description }</p>
                  </div>
                </Link>
              ))
            )
          }
        </div>
      </AccordionItem>
    </Accordion>
  )
}
