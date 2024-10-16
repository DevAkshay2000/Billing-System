"use client"; // Add this line at the top to mark this as a Client Component
import { useState, useEffect, MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconLock } from "@tabler/icons-react";
import { useRouter } from "next/navigation"; // Use next/navigation for routing

const OTPPage = () => {
  const router = useRouter(); // Use useRouter from next/navigation
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // State to disable Resend OTP button
  const [timer, setTimer] = useState(0); // State for countdown timer
  const [emailVerified, setEmailVerified] = useState(false); // State to track email verification

  // useEffect to handle the countdown
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(countdown); // Clean up the interval
    } else if (timer === 0) {
      setIsButtonDisabled(false); // Enable the button when timer hits 0
    }
  }, [timer]);

  const handleVerifyEmail = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Logic for email verification (You can add API call here)
    console.log("Email Verified");
    setEmailVerified(true); // Set email as verified
    setTimer(60); // Start the timer with 60 seconds
    setIsButtonDisabled(true); // Disable the Resend OTP button
  };

  const handleResendOTP = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Logic for resending OTP
    console.log("OTP Resent");
    setTimer(60); // Reset the timer to 60 seconds
    setIsButtonDisabled(true); // Disable the Resend OTP button again
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#f0f3fa] p-4 md:p-8">
      <div className="flex shadow-xl rounded-lg w-full max-w-[850px] h-auto md:h-[500px]">
        {/* Left Section */}
        <div
          className="flex flex-col justify-center items-center text-white p-8 w-full md:w-1/2 rounded-l-lg"
          style={{ backgroundColor: "#4B0082" }}
        >
          <IconLock size={80} className="mb-6" color="#1b1a1e" />
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Saga Bill Pro
          </h2>
          <p className="text-center text-md md:text-lg mb-4">
            "Verify, Secure, Proceed with Confidence"
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between p-8 bg-white h-full w-full md:w-1/2 rounded-r-lg">
          <h1
            className="text-center text-2xl font-semibold mb-8"
            style={{ color: "#4B0082" }}
          >
            Enter OTP
          </h1>

          <form className="space-y-4 flex-grow">
            {/* Email Field */}
            <div className="grid gap-1.5 mt-4">
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <div className="flex flex-col md:flex-row items-center">
                <Input
                  id="email"
                  type="email"
                  className="border border-gray-300 rounded-md px-2 py-2 text-base flex-grow md:mr-2 placeholder:text-sm"
                  placeholder="Enter your Email"
                />
                <Button
                  className="mt-2 md:mt-0 text-white rounded-md hover:bg-gray-600"
                  style={{ backgroundColor: "#4B0082" }}
                  size="lg"
                  onClick={handleVerifyEmail}
                  type={"button"}
                >
                  Verify Email
                </Button>
              </div>
            </div>

            {/* OTP Field */}
            <div className="grid gap-1.5 mt-4">
              <Label htmlFor="otp" className="text-gray-700">
                OTP
              </Label>
              <Input
                id="otp"
                type="text"
                placeholder="Enter your OTP"
                className="border border-gray-300 rounded-md px-2 py-2 text-base placeholder:text-sm"
              />
            </div>

            {/* Resend OTP Button and Timer */}
            <div className="flex justify-between mt-2">
              {/* Resend OTP Button */}
              <Button
                className={`text-white hover:bg-gray-600 ${
                  isButtonDisabled ? "cursor-not-allowed opacity-50" : ""
                }`}
                style={{ backgroundColor: "#4B0082" }}
                size="sm"
                disabled={isButtonDisabled} // Disable the button until timer reaches 0
                onClick={handleResendOTP}
              >
                Resend OTP
              </Button>

              {/* Timer */}
              <span className="text-gray-700">
                {timer > 0
                  ? `Resend OTP in ${timer}s`
                  : "You can resend OTP now."}
              </span>
            </div>
          </form>

          {/* Back and Proceed Buttons */}
          <div className="flex justify-between space-x-4 mt-8">
            <Button
              className="w-full py-2 rounded-md"
              variant="secondary"
              onClick={(event) => {
                event.preventDefault();
                router.back();
              }}
            >
              Back
            </Button>

            <Button
              className="w-full text-white py-2 rounded-md hover:bg-gray-600"
              style={{ backgroundColor: "#4B0082" }}
              size="lg"
              type="submit"
            >
              Verify OTP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
