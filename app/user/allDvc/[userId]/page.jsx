import React from "react";
import AddCard from "@/components/users/dvc/AddNewCard";
import Header from "@/components/users/common/Header";
import Footer from "@/components/users/common/Footer";
import Sidebar from "@/components/users/common/Sidebar";
import { cookies } from 'next/headers'
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add New Digital Card ",
};


const UserId = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');
  //console.log(session)

  return (
  <div className="container">
     <Header />
   <div className="flex flex-wrap">
    <Sidebar />
    <AddCard userId={params.userId} />;
    </div>
    <Footer />
  </div>
    )
 
};

export default UserId;
