
import React from "react";
import { FaHome } from "react-icons/fa";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { FaUser, FaInbox, FaCog, FaAddressCard, FaUsers} from 'react-icons/fa';


export const Menus = [
  {
    rang: "#B47BFE",
    title: "Users",
    src: "Chat",
    link: "/whatsapp/users",
    icon: FaUser,
  },
  {
     rang : "#FFC508" ,
     title : "Inbox" ,
     link : "/whatsapp/chat",
     icon : FaInbox ,
  },
  {
    rang: "#93FFCE",
    title: "Setting",
    src: "Chat",
    link: "/setting/whatsapp",
    icon: FaCog,
  },
  {
    rang : "#41A900" ,
    title : "Digital cards" ,
    link : "/dvc",
    icon : FaAddressCard ,
 },
 {
  rang: "#B47BFE",
  title: "Manage Dvc Users",
  link: "/manageDvcUsers",
  icon: FaUsers,
},
  
];

const AccordianComp = ({ show }) => {
  const [open, setOpen] = React.useState(0);
  const pathname = usePathname()
  console.log("pathname=>",pathname)

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="flex z-30 gap-[-10px] pt-8 pl-1 flex-col">
        <Link href={"/dashboard"}>
          <div className="flex text-[12px] font-normal w-full justify-between ">
            <div className={`flex gap-x-3 justify-start items-center`}>
              {<FaHome size={25} color={"#B1DFF8"} />}
              <p className={`text-[12px] ${!show && "hidden"}`}>
                {"Dashboard"}
              </p>
            </div>
          </div>
        </Link>
      </div>
      {Menus.map((el, i) => (
        <div key="" className="flex gap-[-10px] pt-5 pl-1 flex-col">
          <div className="flex text-[12px] font-normal w-full justify-between ">
            <Link href={el.link}>
              <div className="flex gap-x-3 justify-start items-center">
                {<el.icon size={25} color={el.rang} />}
                <p className={`text-[12px] opacity-100 transition-all duration-500 ${!show && "hidden opacity-0"}`}>{el.title}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default AccordianComp;

