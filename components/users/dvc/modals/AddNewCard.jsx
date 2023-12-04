import InpLabel from "@/core/Inp/InpLabel";
import SelectTag from "@/core/SelectTag";
import CtmButton from "@/core/CtmButton";
import React from "react";
import { MdClose } from "react-icons/md";

let arr = [
  {
    name: "Joe Black (9000)",
    value: "Joe Black (9000)",
  },
  {
    name: "Shivam Verma (9002)",
    value: "Shivam Verma (9002)",
  },
  {
    name: "Brandon Heart (9006)",
    value: "Brandon Heart (9006)",
  },
  {
    name: "William Abbot (9003)",
    value: "William Abbot (9003)",
  },
  {
    name: "Jason Sharlton (900002301)",
    value: "Jason Sharlton (900002301)",
  },
  {
    name: "James Deckar (9004)",
    value: "James Deckar (9004)",
  },
];

const AddAddmission = ({ setShow }) => {
  const handleTheClose = () => {
    setShow(false);
  };
  return (
    <div>
      {/* heading  */}
      <div className="flex gap-3 flex-col mb-2">
        <div className="flex justify-between">
          <p className="text-[18px]">Admission Enquiry</p>
          <div
            onClick={handleTheClose}
            className="bg-[#E89D4E] cursor-pointer flex justify-center items-center text-white p-2"
          >
            <MdClose className="h-4 w-4" />
          </div>
        </div>
        <hr class="h-px bg-gray-200 mx-3 border-0 dark:bg-gray-700" />
      </div>
      {/* main content  */}
      <div className="flex flex-col gap-4">
        {/* 3 inp boxes  */}
        <div className="flex gap-5">
          <div className="flex-1">
            <InpLabel title="Name" placeholder="Enter name" />
          </div>
          <div className="flex-1">
            <InpLabel title="Phone" placeholder="Enter Phone" />
          </div>
          <div className="flex-1">
            <InpLabel title="Email" placeholder="Enter email" />
          </div>
        </div>
        {/* another 3  */}
        <div className="flex gap-5">
          <div className="flex-1">
            <InpLabel title="Address" placeholder="Enter Address" />
          </div>
          <div className="flex-1">
            <InpLabel title="Description" placeholder="Enter Description" />
          </div>
          <div className="flex-1">
            <InpLabel title="Note" placeholder="Enter Note" />
          </div>
        </div>
        {/* another 3  */}
        <div className="flex gap-5">
          <div className="flex-1">
            <InpLabel title="Date" type="date" />
          </div>
          <div className="flex-1">
            <InpLabel title="Next Follow Up Date" type="date" />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <p className="text-[13px]">Assigned</p>
            <SelectTag arr={arr} placeholder="Select Assigned" />
          </div>
        </div>
        {/* another 4  */}
        <div className="flex gap-5">
          <div className="flex-1 flex flex-col gap-1">
            <p className="text-[13px]">Reference</p>
            <SelectTag arr={arr} placeholder="Select Reference" />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <p className="text-[13px]">Source</p>
            <SelectTag arr={arr} placeholder="Select Source" />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <p className="text-[13px]">Class</p>
            <SelectTag arr={arr} placeholder="Select Class" />
          </div>
          <div className="flex-1">
            <InpLabel title="Number Of Child" type="number" />
          </div>
        </div>
      </div>
      {/* btn */}
      <div className="flex w-full justify-end mb-12">
        <CtmButton
          //   icon={<FiSearch className="h-4 w-4" />}
          text="Save"
          CtmclassName={`bg-[#E89D4E] px-[15px] mt-5 text-white text-[13px] rounded-sm`}
        />
      </div>
    </div>
  );
};

export default AddAddmission;
