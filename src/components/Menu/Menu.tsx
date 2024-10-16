import React from "react";

export default function Menu() {
  const menuItems = [
    {
      name: "Home",
      href: "/",
      id: 1,
    },
    {
      name: "About",
      href: "/about",
      id: 2,
    },
    {
      name: "Services",
      href: "/services",
      id: 3,
    },
    {
      name: "Contact",
      href: "/contact",
      id: 4,
    },
  ];
  return (
    <div className="bg-teal-100  ">
      <div className="grid place-items-center border-teal-600 border-2 min-h-[90dvh]  rounded-lg">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-teal-100 p-4 rounded-lg  text-center border-teal-600 border-b-2 w-full"
          >
            <a href={item.href} className="text-teal-800 text-xl ">
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
