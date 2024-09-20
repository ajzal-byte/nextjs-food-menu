import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

const IngredientSelector: React.FC<IngredientSelectorProps> = ({
  ingredients,
  onChange,
}) => {

  return (
    <div className="space-y-2">
      {ingredients.map((ingredient) => (
        <div key={ingredient} className="flex items-center space-x-2">
          <Checkbox
            id={ingredient}
            onCheckedChange={(checked) => onChange(ingredient, !!checked)}
          />
          <Label htmlFor={ingredient}>{ingredient}</Label>
        </div>
      ))}
    </div>
  );
};

export default IngredientSelector;
