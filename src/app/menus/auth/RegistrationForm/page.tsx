"use client"; // This makes the component a Client Component

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation"; // Correct router import for Next.js 13+ features
import { useState } from "react"; // Import useState to manage the progress

const RegisterPage = () => {
  const router = useRouter(); // Client-side router navigation

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#f0f3fa] p-4 md:p-8">
      <div className="flex flex-col md:flex-row shadow-xl rounded-lg w-full md:w-[850px] h-auto md:h-[500px]">
        {/* Left Section with Icon and Text */}
        <div
          className="flex flex-col justify-center items-center text-white p-6 md:p-8 w-full md:w-1/2 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          style={{ backgroundColor: "#4B0082" }}
        >
          <div className="flex flex-col items-center">
            <IconUser size={80} className="mb-6" color="#1b1a1e" />
            <h2 className="text-2xl font-semibold mb-2">Saga Bill Pro</h2>
            <p className="text-center text-md md:text-lg  mb-4">
              Streamlined Accounts, Growth Assured
            </p>
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="flex flex-col justify-between p-6 md:p-8 bg-white w-full md:w-1/2 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
          <h1
            className="text-center text-2xl font-semibold mb-8 md:mb-12"
            style={{ color: "#4B0082" }}
          >
            Register
          </h1>

          <form className="space-y-4 md:space-y-6 flex-grow">
            {/* Username Input */}
            <div className="grid gap-2 ">
              <Label htmlFor="username" className="text-gray-700">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                className="border border-gray-300 rounded-md px-4 py-3 text-base w-full placeholder:text-sm"
                placeholder="Enter your username"
              />
            </div>

            {/* Password Input */}
            <div className="grid gap-2 ">
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                className="border border-gray-300 rounded-md px-4 py-3 text-base w-full placeholder:text-sm"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="grid gap-2 ">
              <Label htmlFor="confirm-password" className="text-gray-700">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                className="border border-gray-300 rounded-md px-4 py-3 text-base w-full placeholder:text-sm"
                placeholder="Confirm your password"
              />
            </div>
          </form>

          {/* Buttons Row - Back and Proceed side by side */}
          <div className="flex justify-between space-x-4 ">
            {/* Back Button */}
            <Button
              className="w-full py-2 rounded-md"
              variant="secondary" // Set to 'secondary' variant
              onClick={(event) => {
                event.preventDefault(); // Prevent default form submission
                router.back(); // Navigate back to the previous page
              }}
            >
              Back
            </Button>

            {/* Proceed Button */}
            <Button
              className="w-full text-white py-2 rounded-md hover:bg-gray-600"
              style={{ backgroundColor: "#4B0082" }}
              size="lg"
              onClick={(event) => {
                event.preventDefault(); // Prevent default form submission
                router.push("/menus/auth/CompanyDetails"); // Navigate to the company details page
              }}
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
