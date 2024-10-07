import { Checkbox } from "@nextui-org/react";

interface Category {
  id: string;
  name: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategories: string[];
  handleCategoryChange: (categoryId: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategories, handleCategoryChange }) => (
  <div>
    <h3 className="font-extrabold mb-2">Categorías de servicios</h3>
    <div>
      {categories.map((category) => (
        <Checkbox
          key={category.id}
          size='sm'
          radius='sm'
          color='success'
          isSelected={selectedCategories.includes(category.id)}
          onValueChange={() => handleCategoryChange(category.id)}
        >
          {category.name} ({category.count})
        </Checkbox>
      ))}
    </div>
  </div>
)