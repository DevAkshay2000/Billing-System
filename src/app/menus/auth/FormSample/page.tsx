"use client";
import { useState } from "react";

const CompanyForm = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg border border-gray-300 max-w-4xl w-full mx-auto">
        {/* Form Heading */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-300">
          Product Detail
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Product Name */}
          <div>
            <label className="block text-gray-600 text-sm mb-2">Product Name</label>
            <input
              type="text"
              placeholder="Enter the name or model of"
              className="w-full border border-gray-300 rounded-md p-2 "
              required
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block text-gray-600 text-sm mb-2">Brand</label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 "
              required
            >
              <option value="" disabled>Select product brand</option>
              <option value="Brand A">Brand A</option>
              <option value="Brand B">Brand B</option>
            </select>
          </div>

          {/* Processor */}
          <div>
            <label className="block text-gray-600 text-sm mb-2">Processor</label>
            <select
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="AMD">AMD</option>
              <option value="Intel">Intel</option>
            </select>
          </div>

          {/* RAM */}
          <div>
            <label className="block text-gray-600 text-sm mb-2">RAM (Random Access Memory)</label>
            <input
              type="text"
              placeholder="Enter the RAM capacity in GB"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Storage Capacity */}
          <div>
            <label className="block text-gray-600 text-sm mb-2">Storage Capacity</label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 "
              required
            >
              <option value="" disabled>Specify the storage capacity</option>
              <option value="256GB">256GB</option>
              <option value="512GB">512GB</option>
            </select>
          </div>

          {/* Screen Size */}
          <div>
            <label className="block text-gray-600 text-sm mb-2">Screen Size</label>
            <input
              type="text"
              placeholder="Enter the size"
              className="w-full border border-gray-300 rounded-md p-2 "
              required
            />
          </div>

          {/* Operating System */}
          <div>
            <label className="block text-gray-600 text-sm mb-2">Operating System</label>
            <select
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="Windows">Windows</option>
              <option value="MacOS">MacOS</option>
            </select>
          </div>

          {/* Graphics Card */}
          <div>
            <label className="block text-gray-600 text-sm mb-2">Graphics Card</label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 "
              required
            >
              <option value="Nvidia">Nvidia</option>
              <option value="AMD Radeon">AMD Radeon</option>
            </select>
          </div>
        </form>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 mt-6 rounded-md hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CompanyForm;
