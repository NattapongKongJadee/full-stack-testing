import React from "react";
import MainTextField from "../components/base/MainTextField";
import MainButton from "../components/base/MainButton";

export default function DetailSignUp() {
  return (
    <>
      <div className="w-screen h-screen bg-navyCustom flex flex-col lg:flex-row">
        <div className="flex-1 flex justify-center items-center ">
          <div className="flex flex-col space-y-6">
            <div className="flex justify-start font-bold text-3xl text-white mb-4">
              Let we know more
            </div>
            <MainTextField
              placeholderText="Username"
              type="text"
            ></MainTextField>
            <MainTextField placeholderText="Age" type="number"></MainTextField>
            <MainTextField
              placeholderText="Gender"
              type="select"
              options={["male", "female", "non-binary"]}
            />
            <MainButton
              label="Let's Start"
              onClick={() => (window.location.href = "/main")}
            />
          </div>
        </div>
        <div className="w-screen h-[40vh] bg-primary flex justify-center items-center lg:w-[40%] lg:h-full lg:rounded-l-3xl">
          <div className="flex  justify-center items-center flex-col"></div>
        </div>
      </div>
    </>
  );
}
