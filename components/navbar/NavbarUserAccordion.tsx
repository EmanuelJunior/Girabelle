"use client"

import { Accordion, AccordionItem, User } from "@nextui-org/react"
import { Icon } from "@/utils"
import Link from "next/link"

interface Props {
  setIsMenuOpen: (isOpen: boolean) => void
}

export const NavbarUserAccordion = ({ setIsMenuOpen }: Props) => {

  const user = {
    role: 'Super Admin',
    fullName: 'Emanuel Garcés Zuluaga',
    email: 'sagazu13@gmail.com',
    photo: 'https://www.siquia.com/assets/uploads/2022/03/pexels-nickolas-johnston-9102983-750x990.jpg'
  }

  return (
    <Accordion
      className="bg-transparent p-0"
      isCompact
    >
      <AccordionItem title={
        <>
          <h6 className="text-sm mb-2 text-gray-600">
            { 
              user?.role === 'Super Admin' ? 'Super Admin' 
              : user?.role !== 'Lector' ? `Admin ${ user?.role }`
              : 'Lector de Contenido'
            }
          </h6>

          <User
            name={user?.fullName}
            description={user?.email}
            classNames={{
              name: "text-default-600",
              description: "bg-gradient-to-l to-indigo-600 from-[#b23c3e] inline-block text-transparent bg-clip-text",
            }}
            avatarProps={{
              size: "sm",
              src: user?.photo,
            }}
          />
        </>
      }>
        <h6 className='text-sm my-3 text-gray-700'>
          Panel { user?.role !== 'Lector' ? 'de Administración' : 'de Usuario' }
        </h6>

        {
          user?.role !== 'Lector'  && (
            <div className='flex flex-col gap-3 border-b pb-3 border-gray-200 text-base'>
              <Link onClick={ () => setIsMenuOpen(false) } className='text-sm pl-3 flex justify-between items-center' href='/admin/entrada/nuevo'>
                Agregar
                { Icon({ name: 'FaPlus', library: 'fa6' }) }
              </Link>
              <Link onClick={ () => setIsMenuOpen(false) } className='text-sm pl-3 flex justify-between items-center' href='/admin/entrada/editar-eliminar'>
                Editar y Eliminar
                { Icon({ name: 'CiSettings', library: 'ci', className: 'text-lg'}) }
              </Link>
            </div>
          )
        }

        <button onClick={ () => {
          setIsMenuOpen(false)
        }} className='w-full text-sm pl-3 mt-2 flex justify-between items-center'>
          <span className=' font-semibold bg-gradient-to-l to-indigo-600 from-[#b23c3e] inline-block text-transparent bg-clip-text'>
            Cerrar Sesión
          </span>
          { Icon({ name: 'FaSignOutAlt', library: 'fa', className: 'text-[#b23c3e] text-sm' }) }
        </button>
      </AccordionItem>
    </Accordion>
  )
}
