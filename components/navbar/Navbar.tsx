"use client"

import React, { useState } from "react";
import Link from "next/link";

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
} from "@nextui-org/navbar";

import { NavbarButtons, NavbarItems } from ".";

import { useDisclosure } from '@nextui-org/react';

export const Navbar = () => {

	const [ isMenuOpen, setIsMenuOpen ] = useState( false );

  return (
		<>

			<NextUINavbar 
				maxWidth="xl" 
				position="sticky" 
				className="shadow-sm"
				isMenuOpen={isMenuOpen}
				onMenuOpenChange={ () => setIsMenuOpen( !isMenuOpen )}
				isMenuDefaultOpen={true}
			>
				<NavbarContent className="basis-1/5 sm:basis-full gap-12 " justify="start">
					<ul className="hidden md:flex gap-4 justify-center items-center ml-2">
						<NavbarItems 
							type="navItems"
							setIsMenuOpen={ setIsMenuOpen }
						/>
					</ul>
				</NavbarContent>

				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<Link href='/'>
						<div className='flex justify-center items-center '>
							<img src="/logo.png" alt="devpath" className='w-8 h-8 sm:w-9 sm:h-9'/>
							<h1 className='hidden sm:block sm:text-xl bg-gradient-to-r from-emerald-600 to-emerald-500 inline-block text-transparent bg-clip-text font-serif font-extrabold'>irabelle</h1>
						</div>
					</Link>
				</NavbarBrand>

				<NavbarContent
					className="hidden md:flex basis-1/5 sm:basis-full"
					justify="end"
				>
					<NavbarButtons/>
				</NavbarContent>

				<NavbarContent className="md:hidden basis-1 pl-4" justify="end">
					<NavbarMenuToggle className="text-emerald-500"/>
				</NavbarContent>
				
				<NavbarMenu className={ ' py-5' }>
					<div className="mx-4 mt-2 flex flex-col gap-2">
						<NavbarItems 
							type="navMenuItems"
							setIsMenuOpen={ setIsMenuOpen }
						/>
					</div>
				</NavbarMenu>
			</NextUINavbar>
		</>
  )
}
