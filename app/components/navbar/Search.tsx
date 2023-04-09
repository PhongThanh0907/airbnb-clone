"use client";

import React, { useMemo } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";

const Search = () => {
  const params = useSearchParams();
  const guestCount = params?.get("guestCount");

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} khách`;
    }

    return "Thêm khách";
  }, [guestCount]);

  return (
    <div className="border w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold pr-4 pl-6">Địa điểm bất kỳ</div>
        <div className="hidden sm:block text-sm font-semibold px-4 border-x-[1px] flex-1 text-center">
          Tuần bất kỳ
        </div>
        <div className="text-sm pl-4 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">{guestLabel}</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <MagnifyingGlassIcon className="h-4 w-4 font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
