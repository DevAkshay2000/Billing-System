import React from "react";
import { MdOutlineInventory } from "react-icons/md";
import { MdAddBusiness } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
export default function Sidebar() {
  return (
    <div className="    min-h-[90dvh] flex justify-center   rounded-lg sidebar-transition shadow-md">
      <div className="x w-full mt-4 space-y-4  ">
        <div className=" flex space-x-3 items-center  w-full p-3 sidebar-links hover:bg-gray-200 hover:rounded-md ">
          <MdOutlineInventory size={20} />
          <span className="text-bold">Inventory</span>
        </div>
        <div className=" flex space-x-3 items-center  w-full p-3 sidebar-links hover:bg-gray-200 hover:rounded-md ">
          <MdAddBusiness size={20} />
          <span className="text-bold">Sales</span>
        </div>
        <div className=" flex space-x-3 items-center  w-full p-3 sidebar-links hover:bg-gray-200 hover:rounded-md ">
          <AiFillProduct size={20} />
          <span className="text-bold">Products</span>
        </div>
        <div className=" flex space-x-3 items-center  w-full p-3 sidebar-links hover:bg-gray-200 hover:rounded-md ">
          <TbReportSearch size={20} />
          <span className="text-bold">Reports</span>
        </div>
        <div className=" flex space-x-3 items-center  w-full p-3 sidebar-links hover:bg-gray-200 hover:rounded-md ">
          <IoDocumentTextOutline size={20} />
          <span className="text-bold">Documents</span>
        </div>
      </div>
    </div>
  );
}
