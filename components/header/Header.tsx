
import { Button } from "@nextui-org/button"

export const Header = () => {
    return (
        <header 
          className="p-4 flex flex-col lg:flex-row justify-center gap-6 relative min-h-1/2 m-0 md:m-10 mb-5 md:mb-10 rounded-md shadow-xl bg-center bg-cover bg-no-repeat"
          style={{
            background: 'url("background-header.svg")',
            // backgroundSize: '100%'
          }}
        >
          <section className="w-full lg:w-1/3 flex flex-col justify-center items-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl italic font-serif bg-clip-text bg-gradient-to-r text-transparent from-emerald-200 to-emerald-500 font-semibold">Girabelle </h3>       
            <h1 className="mt-5 text-xl md:text-2xl lg:text-3xl text-center font-extrabold">Donde la belleza y el talento se encuentran.</h1>
            {/* <p className="my-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis consequatur soluta dicta cum id deleniti labore, incidunt quos veniam nam voluptas, iure sunt unde eos aspernatur dignissimos ab? Adipisci.</p> */}
            <Button
              variant="shadow"
              color='success'
              size='lg'
              className='mt-7 font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 text-white '
              // startContent={
              //   Icon
              // }
            >
              Agendar
            </Button>
          </section>
          <section className='flex justify-center'>
            <img src="" alt="banner" className='h-96'/>
          </section>
        </header>
    )
}