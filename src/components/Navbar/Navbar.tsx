import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { GoSidebarCollapse } from "react-icons/go";
import { BiMenuAltRight } from "react-icons/bi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface NavbarProps {
  setSidebarOpen?: any;
  setToggleMenu?: any;
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
      children: [
        {
          name: "Founder",
          href: "/founder",
          id: 1,
        },
        {
          name: "Origin",
          href: "/origin",
          id: 2,
        },
        {
          name: "Goals",
          href: "/goals",
          id: 3,
        },
      ],
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
    <nav className="flex items-center  px-4   border-2 min-h-[10dvh] shadow-md sticky top-0 bg-white z-50">
      <div className=" mx-auto sm:mx-0 flex justify-between items-center  w-full sm:w-auto">
        <span className="sm:hidden cursor-pointer">
          <Drawer direction="left">
            <DrawerTrigger>
              <GoSidebarCollapse size={24} />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>SideBar Menu</DrawerTitle>
                <DrawerDescription>Menu Items</DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </span>
        <Link href="/" className="text-xl font-bold ">
          SAGA BillPro
        </Link>
        <span className="sm:hidden cursor-pointer">
          <Drawer direction="right">
            <DrawerTrigger>
              <BiMenuAltRight size={24} />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Navigational Menu</DrawerTitle>
                <DrawerDescription>Menu Items</DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </span>
      </div>

      <div className="items-center space-x-4 hidden sm:flex  sm:flex-grow sm:justify-center ">
        {menuItems.map((item) => {
          return (
            <NavigationMenu key={item.id}>
              <NavigationMenuList>
                {!item.children ? (
                  <NavigationMenuItem>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4 space-x-4">
                      {item.children &&
                        item.children.map((submenu) => (
                          <NavigationMenuLink
                            key={submenu.id}
                            title={submenu.name}
                            href={submenu.href}
                            className=" hover:bg-gray-100 p-2 rounded-md "
                          >
                            {submenu.name}
                          </NavigationMenuLink>
                        ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>
          );
        })}{" "}
      </div>
    </nav>
  );
}
