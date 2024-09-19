import { DialogTrigger } from "@radix-ui/react-dialog";
import dynamic from "next/dynamic";
import Image from "next/image";

const Button = dynamic(() => import("./ui/button").then((mod) => mod.Button), { ssr: false });

const FoodCard: React.FC<FoodCardProps> = ({ image, title, description }) => (
  <div className="bg-[#d6e5d8] rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl">
    <div className="overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        unoptimized
        className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <DialogTrigger>
        {/* <Button className="bg-[#3c443f] hover:bg-[#1e2220]">Select</Button> */}
      </DialogTrigger>
    </div>
  </div>
);

export default FoodCard;
