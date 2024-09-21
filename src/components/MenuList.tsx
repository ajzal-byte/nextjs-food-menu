import React from "react";
import FoodCard from "./FoodCard";
import { menuItems } from "@/lib/menu";
import { Dialog } from "@/components/ui/dialog";
import FoodDialog from "./FoodDialog";

const MenuList = () => {
  return (
    <div className="container mx-auto px-4 py-6 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {menuItems.map((food) => (
          <div className="w-full max-w-full sm:max-w-xs mx-auto" key={food.id}>
            <FoodCard {...food} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
