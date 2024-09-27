import { Icon } from '@/utils';

interface CategoryCardProps {
  img: string;
  title: string;
  description: string;
}

export const CategoryCard = ({ img, title, description }: CategoryCardProps ) => {
    return (
      <section className='group text-gray-500 hover:text-white border flex items-center flex-col rounded-md shadow-2xl justify-center p-5 hover:border-2 hover:shadow-emerald-800 hover:bg-gradient-to-r hover:from-emerald-300 hover:to-emerald-400 hover:border-none hover:z-10 hover:rotate-2 hover:scale-105 transform-gpu transition duration-300 cursor-pointer w-1/6'>
        <div className="group-hover:scale-105 h-32 w-32 group-hover:from-gray-100 group-hover:to-gray-50 bg-gradient-to-r group-hover:transition group-hover:transition-300 group-hover:p-1 from-emerald-200 to-emerald-300 p-2 rounded-full relative">
          { Icon({ 
            name: 'FiSend', 
            library: 'fi', 
            className: 'text-5xl text-white absolute top-0 bottom-0 right-0 left-0 m-auto hidden group-hover:block' }) 
          }
          <img className="rounded-full w-full h-full opacity-90 group-hover:opacity-100" src={ img } alt={ title }/>
        </div>

        <h1 className="mt-5 text-center text-base font-semibold">{ title }</h1>
        <p className='text-xs text-gray-400 group-hover:text-white'>{ description }</p>
      </section>
    )
}