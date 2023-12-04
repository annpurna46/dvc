/* eslint-disable jsx-a11y/alt-text */
"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams  } from "next/navigation";
import React from 'react'
import Image from 'next/image'
import { toast } from "react-toastify";
import { parseCallbackUrl } from "@/helpers/helpers";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const params = useSearchParams();
  const callBackUrl = params.get("callbackUrl");

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: callBackUrl ? parseCallbackUrl(callBackUrl) : "/user/dashboard",
      });
      
      if (res.error) {
        error(res?.error);
        toast.error("Registration failed. Try again.");
      }
      if (res?.ok) {
        //console.log(res)
        toast.success("Registration successful");
        
        router.push("/user/dashboard");
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container  flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg sm:mr-10  flex items-end justify-start relative h-[900px]">
          <Image width={"0"} height={"0"} src={"/background.jpg"} className="w-full h-full" alt="" />
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 text-center">
          <div className="pl-[12em]"><Image width={"0"} height={"0"} src={"/vercel.svg"} alt="" /></div>
          <h1 className="text-gray-900 text-3xl mb-1 title-font text-left mt-32 font-bold">Login</h1>
          <p className="leading-relaxed mb-5 text-gray-600 text-left">Create Your <span className="text-blue-400 ">Digital Card</span> by using login your account  </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-left">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600 font-bold">Email</label>
              <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="text-left mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600 font-bold">Password</label>
              <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            {error && (
              <div className=" text-sm  text-red-600 mb-1  col-start-1 col-end-7">
                {error}
              </div>
            )}
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign In</button>
            <p className="text-xs text-gray-500 mt-3">Don&apos;t have a account? <Link href={"/register"} className="underline">Register</Link></p>
          </form>
        </div>
      </div>
    </section>
  );
}