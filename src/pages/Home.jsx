import MainButton from "../components/base/MainButton";
import MainTextField from "../components/base/MainTextField";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleImageSignUpClick = () => navigate("/sign-up");
  const handleImageSignInClick = () => navigate("/main");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-screen h-screen bg-navyCustom flex flex-col lg:flex-row">
      <div className="flex-1 flex justify-center items-center px-6 sm:px-12">
        <div className="flex flex-col space-y-5 w-full max-w-[400px]">
          <Typography
            variant="h4"
            fontWeight="bold"
            color="white"
            className="text-center lg:text-left"
          >
            Sign In
          </Typography>
          <MainTextField placeholderText="Username" type="text" />
          <MainTextField
            placeholderText="Password"
            type={showPassword ? "text" : "password"}
            icon={
              <span className="cursor-pointer">
                <VisibilityOff />
              </span>
            }
          />
          <MainButton label="Sign In" onClick={handleImageSignInClick} />
          <Typography
            variant="body2"
            className="text-blue-500 text-center cursor-pointer"
          >
            Forgot Password?
          </Typography>
        </div>
      </div>
      <div className="w-full h-[40vh] lg:w-[40%] lg:h-full bg-primary flex flex-col justify-center items-center rounded-t-3xl lg:rounded-l-3xl">
        <Typography variant="h5" fontWeight="bold" color="white">
          SIGN UP HERE
        </Typography>
        <Box
          component="img"
          className="object-contain cursor-pointer mt-4"
          sx={{
            maxHeight: { xs: 150, sm: 200, md: 250 },
            maxWidth: { xs: 150, sm: 200, md: 250 },
          }}
          alt="Login Logo"
          src="/logo-login.png"
          onClick={handleImageSignUpClick}
        />
      </div>
    </div>
  );
};

export default Home;
