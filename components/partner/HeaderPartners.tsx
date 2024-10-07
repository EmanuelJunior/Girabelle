import { Icon } from "@/utils";

export const HeaderPartners: React.FC = () => (
  <header 
    className="text-gray-100 flex justify-start items-center font-extralight font-serif italic py-5 px-6 flex items-center gap-1"
    style={{
      backgroundImage: "url('Natural-Cosmetics.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {
      Icon({
        name: "FaHome",
        library: 'fa',
        className: "text-2xl p-1 bg-emerald-500/45 rounded-md"
      })
    }

    {
      Icon({
        name: "FaChevronRight",
        library: 'fa',
        className: "text-xl p-1 bg-emerald-500/45 rounded-md"
      })
    }
    <span className='bg-emerald-500/45 px-1 rounded-md text-base'>Servicios</span>
      {
        Icon({
          name: "FaChevronRight",
          library: 'fa',
          className: "text-xl p-1 bg-emerald-500/45 rounded-md"
        })
      }
    <span className='bg-emerald-500/45 px-1 rounded-md text-base'>Belleza y bienestar</span>
  </header>
)