"use client";
import Image from "next/image";
import React from "react";

interface CategoryInputProps {
  icon: any;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`rounded-xl border-2 p-4 flex flex-col hover:border-black transition cursor-pointer duration-200 ${
        selected ? "border-black" : "border-neutral-200"
      }`}
    >
      <Image src={icon} alt="icon" height={25} width={25} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
