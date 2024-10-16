"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Menu from "@/components/Menu/Menu";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="min-h-screen">
        {/* <Navbar setSidebarOpen={setSidebarOpen} setToggleMenu={setToggleMenu} /> */}
        {sidebarOpen && (
          <div className={`min-h-screen `}>
            <Sidebar />
          </div>
        )}
        {toggleMenu && (
          <div className="min-h-screen">
            <Menu />
          </div>
        )}
        <div className="grid grid-cols-6 gap-4 min-h-[90dvh] bg-slate-100">
          <div className="hidden sm:col-span-2 sm:block lg:col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-5">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}
