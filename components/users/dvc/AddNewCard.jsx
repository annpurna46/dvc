"use client";
import React, { useState, useEffect} from "react";
import { addCard } from "@/services/dvcService";
import { toast } from "react-toastify";
import AddCompanyDetails from "./AddCompanyDetails";

const AddCard = (params) => {
  const [dvcId, setDvcId] = useState([]);
  const [options, setOptions] = useState([]);
  const [error, setError] = useState("");
  const [isDataSaved, setIsDataSaved] = useState('theme');
  const [currentStep, setCurrentStep] = useState(2);
  const [card, setCard] = useState({
    name: "",
    category: "",
    userId: params.userId,
  });
  useEffect(() => {
    fetch('/api/themeCategory')
      .then((res) => res.json())
      .then((data) => {
        setOptions(data)
      }).catch((error) => {
        //console.log(data._id);
        setDvcId(data._id);
        setError("Failed to fetch data");
      });
  }, []);
  if (error) {
    toast.success(error, {
      position: "top-center",
    });
    return <div>Error: {error}</div>;
  }


  const handleAddCard = async (event) => {``
    event.preventDefault();
    // validate task data
    try {
      const result = await addCard(card);
      //console.log(result);
      toast.success("Your Theme is added !!", {
        position: "top-center",
      });

      setCard({
        name: "",
        category: "",
      });
      setIsDataSaved('companyDetails');
      setCurrentStep((prevStep) => prevStep + 1);
    } catch (error) {
      console.log(error);
      toast.error("Theme not added !!", {
        position: "top-center",
      });
    }
  };

  return (
    <section className="pl-60 md:w-fit text-gray-600 body-font">
      <div className=" pl-5 py-24  ">
        <div className="mb-10  w-full">
          <a className={`sm:pl-4 py-3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium items-center inline-flex  leading-none ${isDataSaved === 'theme' ? 'border-blue-500 text-blue-500 bg-gray-100 rounded-t' : 'border-gray-200 hover:text-gray-900'}  tracking-wider`}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>Card-Theme
          </a>
          <a className={`sm:pl-4 py-3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${isDataSaved === 'companyDetails' ? 'border-blue-500 text-blue-500 bg-gray-100 rounded-t' : 'border-gray-200 hover:text-gray-900'}  tracking-wider`}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>Company-Details
          </a>
          <a className={`sm:pl-4 py-3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${isDataSaved === 'socialMedia' ? 'border-blue-500 text-blue-500 bg-gray-100 rounded-t' : 'border-gray-200 hover:text-gray-900'}  tracking-wider`}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>Social-Media-Setting
          </a>
          <a className={`sm:pl-4 py-3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${isDataSaved === 'paymentDetails' ? 'border-blue-500 text-blue-500 bg-gray-100 rounded-t' : 'border-gray-200 hover:text-gray-900'}  tracking-wider`}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>Payment-Details
          </a>
          <a className={`sm:pl-4 py-3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${isDataSaved === 'productServices' ? 'border-blue-500 text-blue-500 bg-gray-100 rounded-t' : 'border-gray-200 hover:text-gray-900'}  tracking-wider`}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>Product-And-Services
          </a>
          <a className={`sm:pl-4 py-3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${isDataSaved === 'OrderPage' ? 'border-blue-500 text-blue-500 bg-gray-100 rounded-t' : 'border-gray-200 hover:text-gray-900'}  tracking-wider`}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>Order-Page
          </a>
          <a className={`sm:pl-4 py-3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${isDataSaved === 'imageGallery' ? 'border-blue-500 text-blue-500 bg-gray-100 rounded-t' : 'border-gray-200 hover:text-gray-900'}  tracking-wider`}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>Image-Gallery
          </a>
          <a className={`sm:pl-4 py-3 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${isDataSaved === 'Preview' ? 'border-blue-500 text-blue-500 bg-gray-100 rounded-t' : 'border-gray-200 hover:text-gray-900'}  tracking-wider`}>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>Preview
          </a>
        </div>
        {currentStep === 1 &&
          <div className="flex flex-col text-center ">
            <h1 className="text-xl font-medium title-font  text-gray-900 underline mb-10">Company Name</h1>
            <form className="w-full max-w-lg lg:w-2/3 mx-auto leading-relaxed text-base" action="#!" onSubmit={handleAddCard}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Name
                  </label>
                  <input onChange={(event) => {
                    setCard({
                      ...card,
                      name: event.target.value,
                    });
                  }}
                    value={card.name} className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="text" placeholder="Company Name" />
                  {error && (
                    <p className="text-red-500 text-xs italic"> {error}</p>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Select Category
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      onChange={(event) => {
                        setCard({
                          ...card,
                          category: event.target.value,
                        });
                      }}
                    >
                      <option value="">Select Category</option>
                      {Array.isArray(options) && options && options.map(item => (
                        <option key={item._id} value={item._id}>{item.name}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <button className="bg-blue-600 py-2 px-3 rounded-lg text-white hover:bg-blue-800">
                  Add {" "}
                </button>
                <button className="bg-red-600 py-2 px-3 rounded-lg text-white hover:bg-red-800 ms-3">
                  Clear
                </button>
              </div>
            </form>
          </div>
        }
        {currentStep === 2 && <AddCompanyDetails />}
        {/* {currentStep === 3 && <AnotherComponent />} */}


      </div>
    </section>
  );
      
};

export default AddCard;
