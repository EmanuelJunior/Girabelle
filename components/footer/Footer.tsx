"use client"
import { Button } from "@nextui-org/button"
import { FaFonticons } from "react-icons/fa"
import { ButtonGroup} from "@nextui-org/button";
import { Icon } from '@/utils'
import Link from "next/link";

export const Footer = () => {
    return (
        <footer>
            <header className='bg-gray-200 p-10 flex flex-col gap-7 lg:flex-row justify-evenly items-center '>
                <div className="flex flex-row items-center">
                    <img  src="/logo.png" alt="devpath" className='w-8 h-8 sm:w-12 sm:h-12'/>
                    <h1 className='block text-2xl  lg:text-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 inline-block text-transparent bg-clip-text font-serif font-extrabold'>irabelle</h1>
                </div>

                <div>
                    <h1 className="italic font-serif font-bold text-xl">Subcribe our newsletter</h1>
                    <h3 className="text-gray-500 text-xs">pellentesque eu nibh eget mauris conge mattis mati</h3>	
                </div>

                <div className="bg-white rounded-full shadow-md">
                    <input placeholder="Correo electronico" className=" text-sm rounded-full py-2 px-4" type="your email" />
                    
                    <Button
                        variant="shadow"
                        className="rounded-full text-white bg-gradient-to-br from-emerald-500 to-emerald-600"
                    >
                        Suscribete
                    </Button>

                </div>

            </header >
            <section className="gap-14 p-8 md:p-12 lg:p-16 flex flex-col flex-wrap lg:flex-nowrap sm:flex-row lg:justify-evenly bg-gradient-to-r from-emerald-500 to-emerald-600 text-white ">
                <div>
                    <h1 className="mb-3 text-xl font-semibold">Acerca de Girabelle</h1>
                    <h3 className="text-emerald-950 justify-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dicta hic fugiat iure atque ullam placeat </h3>
                    
                    <div className="flex flex-row">
                        <h4 className="mt-3 mr-2 ">(304) 473 21 96 </h4>
                        <p className="mt-3 mr-2 text-emerald-950">or</p>
                        <p className="mt-3">evansoft2024@gmail.com</p>
                        </div>

                    
                </div>

                <div className="flex flex-col gap-3 w-1/5">
                    <h1 className="font-semibold font-sans text-xl">Mi Cuenta</h1>
                    
                    <ul className="flex flex-col gap-1 text-emerald-950">
                        <li>
                            <Link href='#'>
                                Mi cuenta
                            </Link>
                        </li>
                        <li>Historial de pedidos</li>
                        <li>Carrito de compras</li>
                        <li>Lista de deseos</li>
                        <li>Ajustes</li>
                    </ul>
                </div>

                <div className="w-1/5 flex flex-col gap-3">
                    <h1 className="text-white font-sans text-xl font-semibold">Proxy</h1>
                    
                    <ul className="text-emerald-950">
                        <li>Acerca de Girabelle</li>
                        <li>Tienda</li>
                        <li>Productos</li>
                        <li>Seguimiento de pedidos</li>
                    </ul>
                </div>
                <div className="w-1/5 flex flex-col gap-3">
                    <h1 className="text-white text-xl font-sans font-semibold">Ayuda</h1>
                    
                    <ul className="text-emerald-950">
                        <li>Contacto</li>
                        <li>Historial de pedidos</li>
                        <li>Terminos y condiciones</li>
                        <li>Politica de privacidad</li>
                    </ul>
                   
                </div >
                
                
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-white text-xl">Instagram</h1>

                    <div className="grid grid-cols-3 gap-2">
                        <img className="rounded-md w-24 h-16 shadow-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdt2wg2eRvJOomFJ8MNKis1Y5Z_0-AYAF-A&s" alt="" />
                        <img className="rounded-md w-24 h-16 shadow-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdt2wg2eRvJOomFJ8MNKis1Y5Z_0-AYAF-A&s" alt="" />
                        <img className="rounded-md w-24 h-16 shadow-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdt2wg2eRvJOomFJ8MNKis1Y5Z_0-AYAF-A&s" alt="" />
                        <img className="rounded-md w-24 h-16 shadow-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdt2wg2eRvJOomFJ8MNKis1Y5Z_0-AYAF-A&s" alt="" />
                        <img className="rounded-md w-24 h-16 shadow-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdt2wg2eRvJOomFJ8MNKis1Y5Z_0-AYAF-A&s" alt="" />
                        <img className="rounded-md w-24 h-16 shadow-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdt2wg2eRvJOomFJ8MNKis1Y5Z_0-AYAF-A&s" alt="" />
                    </div>
                </div>
                
                
            </section>

            <section className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 lg:px-10 py-5 justify-between items-center flex flex-col lg:flex-row border-t gap-5">

                <div className='flex justify-center items-center gap-3'>
                    <Button color='default' variant='shadow' isIconOnly>
                        { Icon({ name: 'FaFacebookF', library: 'fa', className: 'text-2xl' }) }
                    </Button>

                    <Button color='default' variant='shadow' isIconOnly>
                        { Icon({ name: 'FaInstagram', library: 'fa', className: 'text-2xl' }) }
                    </Button>

                    <Button color='default' variant='shadow' isIconOnly>
                        { Icon({ name: 'FaTiktok', library: 'fa', className: 'text-2xl' }) }
                    </Button>

                    <Button color='default' variant='shadow' isIconOnly>
                        { Icon({ name: 'FaWhatsapp', library: 'fa', className: 'text-2xl' }) }
                    </Button>

                </div>
            
                <div>
                    <h1 className="text-sm text-white">Girabelle © 2024. Todos los derechos reservados.</h1>
                </div>

                <div className="flex justify-center items-center gap-2">
                
                    <Button variant="shadow" color='default' isIconOnly className='bg-gradient-to-br from-red-500 to-orange-500 rounded-full'>
                        { Icon({ name: 'FaCcMastercard', library: 'fa', className: 'text-2xl text-white' }) }
                    </Button>

                    <Button variant="shadow" color='default' isIconOnly className=' bg-blue-600 rounded-full'>
                        { Icon({ name: 'FaCcVisa', library: 'fa', className: 'text-2xl text-white' }) }
                    </Button>

                    <Button variant="shadow" color='default' isIconOnly className='bg-blue-800 rounded-full'>
                        { Icon({ name: 'FaPaypal', library: 'fa', className: 'text-2xl text-white' }) }
                    </Button>

                    <Button variant="shadow" color='default' isIconOnly className='bg-blue-900 rounded-full'>
                        { Icon({ name: 'SiAmericanexpress', library: 'si', className: 'text-2xl text-white' }) }
                    </Button>
                </div>

            </section>
        </footer>

    )
}