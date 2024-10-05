import { Icon } from "@/utils"
import { Button } from "@nextui-org/button"
import { useState } from "react"

export const Counter = () => {

    const [ counter, setCounter ] = useState<number>(0);

  return (
    <div className="rounded-full border gap-3 p-1 flex flex-row justify-between items-center">
        <Button
            size="sm"
            variant="flat"
            color="default"
            className="rounded-full"
            isIconOnly
            onClick={ () => setCounter( counter + 1 ) }
        >
            { 
                Icon ({
                    name: "FaPlus", 
                    library: "fa",
                    className: "text-sm "
                })
            }
        </Button>

        <p>
            { counter }
        </p>

        <Button
            size="sm"
            variant="flat"
            color="default"
            className="rounded-full "
            isIconOnly
            onClick={ () => setCounter( counter > 0 ? counter - 1 : counter ) }
        >
            { 
                Icon ({
                    name: "FaMinus", 
                    library: "fa",
                    className: "text-sm "
                })
            }
        </Button>
    </div>
  )
}

