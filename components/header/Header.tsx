
import { Icon } from "@/utils"
import { Button } from "@nextui-org/button"

export const Header = () => {
    return (
        <header 
          className="flex flex-col lg:flex-row justify-center gap-6 relative min-h-1/2 m-0 md:m-10 mb-5 md:mb-10 rounded-md shadow-xl p-4"
          style={{
            background: 'url("background-header.svg")',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <section className="w-full lg:w-1/3 flex flex-col justify-center items-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl italic font-serif bg-clip-text bg-gradient-to-r text-transparent from-emerald-200 to-emerald-500 font-semibold">Girabelle </h3>       
            <h1 className="mt-5 text-xl md:text-2xl lg:text-3xl text-center font-extrabold">Donde la belleza y el talento se encuentran.</h1>
            <Button
              variant="shadow"
              color='success'
              size='lg'
              className='mt-7 font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 text-white '
              endContent={
                Icon({ name: 'MdScheduleSend', library: 'md', className: 'text-2xl' })
              }
            >
              Agendar
            </Button>
          </section>
          <section className='flex justify-center'>
            <img 
              src="/banner-header.svg"
              alt="banner" 
              className='h-96'
            />
          </section>
        </header>
    )
}