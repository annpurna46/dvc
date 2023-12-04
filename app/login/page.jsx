import React from 'react'
import LoginForm from '@/components/LoginForm'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const login = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/user/dashboard");
  return (
  <LoginForm/>
  )
}

export default login