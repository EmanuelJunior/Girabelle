"use client"

import { NavbarItem, NavbarMenuItem } from "@nextui-org/react"

import { Icon } from "@/utils"
// import { CustomButton } from "../../buttons";

interface Props {
  isMobile?: boolean;
}

export const NavbarButtons = ({ isMobile = false }: Props) => {
  
  const renderButton = (
    <>
      {/* <CustomButton
        href="/login"
        color='gradient'
        size='sm'
        gradientColors={{
          from: 'from-red-500',
          to: 'to-indigo-500'
        }}        
        icon={ Icon({ name: 'FiLogIn', library: 'fi'}) }
      >
        Iniciar
      </CustomButton>

      <CustomButton
        href={'/register'}
        color="solid"
        size='sm'
        icon={ Icon({ name: 'FiUserPlus', library: 'fi'}) }
      >
        Registro
      </CustomButton> */}

      <button>Iniciar</button>
      <button>Registro</button>
    </>
  )

  return (
    <>
      {
        isMobile ? (
          <NavbarMenuItem className="flex flex-col sm:flex-row md:hidden gap-3 mt-4">
            { renderButton }
          </NavbarMenuItem>
        ) : (
          <NavbarItem className="hidden lg:flex gap-3">
            { renderButton }
          </NavbarItem>
        )
      }
    </>
  )
}
