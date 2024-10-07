import React from "react";

import { BenefitsCard } from "@/components/cards";
import { CategorySection } from "@/components/categories";
import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Products } from "@/components/products";

export default function Home() {
  return (
    <>
      <Header/>
      <BenefitsCard/>
      <CategorySection/>
      <Products/>
      <Contact/>
    </>
  )
}