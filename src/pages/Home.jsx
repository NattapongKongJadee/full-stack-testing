import PrimaryButton from "../components/MainButton";
import MainTextField from "../components/MainTextField";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //   const fontUsed = window.getComputedStyle(document.body).fontFamily;
  //   console.log("Font used:", fontUsed);
  const navigate = useNavigate();

  const handleImageSignUpClick = () => {
    navigate("/sign-up");
  };

  const handleImageSignInClick = () => {
    navigate("/main");
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="w-screen h-screen bg-navyCustom flex flex-col lg:flex-row">
        {/* Left Side (Main Navy Section - Always Full) */}
        <div className="flex-1 flex justify-center items-center ">
          <div className="flex flex-col space-y-6">
            <div className="flex justify-start font-bold text-3xl text-white mb-4">
              Sign In
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
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </span>
              }
            />
            <PrimaryButton label="Sign In" onClick={handleImageSignInClick} />
            <div className="flex text-blue-500 justify-center">
              Forgot Password?
            </div>
          </div>

          {/* Login form or content goes here */}
        </div>

        {/* Right Side (Blue Section inside Parent Navy) */}
        <div className="w-screen h-[40vh] bg-primary flex justify-center items-center lg:w-[40%] lg:h-full lg:rounded-l-3xl">
          <div className="flex  justify-center items-center flex-col">
            <div className="flex justify-start font-bold text-3xl text-white ">
              SIGN UP HERE
            </div>
            <Box
              component="img"
              className="object-contain cursor-pointer"
              sx={{
                maxHeight: { xs: 200, md: 400 },
                maxWidth: { xs: 200, md: 400 },
              }}
              alt=""
              src="/public/logo-login.png"
              onClick={handleImageSignUpClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
