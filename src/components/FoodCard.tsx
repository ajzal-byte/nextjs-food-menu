import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import Image from "next/image";

const FoodCard: React.FC<FoodCardProps> = ({ image, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl">
    <div className="overflow-hidden">
      {/* TODO: to later change to next image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <DialogTrigger>
        <Button>Select</Button>
      </DialogTrigger>
    </div>
  </div>
);

export default FoodCard;
