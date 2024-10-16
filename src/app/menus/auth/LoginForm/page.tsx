import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconUser, IconLock, IconTournament } from "@tabler/icons-react";
import Link from "next/link"; 
import { useRouter } from "next/navigation"; // Use next/navigation for routing in app directory

const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#f0f3fa]">
      <div className="flex flex-col md:flex-row shadow-xl rounded-lg w-full max-w-[850px] h-auto md:h-[450px]">
        {/* Left Section with Logo, Title, and Tagline */}
        <div
          className="flex flex-col justify-center items-center text-white p-6 md:p-8 w-full md:w-1/2 rounded-l-lg"
          style={{ backgroundColor: "#4B0082" }}
        >
          <div className="flex flex-col items-center">
            <IconTournament size={80} className="mb-6" color="#1b1a1e" />
            {/* Title and Tagline */}
            <h1 className="text-2xl md:text-3xl font-bold mb-2">SAGA Bill Pro</h1>
            <p className="text-center text-md md:text-lg  mb-4">
              Streamlined Accounts, Growth Assured
            </p>
          </div>
        </div>

        {/* Right Section with Login Form */}
        <div className="flex flex-col justify-center p-6 md:p-8 bg-white w-full md:w-1/2 rounded-r-lg">
          <h1
            className="text-center text-2xl font-semibold mb-6"
            style={{ color: "#4B0082" }}
          >
            Sign In
          </h1>

          <form className="space-y-6">
            {/* Username Input */}
            <div className="grid gap-1.5">
              <Label htmlFor="username" className="text-gray-700">
                Email
              </Label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <IconUser className="mr-2 text-gray-600" size={25} />
                <Input
                  id="username"
                  type="email"
                  className="border-none outline-none focus:ring-0 flex-grow px-2 py-2 text-base placeholder:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="grid gap-1.5">
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <IconLock className="mr-2 text-gray-600" size={25} />
                <Input
                  id="password"
                  type="password"
                  className="border-none outline-none focus:ring-0 flex-grow px-2 py-2 text-base placeholder:text-sm "
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <Label htmlFor="remember" className="text-gray-700 text-sm">
                  Remember this Device
                </Label>
              </div>
              <Link
                href="/forgot-credentials"
                className="text-sm"
                style={{ color: "#4B0082" }}
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              className="w-full text-white py-6 rounded-md hover:bg-gray-600"
              style={{ backgroundColor: "#4B0082" }}
              size="lg"
            >
              Sign In
            </Button>

            {/* Registration Link */}
            <p className="text-center mt-4 text-sm">
              Don't have an account?{" "}
              <Link
                href="/menus/auth/RegistrationForm"
                className="hover:underline"
                style={{ color: "#4B0082" }}
              >
                Register Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
