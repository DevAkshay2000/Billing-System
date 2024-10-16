"use client"; // Add this to indicate it's a client component

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"; // Import Input component
import { IconBuilding } from "@tabler/icons-react";
import { useRouter } from "next/navigation"; // Use next/navigation for routing
import { useState } from "react";

const CompanyDetails = () => {
  const router = useRouter(); // Use useRouter from next/navigation
  const [companyName, setCompanyName] = useState(""); // Use state for company name
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Handle country selection and reset state and city
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setSelectedState(""); // Reset state when country changes
    setSelectedCity(""); // Reset city when country changes
  };

  // Handle state selection and reset city
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setSelectedCity(""); // Reset city when state changes
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#f0f3fa] p-4 md:p-8">
      <div className="flex flex-col md:flex-row shadow-xl rounded-lg w-full md:w-[850px] h-auto md:h-[500px]">
        {/* Left Section with Icon and Text */}
        <div
          className="flex flex-col justify-center items-center text-white p-6 md:p-8 w-full md:w-1/2 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          style={{ backgroundColor: "#4B0082" }}
        >
          <div className="flex flex-col items-center">
            <IconBuilding size={80} className="mb-6" color="#1b1a1e" />
            <h2 className="text-2xl font-semibold mb-2">Saga Bill Pro</h2>
            <p className="text-center text-md md:text-lg mb-4">
              "Building Business Foundations, One Detail at a Time"
            </p>
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="flex flex-col justify-center p-6 md:p-8 bg-white w-full md:w-1/2 rounded-b-lg md:rounded-r-lg md:rounded-b-none">
          <h1
            className="text-center text-2xl font-semibold mb-6"
            style={{ color: "#4B0082" }}
          >
            Company Details
          </h1>

          <form className="space-y-4 md:space-y-6">
            {/* Company Name Input */}
            <div className="grid gap-1.5">
              <Label htmlFor="companyName" className="text-gray-700">
                Company Name
              </Label>
              <Input
                id="companyName"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-2 text-base placeholder:text-sm"
                placeholder="Enter company name"
              />
            </div>

            {/* Country Dropdown */}
            <div className="grid gap-1.5">
              <Label htmlFor="country" className="text-gray-700">
                Country
              </Label>
              <select
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
                className="border border-gray-300 rounded-md px-2 py-2 text-base"
              >
                <option value="">Select country</option>
                {/* Add country options here */}
              </select>
            </div>

            {/* State Dropdown */}
            <div className="grid gap-1.5">
              <Label htmlFor="state" className="text-gray-700">
                State
              </Label>
              <select
                id="state"
                value={selectedState}
                onChange={handleStateChange}
                className="border border-gray-300 rounded-md px-2 py-2 text-base"
                disabled={!selectedCountry} // Disable if no country is selected
              >
                <option value="">Select state</option>
                {/* Add state options here */}
              </select>
            </div>

            {/* City Dropdown */}
            <div className="grid gap-1.5">
              <Label htmlFor="city" className="text-gray-700">
                City
              </Label>
              <select
                id="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="border border-gray-300 rounded-md px-2 py-2 text-base"
                disabled={!selectedState} // Disable if no state is selected
              >
                <option value="">Select city</option>
                {/* Add city options here */}
              </select>
            </div>

            {/* Buttons Row - Back and Proceed side by side */}
            <div className="flex justify-between space-x-4">
              {/* Back Button */}
              <Button
                className="w-full py-2 rounded-md"
                variant="secondary" // Set to 'secondary' variant
                onClick={(event) => {
                  event.preventDefault(); // Prevent default form submission
                  router.back(); // Use router.back() to go back to the previous page (Registration)
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
                  router.push("/menus/auth/Otp"); // Navigate to OTP page
                }}
              >
                Proceed
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
