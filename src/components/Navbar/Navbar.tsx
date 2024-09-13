import React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GoSidebarCollapse } from "react-icons/go";
import { BiMenuAltRight } from "react-icons/bi";
interface NavbarProps {
  setSidebarOpen: any;
  setToggleMenu: any;
}

export default function Navbar({ setSidebarOpen, setToggleMenu }: NavbarProps) {
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
  function handleSidebar() {
    setToggleMenu(false);
    setSidebarOpen((prevState: any) => !prevState);
  }
  function handleMenu() {
    setSidebarOpen(false);
    setToggleMenu((prevState: any) => !prevState);
  }
  return (
    <nav className="flex items-center justify-between px-2   border-2 min-h-[10dvh] bg-yellow-100">
      <div className="mx-auto sm:mx-0 flex justify-between items-center  w-full">
        <span className="sm:hidden cursor-pointer" onClick={handleSidebar}>
          <GoSidebarCollapse size={24} />
        </span>
        <Link href="/" className="text-xl font-bold ">
          Billing Systems
        </Link>
        <span className="sm:hidden cursor-pointer" onClick={handleMenu}>
          <BiMenuAltRight size={24} />
        </span>
      </div>

      <div className="items-center space-x-4 hidden sm:flex ">
        {menuItems.map((item) => (
          <Link key={item.id} href={item.href}>
            <Button variant="outline">{item.name}</Button>
          </Link>
        ))}
      </div>
    </nav>
  );
}
