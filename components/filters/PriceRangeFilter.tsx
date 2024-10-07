import { Slider } from "@nextui-org/react";

interface PriceRangeFilterProps {
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
}

export const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({ priceRange, setPriceRange }) => (
  <div>
    <h3 className="font-extrabold mb-1">Rango de precios</h3>
    <Slider
      label="Precio"
      step={5}
      minValue={0}
      maxValue={150}
      color='success'
      size='sm'
      value={priceRange}
      onChange={(value) => setPriceRange(value as number[])}
      className="max-w-md"
    />
    <div className="flex justify-between mt-2 text-sm">
      <span>${priceRange[0]}</span>
      <span>${priceRange[1]}</span>
    </div>
  </div>
)