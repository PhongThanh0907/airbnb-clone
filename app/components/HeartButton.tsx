"use client";

import React from "react";
import { SafeUser } from "../types";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as MHeart } from "@heroicons/react/24/solid";
import useFavorite from "../hooks/useFavorite";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="relative hover:opacity-80 transition cursor-pointer "
    >
      <HeartIcon
        className=" absolute -top-[2px] -right-[2px] text-white"
        height={24}
        width={24}
      />
      <MHeart
        className={`${hasFavorited ? "fill-red-500" : "fill-neutral-500/70"}`}
        height={20}
        width={20}
      />
    </div>
  );
};

export default HeartButton;
