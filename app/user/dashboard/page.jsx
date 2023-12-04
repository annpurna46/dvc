import UserInfo from "@/components/UserInfo";
import DashBoard from "@/components/users/Dashboard";
import Footer from "@/components/users/common/Footer";
import Header from "@/components/users/common/Header";
import Sidebar from "@/components/users/common/Sidebar";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if(!session){
    redirect('/login');
  }
  //console.log(session);
  return <>
      <Header user="session"/>
      <Sidebar/>
      <DashBoard />
      <Footer />
  </>
}