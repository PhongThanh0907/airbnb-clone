"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import qs from "query-string";
import Image from "next/image";

interface CategoryBoxProps {
  icon: any;
  label: string;
  selected?: boolean;
  desc?: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon,
  label,
  selected,
  desc,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  console.log(params?.toString());
  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    console.log(currentQuery);

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    router.push(url);
  }, [label, params, router]);
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col group items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800  transition cursor-pointer ${
        selected
          ? "border-b-neutral-800 text-neutral-800"
          : "border-transparent text-neutral-500 hover:border-b-neutral-300"
      }`}
    >
      <Image
        src={icon}
        alt="logo"
        height={25}
        width={25}
        className={`duration-200 ${
          selected ? "opacity-100" : "opacity-60 group-hover:opacity-100"
        }`}
      />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
