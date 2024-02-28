import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddCustomerForm = () => {
  const [moreDetails, setMoreDetails] = useState(false);

  return (
    <div className="text-black text-base font-normal relative">
      <h1 className="text-center text-3xl font-semibold">Add New Customer</h1>
      <form className="flex gap-8 flex-col mt-8">
        <input
          type="text"
          placeholder="Name"
          className="w-full py-2 px-2 outline-none rounded-none border-b border-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full py-2 px-2 outline-none rounded-none border-b border-black"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-full py-2 px-2 outline-none rounded-none border-b border-black"
        />
        <select
          name="currency"
          id="currency"
          defaultValue="currency"
          className="w-full py-2 px-2 outline-none rounded-none border-b border-black"
        >
          <option value="currency" disabled className="text-secondary">
            Currency
          </option>
          <option value="usd">US Dollar</option>
          <option value="tk">TaKa</option>
          <option value="inr">Indian Rupee</option>
        </select>
        <input
          type="text"
          placeholder="TAX ID"
          className="w-full py-1 px-2 outline-none rounded-none border-b border-black"
        />

        {moreDetails && (
          <>
            <input
              type="text"
              placeholder="City"
              className="w-full py-2 px-2 outline-none rounded-none border-b border-black"
            />
            <input
              type="email"
              placeholder="Country"
              className="w-full py-2 px-2 outline-none rounded-none border-b border-black"
            />
            <input
              type="tel"
              placeholder="Postal Code"
              className="w-full py-2 px-2 outline-none rounded-none border-b border-black"
            />
          </>
        )}

        {moreDetails || (
          <button
            onClick={() => setMoreDetails(true)}
            className="flex gap-2 items-center text-primary text-base my-2 font-semibold"
          >
            <FaPlus /> Add More Details
          </button>
        )}

        <button className="text-center py-4 bg-primary text-white text-xl font-semibold">
          Update
        </button>
      </form>
    </div>
  );
};

export default AddCustomerForm;
