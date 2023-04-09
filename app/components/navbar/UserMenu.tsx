"use client";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Bars3Icon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";
import { SafeUser } from "@/app/types";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative flex justify-end">
      <div className="flex flex-row items-center gap-1">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Cho thuê chỗ ở qua Airbnb
        </div>
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
          <GlobeAltIcon className="h-5 w-5" />
        </div>
        <div
          onClick={toggleOpen}
          className="flex gap-3 border rounded-full pl-3 pr-1 py-1.5 border-neutral-200 cursor-pointer hover:shadow-md transition items-center"
        >
          <Bars3Icon className="h-5 w-5" />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-2/4 bg-white overflow-hidden right-0 top-14 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem label="Chuyến đi" onClick={registerModal.onOpen} />
                <MenuItem
                  label="Danh sách yêu thích"
                  onClick={loginModal.onOpen}
                />
                <MenuItem
                  label="Cho thuê chỗ ở qua Airbnb"
                  onClick={rentModal.onOpen}
                />
                <hr />
                <MenuItem label="Tài khoản" onClick={loginModal.onOpen} />
                <MenuItem label="Đăng xuất" onClick={() => signOut()} />
              </>
            ) : (
              <>
                {" "}
                <MenuItem label="Đăng ký" onClick={registerModal.onOpen} />
                <MenuItem label="Đăng nhập" onClick={loginModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
