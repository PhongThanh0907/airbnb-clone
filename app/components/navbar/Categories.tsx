"use client";

import React from "react";
import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import Logo1 from "../../../public/images/logo-1.jpg";
import Logo2 from "../../../public/images/logo-2.jpg";
import Logo3 from "../../../public/images/logo-3.jpg";
import Logo4 from "../../../public/images/logo-4.jpg";
import Logo5 from "../../../public/images/logo-5.jpg";
import Logo6 from "../../../public/images/logo-6.jpg";
import Logo7 from "../../../public/images/logo-7.jpg";
import Logo8 from "../../../public/images/logo-8.jpg";
import Logo9 from "../../../public/images/logo-9.jpg";
import Logo10 from "../../../public/images/logo-10.jpg";
import Logo11 from "../../../public/images/logo-11.jpg";
import Logo12 from "../../../public/images/logo-12.jpg";

type Props = {};

export const categories = [
  {
    label: "Thật ấn tượng",
    icon: Logo1,
    desc: "This property is close to the beach",
  },
  {
    label: "Hồ bơi tuyệt vời",
    icon: Logo2,
    desc: "This property is close to the beach",
  },
  {
    label: "Cabin",
    icon: Logo3,
    desc: "This property is close to the beach",
  },
  {
    label: "Cối xay gió",
    icon: Logo4,
    desc: "This property is close to the beach",
  },
  {
    label: "Vui chơi",
    icon: Logo5,
    desc: "This property is close to the beach",
  },
  {
    label: "Phòng riêng",
    icon: Logo6,
    desc: "This property is close to the beach",
  },
  {
    label: "Khung cảnh tuyệt vời",
    icon: Logo7,
    desc: "This property is close to the beach",
  },
  {
    label: "Biệt thự",
    icon: Logo8,
    desc: "This property is close to the beach",
  },
  {
    label: "Nhà nhỏ",
    icon: Logo9,
    desc: "This property is close to the beach",
  },
  {
    label: "Ưu chuộng",
    icon: Logo10,
    desc: "This property is close to the beach",
  },
  {
    label: "Hướng biển",
    icon: Logo11,
    desc: "This property is close to the beach",
  },
  {
    label: "Trượt tuyết",
    icon: Logo12,
    desc: "This property is close to the beach",
  },
];

const Categories = (props: Props) => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item, index) => (
          <CategoryBox
            key={index}
            label={item.label}
            desc={item.desc}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
