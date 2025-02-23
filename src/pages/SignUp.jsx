import React from "react";
import MainTextField from "../components/MainTextField";
import PrimaryButton from "../components/MainButton";
import { useState } from "react";
import { VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleSignUpButton = () => {
    navigate("/sign-up/detail");
  };

  return (
    <>
      <div className="w-screen h-screen bg-navyCustom flex flex-col lg:flex-row">
        {/* Left Side (Main Navy Section - Always Full) */}
        <div className="flex-1 flex justify-center items-center ">
          <div className="flex flex-col space-y-6">
            <div className="flex justify-start font-bold text-3xl text-white mb-4">
              Create an Account
            </div>
            <MainTextField
              placeholderText="Username"
              type="text"
            ></MainTextField>
            <MainTextField
              placeholderText="Password"
              type={showPassword ? "text" : "password"}
              icon={
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                >
                  <VisibilityOff />
                </span>
              }
            />
            <MainTextField
              placeholderText="Confirm-Password"
              type={showPassword ? "text" : "password"}
              icon={
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                >
                  <VisibilityOff />
                </span>
              }
            />

            <PrimaryButton label="Sign Up" onClick={handleSignUpButton} />
          </div>

          {/* Login form or content goes here */}
        </div>

        {/* Right Side (Blue Section inside Parent Navy) */}
        <div className="w-screen h-[40vh] bg-primary flex justify-center items-center lg:w-[40%] lg:h-full lg:rounded-l-3xl">
          <div className="flex  justify-center items-center flex-col"></div>
        </div>
      </div>
    </>
  );
}
