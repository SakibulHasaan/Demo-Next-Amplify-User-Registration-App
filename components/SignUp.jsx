import React, { useEffect, useState } from "react";
import Amplify, { Auth } from "aws-amplify";

const SignUp = ({ handleAuth, setFormState }) => {
  const SignUpFormData = async (e) => {
    e.preventDefault();

    const data = {
      type: "signUp",
      email: e.target.email.value,
      password: e.target.password.value,
      cfpassword: e.target.cfpassword.value,
    };

    console.log("🚀 ~ file: SignUp.jsx ~ line 14 ~ SignUpFormData ~ data", data);

    if((data.email && data.cfpassword) && (data.password === data.cfpassword )){
      handleAuth(data);
      setFormState("confirmSignUp");
    } else {
      alert("Something Went Wrong");
    }


    
  };

  return (
    <div>
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                Sign Up
              </label>
              <form onSubmit={SignUpFormData} className="mt-10">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="mt-1 pl-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>

                <div className="mt-7">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="mt-1 pl-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>

                <div className="mt-7">
                  <input
                    type="password"
                    name="cfpassword"
                    placeholder="Confirm password"
                    required
                    className="mt-1 pl-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>

                <div className="mt-7">
                  <button
                    type="submit"
                    className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Sign Up with
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button
                  onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}
                  className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Facebook
                </button>

                <button
                  onClick={() => Auth.federatedSignIn({ provider: "Google" })}
                  className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Google
                </button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">Already have an account?</label>
                  <button
                    onClick={() => setFormState("signIn")}
                    className="text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
