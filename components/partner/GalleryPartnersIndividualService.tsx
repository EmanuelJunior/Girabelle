
export const GalleryPartnersIndividualService = () => {
  return (
    <div className="p-2 gap-2 grid grid-cols-10 grid-rows-4 w-1/2 ">
        <img
            className="rounded-md col-span-2 row-span-1 w-full h-full"
            src="https://www.letsmakeup.es/wp-content/uploads/2020/02/LETSMAKEUP-Video-principal-maquillando.jpg"
            alt="makeup"
        />

        <img
            className="rounded-md col-span-8 row-span-4 w-full h-full"
            src="https://www.letsmakeup.es/wp-content/uploads/2020/02/LETSMAKEUP-Video-principal-maquillando.jpg"
            alt=""
        />
        
        {
            [...Array(3)].map( i => (
                <img
                key={i}
                className="rounded-md col-span-2 row-span-1 w-full h-full"
                src="https://www.letsmakeup.es/wp-content/uploads/2020/02/LETSMAKEUP-Video-principal-maquillando.jpg"
                alt="makeup"
                />
            ))
        }
    </div>
  )
}