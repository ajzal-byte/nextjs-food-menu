import Image from "next/image";
import CustomizationOptions from "./CustomizationOptions";
import { ScrollArea } from "./ui/scroll-area";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

const FoodCard: React.FC<FoodCardProps> = ({
  image,
  title,
  description,
  category,
  customization,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex w-full sm:max-w-[270px] flex-col overflow-hidden bg-[#d6e5d8] rounded-lg shadow-lg cursor-pointer hover:shadow-xl">
          <div className="relative h-48 w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="flex flex-grow flex-row items-end justify-between p-2">
            <div>
              <h3 className="text-zinc-950 dark:text-zinc-50 text-xl font-semibold">
                {title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">{category}</p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 bg-[#d6e5d8] w-[calc(100%-2rem)] max-w-[500px] max-h-[80vh] rounded-lg">
        <ScrollArea className="max-h-[80vh]">
          <div className="relative w-full pt-[56.25%]">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
              {title}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {category}
            </p>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              {description}
            </p>
            <CustomizationOptions customization={customization} />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default FoodCard;

const FoodCardX: React.FC<FoodCardProps> = ({
  image,
  title,
  description,
  category,
  customization,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="flex w-full sm:max-w-[270px] flex-col overflow-hidden bg-[#d6e5d8] rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
          style={{ borderRadius: "12px" }}
        >
          <div className="relative h-48 w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="flex flex-grow flex-row items-end justify-between p-2">
            <div>
              <h3 className="text-zinc-950 dark:text-zinc-50 text-xl font-semibold">
                {title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">{category}</p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[500px] p-0 bg-[#d6e5d8] border-zinc-50/10 w-[calc(100%-2rem)] max-w-[500px] max-h-[80vh] flex flex-col"
        style={{ borderRadius: "24px" }}
      >
        <div className="relative w-full" style={{ paddingTop: "40%" }}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover absolute top-0 left-0 w-full h-full"
          />
        </div>
        <ScrollArea className="flex-grow overflow-y-auto">
          <div className="p-6">
            <h2 className="text-2xl text-zinc-950 dark:text-zinc-50 font-semibold">
              {title}
            </h2>
            <p className="text-zinc-700 dark:text-zinc-400">{category}</p>
            <p className="mt-2 text-zinc-500 dark:text-zinc-500">
              {description}
            </p>
            <CustomizationOptions customization={customization} />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
