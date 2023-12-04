"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  const registerUser = async ({ name, email,  password, mobile, termandconditions, active, url}) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/register`,
        {
            name, email,  password, mobile, termandconditions, active, url
        }
      );

      if (data?.user) {
        router.push("/");
        toast.success("Registration successful");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
      toast.error("Registration failed. Try again.");
    }
  };

  const clearErrors = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        setUser,
        registerUser,
        clearErrors,
        
      
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;