import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Footer from "./Footer";
import { ImArrowDown } from "react-icons/im";

const UpdateCard = () => {
  return (
    <div className="bg-slate-950 w-full">
      <Navbar />
      <br />
      <br /> <br />
      <div className="flex justify-start items-center gap-2">
        <h1 className="lg:text-4xl capitalize text-white font-mono update-course">
          Update Course
        </h1>
        <ImArrowDown className="lg:text-4xl text-blue-600" />
      </div>
      <div className="p-6 flex lg:flex-row lg:justify-between lg:gap-4 md:flex-row md:justify-between md:gap-2 sm:flex-col sm:justify-center sm:gap-4 xs:flex-col xs:gap-4 w-full bg-green-300">
        <div className="box1">
          <Profile />
        </div>
        <form
          encType="multipart/form-data"
          noValidate=""
          className="container grid grid-cols-1 mx-auto space-y-1">
          <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-black capitalize">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Your Name</label>
                <input
                  id=""
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  required
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="firstname"
                  className="text-sm">
                  Course Name
                </label>
                <input
                  id=""
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-6">
                <label
                  htmlFor="lastname"
                  className="text-sm">
                  About Course
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Course Description"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  required
                />
              </div>

              <div className="col-span-full sm:col-span-4">
                <label
                  htmlFor="zip"
                  className="text-sm capitalize font-bold">
                  Upload Course PDF
                </label>
                <input
                  id="file"
                  type="file"
                  name="pdf"
                  accept=".pdf"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-900 focus:dark:ring-violet-600 border border-red-600"
                />
              </div>

              <div className="col-span-full sm:col-span-6">
                <button
                  type="submit"
                  className="btn btn-info w-full md:text-xl capitalize tracking-widest font-serif">
                  Submit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateCard;
