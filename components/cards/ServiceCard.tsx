"use client"

import { Service } from "@/interfaces";
import { Icon } from "@/utils";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <Card className="w-full">
    <CardBody className="p-4 pb-3">
      <div className="relative">
        <img src={service.image} alt={service.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
      </div>
      <h3 className="font-bold text-sm">{service.name}</h3>
      <p className="text-xs text-default-500">{service.service}</p>
      <div className="flex flex-wrap gap-1 mt-2">
        {service.tags.map((tag, index) => (
          <span key={index} className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-[2px] rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-emerald-600 font-bold text-sm">${service.price}</span>
        <div className="flex items-center">
          <span className="text-yellow-500 text-xs font-bold mr-1">{service.rating.toFixed(1)}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                {
                  Icon({
                    name: "FaStar",
                    library: 'fa',
                    className: `text-xs ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-default-300'}`
                  })
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardBody>
    <CardFooter className='m-0 pt-0'>
      <Button
        variant='shadow'
        size='sm'
        className="w-full bg-gradient-to-br from-emerald-600 bg-emerald-400 text-white" startContent={
        Icon({
          name: "FaCalendarAlt",
          library: 'fa',
          className: "w-4 h-4"
        })
      }>
        Reservar cita
      </Button>
    </CardFooter>
  </Card>
)