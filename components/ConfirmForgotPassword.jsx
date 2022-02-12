import React, { useEffect, useState } from "react";
import Amplify, { Auth } from "aws-amplify";

const ConfirmForgotPassword = ({ handleAuth, setFormState }) => {
    const CFPFormData = async ( e ) => {
        e.preventDefault();

        const data = {
          type: "confirmForgotPassword",
          authCode: e.target.authCode.value,
          password: e.target.password.value,
        };
        console.log("🚀 ~ file: ConfirmForgotPassword.jsx ~ line 13 ~ CFPFormData ~ data", data);
        
        if(data.authCode && data.password){
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
              <form onSubmit={CFPFormData} className="mt-10">
                <div>
                  <input
                    type="number"
                    name="authCode"
                    placeholder="Enter Verification Code"
                    className="mt-1 pl-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter new password"
                    className="mt-1 pl-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>

                <div className="mt-7">
                  <button
                    type="submit"
                    className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ConfirmForgotPassword;
