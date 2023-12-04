"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useContext,useEffect  } from "react";
import { useRouter } from "next/navigation";
import { useUrl  } from 'nextjs-current-url';
import { toast } from "react-toastify";

export default function RegisterForm() {
    const [error, setError] = useState("");
    const { hostname, pathname } = useUrl () ?? {};
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [termandconditions, setTermandconditions] = useState("no");
    const [message, setMessage] = useState("");
    const status=1; 
    
    const onClickAvailability = (e) => {

        if (termandconditions == 'no') {
            setTermandconditions("yes")
        } else if (termandconditions == 'yes') {
            setTermandconditions("no")

        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password || !mobile || !termandconditions) {
            toast.warning("All fields are necessary.", {
                position: "top-center",
              });
              setError("All fields are necessary.");
            return;
        }
        else if (!name) {
            toast.warning("Name is required.", {
                position: "top-center",
              });
            setError("Name is required.");
        }
        else if (!email) {
            toast.warning("email is required.", {
                position: "top-center",
              });
            setError("email is required.");
        }
        else if (!password) {
            toast.warning("Password is required.", {
                position: "top-center",
              });
            setError("Password is required.");
        }
        else if (!confirmPassword) {
            toast.warning("Confirm Password is required.", {
                position: "top-center",
              });
            setError("Confirm Password is required.");
        }
        else if (password != confirmPassword) {
            toast.warning("Password and Confrim password are not same.", {
                position: "top-center",
              });
            setError("Password and Confrim password are not same.");
        }
        else if (!mobile) {
            toast.warning("mobile is required.", {
                position: "top-center",
              });
            setError("mobile is required.");
        }
        else if (termandconditions == 'no') {
            toast.warning("Please check term and conditions. It is required.", {
                position: "top-center",
              });
            setError("Please check term and conditions. It is required");
        }

        try {

            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();

            if (user) {
                toast.error("User already exists.", {
                    position: "top-center",
                  });
                setError("User already exists.");
                return;
            }
            const res = await fetch("api/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  password,
                }),
              });
              if (res.ok) {
                const form = e.target;
                form.reset();
                toast.success("Logged in.", {
                    position: "top-center",
                  });
                router.push("/");
              } else {
                toast.error("User registration failed.", {
                    position: "top-center",
                  });
                console.log("User registration failed.");
              }
           
        } catch (error) {
            toast.error(error.response.data.message, {
                position: "top-center",
              });
            console.log("Error during registration: ", error);
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image className="mx-auto h-10 w-auto" src={"/vercel.svg"} alt="Your Company" height={20} width={20} />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register a new account</h2>
            </div>
            {message && (
                <div className=" text-sm w-[100%] text-center text-green-600 mb-1 ">
                    {message}
                </div>
            )}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <div className="mt-2">
                            <input id="name" onChange={(e) => setName(e.target.value)} name="name" type="text" autoComplete="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div className="mt-2">
                            <input id="email" onChange={(e) => setEmail(e.target.value)} name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="current-password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                        </div>
                        <div className="mt-2">
                            <input id="confirmpassword" name="confirmpassword" onChange={(e) => setConfirmPassword(e.target.value)} type="password" autoComplete="current-password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
                        <div className="mt-2">
                            <input id="mobile_no" onChange={(e) => setMobile(e.target.value)} name="mobile_no" type="number" autoComplete="mobile" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="text-sm overflow-hidden float-left clear-none  grid grid-cols-6 gap-4">
                        <div className="col-start-1 col-end-7">
                            <input type="checkbox" onClick={(e) => onClickAvailability(e.target.value)} name="termandconditions" className=" mb-[12px]  float-left clear-none m-[4px] font-semibold text-indigo-600 hover:text-indigo-500" />
                            <label className="float-left clear-none inline ml-[5px] mb-[12px] " htmlFor="termandconditions">Accept Term and Conditions</label>
                        </div>
                        {error && (
                            <div className=" text-sm  text-red-600 mb-1  col-start-1 col-end-7">
                                {error}
                            </div>
                        )}
                    </div>

                    <div>
                        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                    </div>
                </form>



            </div>
        </div>
    );
}