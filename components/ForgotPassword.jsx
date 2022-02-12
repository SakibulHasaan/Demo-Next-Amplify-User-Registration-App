import React, { useEffect, useState } from "react";
import Amplify, { Auth } from "aws-amplify";

const ForgotPassword = ({ handleAuth, setFormState }) => {
    const FPFormData = async ( e ) => {
        e.preventDefault();

        const data = {
          type: "forgotPassword",
          email: e.target.email.value,
        };
        console.log("🚀 ~ file: ForgotPassword.jsx ~ line 12 ~ FPFormData ~ data", data);
        
        if(data.email){
          handleAuth(data);
        } else {
          alert("Something Went Wrong");
        }
    }

  return (
    <div>
      <div className="font-sans">
        <div className="relative max-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                Forgot Password
              </label>
              <form onSubmit={FPFormData} className="mt-10">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="mt-1 pl-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>

                <div className="mt-7">
                  <button
                    type="submit"
                    className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Continue
                  </button>
                </div>

                <div className="w-full text-left">
                        <p onClick={() => setFormState("signIn")} className="underline text-lg mt-2 text-gray-600 hover:text-pink-600 cursor-pointer" href="#">
                            Cancel
                        </p>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ForgotPassword;
