import { Icon } from "@/utils";
import { Input } from "@nextui-org/input";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => (
  <div>
    <h3 className="font-semibold mb-2">Buscar</h3>
    <Input
      type="text"
      placeholder="Buscar servicios..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      startContent={
        Icon({
          name: "FaSearch",
          library: 'fa',
          className: "text-default-400 w-4 h-4"
        })
      }
    />
  </div>
)