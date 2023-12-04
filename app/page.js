import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
export default function Home() {

  return (
    <main>
      <div className="text-center align-middle m-[200px] w-auto" >
      <h1 className="text-center align-middle m-[200px] w-auto">Home Page</h1>
          <Link href={"/login"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Login</Link>
      </div>
    </main>
  )
}
