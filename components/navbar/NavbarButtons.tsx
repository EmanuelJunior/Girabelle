"use client"

import { Button, NavbarItem, NavbarMenuItem } from "@nextui-org/react"

import { Icon } from "@/utils"
// import { CustomButton } from "../../buttons";

interface Props {
  isMobile?: boolean;
}

export const NavbarButtons = ({ isMobile = false }: Props) => {
  
  const renderButton = (
    <>
      <Button
        href="/login"
        size='sm'
        startContent={ Icon({ name: 'FiLogIn', library: 'fi'}) }
        className="rounded-full bg-gradient-to-r from-gray-900 to-gray-600 text-white"
      >
        Iniciar
      </Button>

      <Button
        href={'/register'}
        size='sm'
        startContent={ Icon({ name: 'FiUserPlus', library: 'fi'}) }
        className="rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 text-white"
      >
        Registro
      </Button>
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
