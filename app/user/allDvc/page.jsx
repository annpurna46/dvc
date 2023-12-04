import Alldvc from "@/components/users/dvc/AllDvc";
import Footer from "@/components/users/common/Footer";
import Header from "@/components/users/common/Header";
import Sidebar from "@/components/users/common/Sidebar";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function AllDvc() {
  const session = await getServerSession(authOptions);
  //console.log(session);
  if(!session){
    redirect('/login');
  }else{
    
  }
  
  return <>
      <Header/>
      <Sidebar />
      <Alldvc url={session.user.url} id={session.user._id} email={session.user.email} />
      <Footer />
  </>
}