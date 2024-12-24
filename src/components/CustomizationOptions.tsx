"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const CustomizationOptions = ({
  customization,
}: {
  customization: {
    label: string;
    options: string[];
  }[];
}) => {
  return (
    <div className="mt-4 space-y-4">
      {customization.map((option, index) => (
        <div key={index}>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            {option.label}
          </label>
          <Select>
            <SelectTrigger className="w-full bg-[#b0d1c1]">
              <SelectValue
                placeholder={`Select ${option.label}`}
                className="bg-black"
              />
            </SelectTrigger>
            <SelectContent className="bg-[#b0d1c1]">
              {option.options.map((item, itemIndex) => (
                <SelectItem key={itemIndex} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  );
};

export default CustomizationOptions;
