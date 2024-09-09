"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import IngredientSelector from "./IngredientSelector";
import QuantitySelector from "./QuantitySelector";

const FoodDialog: React.FC<FoodDialogProps> = ({ foodItem }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [remarks, setRemarks] = useState<string>("");

  const handleIngredientChange = (ingredient: string, isChecked: boolean) => {
    setSelectedIngredients((prev) =>
      isChecked ? [...prev, ingredient] : prev.filter((i) => i !== ingredient)
    );
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{foodItem.title}</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <IngredientSelector
          ingredients={foodItem.ingredients}
          onChange={handleIngredientChange}
        />
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="remarks" className="text-right">
            Remarks
          </Label>
          <Input
            id="remarks"
            className="col-span-3"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <QuantitySelector
          quantity={quantity}
          onIncrease={() => setQuantity((q) => q + 1)}
          onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
        />
        <Button
          onClick={() => {
            console.log("Added to cart:", {
              ...foodItem,
              quantity,
              selectedIngredients,
              remarks,
            });
          }}
        >
          Add to Cart
        </Button>
      </div>
    </DialogContent>
  );
};

export default FoodDialog;
