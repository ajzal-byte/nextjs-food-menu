// Define types for props
interface FoodItem {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  category: string;
}

interface FoodDialogProps {
  foodItem: FoodItem;
}

interface FoodCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

interface IngredientSelectorProps {
  ingredients: string[];
  onChange: (ingredient: string, isChecked: boolean) => void;
}

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}
