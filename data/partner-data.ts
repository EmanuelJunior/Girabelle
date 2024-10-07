import { TopPartner } from "@/interfaces";

interface Category {
  id: string;
  name: string;
  count: number;
}

export const categories: Category[] = [
  { id: "spa", name: "Servicios de spa", count: 23 },
  { id: "estilistas", name: "Servicios estilistas", count: 31 },
  { id: "make-up", name: "Servicios make-up", count: 27 },
  { id: "uñas", name: "Servicio de uñas", count: 12 },
  { id: "cosmeticos", name: "Servicio cosmeticos", count: 97 },
]

export const popularTags: string[] = ["Profesional", "Relajante", "Novia", "Tinte", "Spa", "Gel", "Hidratante", "Tendencias", "Aromaterapia"]

export const topPartners: TopPartner[] = [
  { name: "Sophia Lee", service: "Masaje relajante", rating: 4.9, image: "https://img.freepik.com/psd-gratis/hombre-expresivo-gesticulando_23-2150198670.jpg" },
  { name: "Emma Johnson", service: "Maquillaje", rating: 4.8, image: "https://img.freepik.com/psd-gratis/hombre-expresivo-gesticulando_23-2150198670.jpg" },
  { name: "Olivia Martinez", service: "Manicura", rating: 4.7, image: "https://img.freepik.com/psd-gratis/hombre-expresivo-gesticulando_23-2150198670.jpg" },
]