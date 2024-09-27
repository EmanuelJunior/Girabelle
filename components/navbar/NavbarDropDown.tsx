"use client"

import { Dispatch, ReactNode, SetStateAction, useContext } from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { Icon } from "@/utils"

interface Props {
  children: ReactNode,
  setIsOpen: Dispatch<SetStateAction<{
    modulos: boolean,
    subprocesos: boolean
  }>>,
  isOpen: {
    modulos: boolean,
    subprocesos: boolean
  },
  type: 'modulos' | 'subprocesos'
}

export const NavbarDropDown = ({ children, setIsOpen, isOpen, type }: Props) => {

  const { openModal } = useContext( UiContext );

  const navigateToModule = (slug: string) => {

    setIsOpen(
      opt =>
        type === 'modulos' 
        ? { ...opt, modulos: false }
        : { ...opt, subprocesos: false }
    );

    // navigate(`/modulo/${slug}`);
  }

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
    <Dropdown
      isOpen={
        type === 'modulos' 
        ? isOpen.modulos
        : isOpen.subprocesos
      }
      onClick={ () => setIsOpen(
        opt =>
          type === 'modulos' 
          ? { ...opt, modulos: !opt.modulos }
          : { ...opt, subprocesos: !opt.subprocesos }
      ) }
      onMouseLeave={ () => setIsOpen(
        opt =>
          type === 'modulos' 
          ? { ...opt, modulos: false }
          : { ...opt, subprocesos: false }
      ) }
    >
      <DropdownTrigger>
        { children }
      </DropdownTrigger>

        {
          type === 'modulos' ? (
            <DropdownMenu aria-label="Static Actions" variant="flat">
              {
                  modules && modules.map( (option, i) => (
                    <DropdownItem
                      key={ option.slug }
                      startContent={ 
                        Icon({ 
                          name: option.icon || 'FaUser', 
                          library: 'fa', 
                          className: `text-lg m-2 text-${ i % 2 === 0 ? 'red' : 'indigo'}-500` 
                        })
                      }
                      description={ option.description }
                      onClick={() => navigateToModule(option.slug)}
                      isDisabled={ !option.isActive }
                    >
                      { option.title }
                    </DropdownItem>
                  ))
              }
            </DropdownMenu>
          ) : (
            <>
              <DropdownMenu aria-label="Static Actions" variant="flat">
                {
                  subprocesses.map( (subprocess) => (
                    <DropdownItem
                      startContent={
                        <img src={ subprocess.icon || '' } alt={ subprocess.name } className="w-8 h-8"/>
                      }
                      description={ subprocess.description }
                      onClick={() => {
                        openModal({ type: 'subprocess', subprocess })
                        setIsOpen(
                          opt => ({ ...opt, subprocesos: false })
                        )
                      }}
                    >
                      { subprocess.name }
                    </DropdownItem>
                  ))
                }
              </DropdownMenu>
            </>
          )
        }
    </Dropdown>
  )
}
