"use client";
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { HiMenu } from "react-icons/hi";
import { BiLogoGithub } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { AiOutlineSchedule } from "react-icons/ai";
import { HiShare } from "react-icons/hi";
import AccordianComp from "./AccordianComp";

const Menus = [
  { rang: "#B1DFF8", title: "Dashboard", src: "Chart_fill", icon: FaHome },
  { rang: "#FF0000", title: "Composer", src: "Chat", icon: BiLogoTelegram },
  { rang: "#41A900", title: "Bulk post", src: "Calendar", icon: MdOutlineRocketLaunch },
  { rang: "#46DA7D", title: "Whatsapp", src: "Search", icon: IoLogoWhatsapp },
  { rang: "#99EBEA", title: "Drafts", src: "Chart", icon: GrNotes },
  {
    rang: "#E799F5",
    title: "Schedules ",
    src: "Folder",
    gap: true,
    icon: AiOutlineSchedule,
  },
  { rang: "#002BFF", title: "Account manager", src: "Setting", icon: HiShare },
];

export function DrawerDefault() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Button size="sm" onClick={openDrawer}>
        <HiMenu size={20} />
      </Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          {/* logo part  */}
          <Typography variant="h5" color="blue-gray">
            <div className="flex gap-x-4 items-center">
              <BiLogoGithub
                size={30}
                color="gray"
                className={`cursor-pointer duration-700 ${
                  open && "rotate-[360deg]"
                }`}
              />
              <h1
                className={`text-gray-800 origin-left font-medium text-xl ${
                  !open && "hidden"
                }  duration-500 ${!open && "scale-0"}`}
              >
                Designer
              </h1>
            </div>
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {/* content  */}
        <div>
          <AccordianComp show={true} />
        </div>
      </Drawer>
    </React.Fragment>
  );
}
