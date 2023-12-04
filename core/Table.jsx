import React from "react";
import dayjs from "dayjs";

let tableHeadArr = [
  {
    name: "IP Address",
  },
  {
    name: "os",
  },
  {
    name: "Device",
  },
  {
    name: "Login At",
  },
];

const Table = ({ tableContent = [] }) => {
  return (
    <div className=" overflow-x-auto shadow-md sm:rounded-lg z-0">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableHeadArr.map((el, i) => (
              <th key={i} scope="col" className="px-6 py-3">
                {el.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableContent.map((el, i) => (
            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {el.ip}
              </th>
              <td className="px-6 py-4">{el.os}</td>
              <td className="px-6 py-4">
                {el.isMobile ? "Mobile" : "Desktop"}
              </td>
              <td className="px-6 py-4">
                {dayjs(el.loginAt).format("DD MMM YYYY - hh:mm:ss a")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
