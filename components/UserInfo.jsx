"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Header from "./header";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
      <Header/>

  );
}