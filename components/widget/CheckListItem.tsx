import { ICheckListItem } from "@/interfaces"
import { Icon } from "@/utils"

export const CheckListItem = ({ description }: ICheckListItem) => {
  return (
    <li className="flex items-center justify-center gap-2">
        <div className='bg-emerald-300 p-1 rounded-full'>
            {
                Icon({
                    name: 'FaCheck',
                    library: 'fa',
                    className: 'text-white text-xs'
                })
            }
        </div>

        { description }
  </li>  
  )
}
