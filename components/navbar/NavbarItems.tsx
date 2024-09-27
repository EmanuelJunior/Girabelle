"use client"

import { useCallback, useContext, useEffect, useState } from "react";
import clsx from "clsx";

import { NavbarItem, NavbarMenuItem, Button } from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";

import { NavbarAccordion, NavbarButtons, NavbarDropDown, NavbarUserAccordion } from "./";

import { Icon } from "@/utils"
import Link from 'next/link'
import { siteConfig } from '@/config/site'

interface Props {
  type: 'navItems' | 'navMenuItems',
  setIsMenuOpen: (isOpen: boolean) => void
}

export const NavbarItems = ({ type, setIsMenuOpen }: Props) => {

  const user = false;

  const [ isOpen, setIsOpen ] = useState({
    modulos: false,
    subprocesos: false
  });

  const renderNavItem = useCallback((label: string, href: string) => {

    if ( type === 'navItems' ) {

      if ( label.toLowerCase() === 'Docs' || label.toLowerCase() === 'subprocesos' ) {
        return (
          <NavbarDropDown key={href} setIsOpen={ setIsOpen } isOpen={ isOpen } type={ label.toLowerCase() === 'modulos' ? 'modulos' : 'subprocesos' }>
            <Button
              disableRipple
              className="p-0 bg-transparent text-medium data-hover:bg-transparent relative flex justify-start"
              radius="sm"
              onClick={ () => setIsOpen(
                opt =>
                  label.toLowerCase() === 'modulos' 
                  ? { ...opt, modulos: !opt.modulos }
                  : { ...opt, subprocesos: !opt.subprocesos }
              ) }
              startContent={
                Icon({ 
                  name: label.toLowerCase() === 'subprocesos' && isOpen.subprocesos 
                    ? 'FaChevronUp' 
                    : label.toLowerCase() === 'modulos' && isOpen.modulos 
                      ? 'FaChevronUp' 
                      : 'FaChevronDown', 
                  library: 'fa6'
                })
              }
            >
              { label.toLowerCase() === 'modulos' ? 'Módulos' : 'Subprocesos' }
            </Button>
          </NavbarDropDown>
        )
      }

      return (
        <NavbarItem key={href}>
          { renderNavbarItem( label, href ) }
        </NavbarItem>
      )
    }
    else if ( type === 'navMenuItems' ) {

      if ( label.toLowerCase() === 'Docs' || label.toLowerCase() === 'subprocesos')
        return <NavbarAccordion key={href} title={label} setIsMenuOpen={setIsMenuOpen} setIsOpen={setIsOpen} type={ label.toLowerCase() === 'modulos' ? 'modulos' : 'subprocesos' }/>

      return (
        <NavbarMenuItem key={label} onClick={ () => setIsMenuOpen(false) }>
          { renderNavbarItem( label, href ) }
        </NavbarMenuItem>
      )
    }

    return null;
  }, [type, isOpen, setIsMenuOpen])

  useEffect(() => {
    if (isOpen.modulos || isOpen.subprocesos) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    return () => { document.body.style.overflow = 'auto' }
  }, [isOpen])

  return (
    <>
      {
        siteConfig[type].map(({ label, href }, i) => {
          
          if ( type === 'navMenuItems' && i === 0 && user) {
            return (
              <>
                <NavbarUserAccordion setIsMenuOpen={setIsMenuOpen}/>
                { renderNavItem( label, href ) }
              </>
            )
          }
          
          return renderNavItem( label, href )
        })
      }

      { 
        type === 'navMenuItems' && !user && 
          ( <NavbarButtons isMobile/> )
      }
    </>
  )
}

const renderNavbarItem = ( label: string, href: string ) => (
  <Link
    className={clsx(
      linkStyles({ color: "foreground" }),
      "data-[active=true]:text-primary data-[active=true]:font-medium",
      "hover:text-indigo-600 flex gap-2 w-full"
    )}
    // color="foreground"
    href={href}
  >
    {label}
  </Link>
)

