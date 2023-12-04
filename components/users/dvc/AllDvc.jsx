"use client";
import React, { useState, useEffect, useCallback } from 'react'
import DataTable from "react-data-table-component";
import CtmButton from "@/core/CtmButton";
import { MdOutlineModeEditOutline, MdLogin, MdOutlinePersonAddDisabled, MdOutlineDeleteForever } from "react-icons/md";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea, Tooltip
} from "@material-tailwind/react";
import { useRouter } from 'next/navigation';
import AddNewCard from "./modals/AddNewCard"
import DynamicModal from "@/core/DynamicModal";
import { BiPlus } from "react-icons/bi";

// eslint-disable-next-line @next/next/no-async-client-component
export default function AllDvc(props) {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [callShow, setCallShow] = useState(false);
    const [dvcData, setDvcData] = useState([]);
    const router = useRouter();
    const email = props.email;
    const url = props.url;
    const userId = props.id;
    
    useEffect(() => {
        fetch('/api/userDvc')
          .then((res) => res.json())
          .then((data) => {
            setDvcData(data);
          }).catch((error) => {
            console.log(error);
          });
      }, []);
   
    let column = [
        {
            name: "Name",
            selector: (row) => <div>{row.name}</div>
        },
        {
            name: "Email",
            selector: (row) => <div>{row.companyEmail}</div>
        },
        {
            name: "Phone",
            selector: (row) => <div>{row.phone_no}</div>
        },
        {
            name: "Sub Domain",
            selector: (row) => <div>{row.domainName}</div>
        },
        {
            name: "Created At",
            selector: (row) => <div>{row.createdAt}</div>
        },
        {
            name: "Actions",
            selector: (row) => (
                <div className="flex gap-2">
                    <Tooltip content="Edit">
                        <CtmButton
                            handler={() => handleEdit(row)}
                            CtmclassName={"bg-[#16C7F9] px-2"}
                            icon={<MdOutlineModeEditOutline />} />
                    </Tooltip>
                    <Tooltip content="Login">
                        <CtmButton
                            handler={() => handleLogin(row)}
                            CtmclassName={"bg-[#54BA4A] px-2"}
                            icon={<MdLogin className="h-3 w-3 -mr-[6px] text-white" />} />
                    </Tooltip>
                    <Tooltip content="Disable">
                        <CtmButton
                            handler={() => handleDisable(row)}
                            CtmclassName={"bg-[#FEA905] px-2"}
                            icon={<MdOutlinePersonAddDisabled className="h-3 w-3 -mr-[6px] text-white" />} />
                    </Tooltip>
                    <Tooltip content="Delete"><CtmButton
                        handler={() => handleDelete(row)}
                        CtmclassName={"bg-[#FC4438] px-2"}
                        icon={<MdOutlineDeleteForever className="h-3 w-3 -mr-[6px] text-white" />} />
                    </Tooltip>
                </div>)
        },

    ]
    const handleTheAddCard = () => {
        router.push("/user/allDvc/"+userId);
    };
    const handleDelete = async (row) => {
        const confirmed = window.confirm('Are you sure you want to delete this card?');
        console.log(row._id);
        if (confirmed) {
        try {
            // Set loading to true when starting the operation
            setLoading(true);
      
            // Your asynchronous logic (e.g., fetch, delete, etc.)
        const response = await fetch('/api/userDvc', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            
          },
           body: JSON.stringify({ _id:row._id }),
        });
      
            if (!response.ok) {
              
              throw new Error(`HTTP error! Status: ${response.status}`);
    }
      
            
      
          } catch (error) {
            // Handle any errors that occurred during the operation
            setError(error.message);
          } finally {
            // Set loading to false regardless of success or failure
            setLoading(false);
          }
        }
    }
    return (
        
            <div x-data="setup()" className="{ 'dark': isDark }" id="__next">
                <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
                    <div className="h-full ml-14 mt-14 mb-10 md:ml-64" >
                    <CtmButton
            handler={handleTheAddCard}
            icon={<BiPlus className="h-4 w-4 text-white" />}
            CtmclassName={
              "bg-[#E89D4E] px-5 text-white font-semibold text-[12px]"
            }
            text={"Add"}
          />
                        <DynamicModal
                            show={show}
                            openModal={() => setShow(true)}
                            closeModal={() => setShow(false)}
                        >
                            <AddNewCard setShow={setShow} />
                        </DynamicModal>

                        <DataTable
                            pagination
                            highlightOnHover
                            persistTableHead
                            fixedHeader
                            fixedHeaderScrollHeight="350px"
                            p="50px"
                            columns={column}
                            data={dvcData}
                            noDataComponent={
                                <div className="flex flex-col items-center justify-center p-4">
                                    {<p>No Data</p>}
                                </div>
                            }
                        />
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        

    )
}

