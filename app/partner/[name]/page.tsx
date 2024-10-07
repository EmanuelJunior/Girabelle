"use client";

import React from "react";

import { Chip, Button } from "@nextui-org/react";
import { Icon } from "@/utils";
import { Tabs, Tab } from "@nextui-org/react";
import { Counter } from "@/components/widget";
import { AditionalInformationSection, CommentsSection, GalleryPartnersIndividualService, PartnerDescriptionSection } from "@/components/partner";
import { RelatedProducts } from "@/components/products";
import { PartnerDetailSection } from "@/components/partner/PartnerDetailSection";

const PartnerPage = ({ params }: { params: { name: string } }) => {
  return (
    <section className="flex flex-col justify-center items-center p-5 px-6 sm:px-12 md:px-24 lg:px-32">

      <article className="flex flex-col md:flex-row justify-center ">
        <GalleryPartnersIndividualService/>
        <PartnerDetailSection/>
      </article>

      <article className="flex flex-col justify-center items-center space-x-4 mt-4">
        <Tabs variant="underlined" color='success'>
          <Tab key="Servicios " title="Descripcion">
            <PartnerDescriptionSection/>
          </Tab>

          <Tab key="Servicios" title="Informacion adicional">
            <AditionalInformationSection/>
          </Tab>

          <Tab key="servicios" title="Comentarios">
            <CommentsSection/>
          </Tab>
        </Tabs>

      </article>

      <RelatedProducts/>
    </section>
  );
};

export default PartnerPage;
