import { aditionalInformationPartner } from "@/data"
import { InfoCard } from "../cards"

export const AditionalInformationSection = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-between items-center gap-6">
      <div className="flex justify-between items-center gap-10">

        <ul className="flex flex-col ">
          {
            aditionalInformationPartner.map(({ title }) => {
              return (
                <li className="flex-row flex justify-between items-center gap-5">
                  <h1 className="font-bold">{title}</h1>
                </li>
              )
            })
          }
        </ul>

        <ul className="flex flex-col justify-center items-start">
          {
            aditionalInformationPartner.map(({ description }) => {
              return (
                <li className="text-gray-500 flex-row flex justify-between items-center gap-5">
                  <h1>{description}</h1>
                </li>
              )
            })
          }
        </ul>

      </div>

      <div className="w-full md:w-1/2">
            <img
                src="https://www.letsmakeup.es/wp-content/uploads/2020/02/LETSMAKEUP-Video-principal-maquillando.jpg"
                alt="banner"
                className='w-full h-full rounded-md'
            />

            <div className="flex gap-2 justify-between flex-row mt-4 border-medium p-5 rounded-md">
                <InfoCard/>
                <InfoCard/>
            </div>
        </div>
    </section>
  )
}