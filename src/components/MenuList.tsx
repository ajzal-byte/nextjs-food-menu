import React from "react";
import FoodCard from "./FoodCard";
import { menuItems } from "@/lib/menu";
import {
  Dialog,
} from "@/components/ui/dialog";
import FoodDialog from "./FoodDialog";

const MenuList = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((food) => (
          <Dialog key={food.id}>
              <FoodCard {...food} />
            <FoodDialog foodItem={food} />
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default MenuList;

