import { Slider } from "@nextui-org/react";

interface RatingRangeFilterProps {
  ratingRange: number[];
  setRatingRange: (range: number[]) => void;
}

export const RatingRangeFilter: React.FC<RatingRangeFilterProps> = ({ ratingRange, setRatingRange }) => (
  <div>
    <h3 className="font-extrabold mb-1">Rango de calificación</h3>
    <Slider
      label="Calificación"
      step={0.1}
      minValue={0}
      maxValue={5}
      color='success'
      size='sm'
      value={ratingRange}
      onChange={(value) => setRatingRange(value as number[])}
      className="max-w-md"
    />
    <div className="flex justify-between mt-2 text-sm">
      <span>{ratingRange[0].toFixed(1)}</span>
      <span>{ratingRange[1].toFixed(1)}</span>
    </div>
  </div>
)