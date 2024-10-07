import { Button } from "@nextui-org/button";

interface TagFilterProps {
  popularTags: string[];
  selectedTags: string[];
  handleTagChange: (tag: string) => void;
}

export const TagFilter: React.FC<TagFilterProps> = ({ popularTags, selectedTags, handleTagChange }) => (
  <div>
    <h3 className="font-extrabold mb-2">Etiquetas populares</h3>
    <div className="flex flex-wrap gap-2">
      {popularTags.map((tag) => (
        <Button
          key={tag}
          size="sm"
          variant={selectedTags.includes(tag) ? "solid" : "bordered"}
          color={selectedTags.includes(tag) ? "success" : "default"}
          className={`${selectedTags.includes(tag) ? 'bg-emerald-100 text-emerald-800' : 'text-emerald-600'}`}
          onClick={() => handleTagChange(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  </div>
)