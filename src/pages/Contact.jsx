import React from "react";

const Contact = () => {
  return (
    <div className="py-12">
      <div className="text-center mt-5">
        <h1 className="font-semibold text-4xl mb-6">Contact Us</h1>
        <div className="flex justify-center items-center">
          <form className="text-left w-full md:w-3/4 lg:w-1/2 p-4 md:p-0">
            <div className="mb-4 flex flex-col md:flex-row">
              <div className="mb-4 md:mr-8 md:w-1/2">
                <label
                  for="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 p-2 border rounded-md w-full"
                  required=""
                  autocomplete="off"
                />
              </div>
              <div className="md:w-1/2">
                <label
                  for="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="mt-1 p-2 border rounded-md w-full"
                  required=""
                  autocomplete="off"
                />
              </div>
            </div>
            <div className="mb-4 md:flex">
              <div className="mb-4 md:mr-8 md:w-1/2">
                <label
                  for="phone"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  maxlength="10"
                  name="phone"
                  id="phone"
                  className="mt-1 p-2 border rounded-md w-full"
                  required=""
                  autocomplete="off"
                  
                />
              </div>
              <div className="md:w-1/2">
                <label
                  for="projectCategory"
                  className="block text-sm font-medium text-gray-600"
                >
                  Project Category
                </label>
                <select
                  id="projectCategory"
                  name="projectCategory"
                  className="mt-1 p-2 border rounded-md w-full"
                  required=""
                >
                  <option value="DEFAULT" disabled="" selected="">
                    Select Project Category
                  </option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label
                for="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 p-2 border rounded-md w-full h-32"
                required=""
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#1D7EB9] text-white px-4 py-2 rounded-md hover:bg-blue-900"
              >
                Contact Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
