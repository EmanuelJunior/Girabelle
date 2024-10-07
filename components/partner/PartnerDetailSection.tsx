"use client"

import React from "react";

import { Icon } from "@/utils";
import { Button, Chip } from "@nextui-org/react";
import { Counter } from "../widget";

export const PartnerDetailSection = () => {
  return (
    <div className="p-5 w-full md:w-1/2">
      <div className="flex flex-row items-center gap-1">
        <h1 className="text-3xl font-extrabold">Make Up</h1>
        <Chip
          className="text-white bg-emerald-400 "
          color="success"
          variant="shadow"
        >
          In stock
        </Chip>
      </div>

      <div className="mt-2 gap-2 flex items-center flex-row">
        <div className="flex flex-row justify-center items-center">
          {[...Array(5)].map((i) => (
            <>
              {Icon({
                name: "FaStar",
                library: "fa",
                className: "text-base text-yellow-300",
              })}
            </>
          ))}
        </div>

        <h1 className="text-xs font-extralight">5 estrellas</h1>
      </div>

      <div className="flex flex-row  gap-3 border-b py-3">
        <h1 className="line-through text-gray-500">$799.999</h1>
        <h1 className="text-emerald-950">$999.999</h1>
        <Chip
          size="sm"
          className=" text-xs gap-6 text-white bg-emerald-400 "
          color="success"
          variant="shadow"
        >
          50% Off
        </Chip>
      </div>
      <div className="flex mt-3 gap-4 flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <h1>Categoria</h1>
          {Icon({
            name: "PiHairDryerFill",
            library: "pi",
            className: " text-3xl gap-4 text-emerald-500",
          })}
        </div>

        <div className="flex items-center gap-2">
          <h1>Redes</h1>

          <div className="flex justify-center items-center gap-2">
            <Button className="bg-gradient-to-br from-blue-600 to-blue-400 text-white" color="default" variant="shadow" isIconOnly size="sm" radius="full">
              {Icon({
                name: "FaFacebookF",
                library: "fa",
                className: "text-base",
              })}
            </Button>
            <Button className="bg-gradient-to-br from-purple-600 via-orange-600 to-yellow-500 text-white" color="default" variant="shadow" isIconOnly size="sm" radius="full">
              {Icon({
                name: "FaInstagram",
                library: "fa",
                className: "text-base",
              })}
            </Button>
            <Button className="bg-gradient-to-br from-pink-500 to-cyan-500 text-white" color="default" variant="shadow" isIconOnly size="sm" radius="full">
              {Icon({
                name: "FaTiktok",
                library: "fa",
                className: "text-base",
              })}
            </Button>
            <Button className="bg-gradient-to-br from-green-600 to-green-400 text-white" color="default" variant="shadow" isIconOnly size="sm" radius="full">
              {Icon({
                name: "FaWhatsapp",
                library: "fa",
                className: "text-base",
              })}
            </Button>
          </div>
        </div>
      </div>

      <div>
        <p className="mt-5">
          Ofrecemos un servicio de maquillaje profesional adaptado a tus
          necesidades. Trabajamos con productos de alta calidad para garantizar
          un acabado duradero y cuidado de la piel. Nuestro equipo de
          maquilladores se especializa en maquillaje para eventos sociales,
          bodas y sesiones fotográficas, brindando un servicio personalizado que
          resalta tus mejores rasgos de manera natural.
        </p>
        <div className="mt-5 flex gap-2 flex-row justify-between items-center">
          <Counter />

          <Button
            className="text-white rounded-full w-full bg-gradient-to-br from-emerald-500 to-emerald-600"
            variant="shadow"
          >
            {Icon({
              name: "CiShoppingCart",
              library: "ci",
              className: "text-xl",
            })}
            Añadir al carrito
          </Button>

          <Button
            isIconOnly
            className="rounded-full border-emerald-50 bg-emerald-50"
            color="success"
            variant="bordered"
          >
            {Icon({ name: "CiHeart", library: "ci", className: "text-lg" })}
          </Button>
        </div>
        <div>
          <div className="flex flex-row mt-6">
            <h1 className="font-bold mx-2">category:</h1>
            <h1 className="text-gray-500">Make up</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
