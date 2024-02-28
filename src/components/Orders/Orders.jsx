"use client";

import { useAppSelector } from "@/libs/hooks";
import React, { useState, useEffect } from "react";
import {
  FaFileInvoiceDollar,
  FaHandHoldingUsd,
  FaMinusCircle,
  FaPercent,
  FaPlus,
  FaPlusCircle,
  FaRegHandRock,
} from "react-icons/fa";
import {
  MdMenu,
  MdOutlineCancel,
  MdOutlineDashboard,
  MdOutlineLocalShipping,
  MdOutlineLocationOn,
  MdOutlineSettings,
} from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { RiEditBoxLine } from "react-icons/ri";
import Image from "next/image";
import AddCustomerForm from "../AddCustomerForm/AddCustomerForm";
import { BsChevronLeft } from "react-icons/bs";

const Orders = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  const [orders, setOrders] = useState({});

  useEffect(() => {
    setIsHydrated(true);

    fetch("./Data/Orders.json")
      .then((res) => res.json())
      .then((data) => {
        //filtering order based on customers name
        const filterOrders = data.filter(
          (order) => order.name === "Steve Jobs"
        );
        setOrders(filterOrders[0]);
      });
  }, []);

  if (!isHydrated) {
    return null; // Return null until hydration is complete
  }

  return (
    <div className="mx-4">
      {/* Menu */}
      <div className="flex w-full justify-between items-center gap-4 mt-2 mb-4 overflow-auto">
        {/* drawer left */}

        <div className="drawer w-48">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content w-10 md:w-fit">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="text-5xl drawer-button w-fit cursor-pointer"
            >
              <MdMenu />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-2/3 md:w-1/3 lg:w-1/5 min-h-full flex flex-col justify-between bg-[#efefef] text-base-content">
              {/*<div>*/}
              <div>
                <div>
                  <Image
                    src="/Image/DashboarImage.png"
                    alt="dashboard logo"
                    width={300}
                    height={300}
                    className="w-80"
                  />
                </div>
                <li className="hover:bg-primary2/20 hover:text-primary2 duration-300 transition-all text-xl font-semibold text-secondary">
                  <a className="flex gap-3 items-center">
                    <MdOutlineDashboard /> Dashboard
                  </a>
                </li>
                <li className="hover:bg-primary2/20 hover:text-primary2 duration-300 transition-all text-xl font-semibold text-secondary">
                  <a className="flex gap-3 items-center">
                    <MdOutlineLocationOn /> Location
                  </a>
                </li>
                <li className="hover:bg-primary2/20 hover:text-primary2 duration-300 transition-all text-xl font-semibold text-secondary">
                  <a className="flex gap-3 items-center">
                    <FaFileInvoiceDollar /> POS Invoice
                  </a>
                </li>
                <li className="hover:bg-primary2/20 hover:text-primary2 duration-300 transition-all text-xl font-semibold text-secondary">
                  <a className="flex gap-3 items-center">
                    <MdOutlineSettings /> Setting
                  </a>
                </li>
              </div>
              <button className="w-full text-center border text-xl py-2 border-secondary">
                Logout
              </button>
              {/*</div>*/}
            </ul>
          </div>
        </div>

        <button className="flex text-center py-2 px-2 text-nowrap gap-1 items-center  bg-primary2/20 text-primary2 w-full text-xl font-semibold rounded">
          <RiEditBoxLine /> Note
        </button>
        <button className="flex text-center py-2 px-2 text-nowrap gap-1 items-center  bg-primary2/20 text-primary2 w-full text-xl font-semibold rounded">
          <MdOutlineLocalShipping /> Shipping
        </button>
        <button className="flex text-center py-2 px-2 text-nowrap gap-1 items-center bg-primary2/20 text-primary2 w-full text-xl font-semibold rounded">
          <FaRegHandRock /> Hold Orders
        </button>
        <button className="flex text-center py-2 px-2 text-nowrap gap-1 items-center bg-primary2/20 text-primary2 w-full text-xl font-semibold rounded">
          <FaPlusCircle /> New Items
        </button>
      </div>

      {/* customers */}
      <div className="flex bg-primary2/20 py-3 px-2 text-primary2 font-semibold text-xl rounded items-center justify-between">
        <div>Steve Jobs</div>

        {/* Open the modal using document.getElementById('addCustomerForm').showModal() method */}
        <button
          className="border-4 border-primary2 rounded-full p-1"
          onClick={() => document.getElementById("addCustomerForm").showModal()}
        >
          <FaPlus />
        </button>

        <dialog
          id="addCustomerForm"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box !rounded relative  bg-white">
            <button
              className="absolute text-3xl text-black cursor-pointer z-20"
              onClick={() => document.getElementById("addCustomerForm").close()}
            >
              <BsChevronLeft />
            </button>

            <AddCustomerForm />
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>

      {/* orders */}
      <div className="w-full overflow-auto">
        {/* orders */}
        <div className="w-full overflow-auto">
          {orders?.products?.map((product) => (
            <div
              key={product.id}
              className="flex gap-2 items-center w-[30rem] md:w-full overflow-auto"
            >
              <button>
                <FiEdit className="text-secondary text-xl" />
              </button>
              <div className="text-secondary font-semibold text-xl justify-center items-center w-full grid grid-cols-5 border p-2">
                <div className="col-span-2">{product?.name}</div>
                <div className="text-start">${product?.price}</div>
                <div className="col-span-1 flex gap-4 items-center justify-center">
                  <FaPlusCircle />
                  <span>{product?.quantity}</span>
                  <FaMinusCircle />
                </div>
                <div className="text-end">{product?.total}</div>
              </div>
              {/* delete */}
              <button>
                <FaRegTrashCan className="text-red-500" />
              </button>
            </div>
          ))}
        </div>
        {/* total price details */}
        <div className="flex">
          <div className="flex-1"></div>
          <div className="flex-1 flex divide-y-2 flex-col mt-8 font-medium">
            <div className="flex w-full justify-between p-2 border-t-2">
              <span className="text-secondary">Subtotal</span>
              <span className="text-xl font-semibold">
                ${orders.totalPrice}
              </span>
            </div>
            <div className="flex w-full justify-between p-2">
              <span className="text-secondary">TAX</span>
              <span className="text-xl font-semibold">$25</span>
            </div>
            <div className="flex w-full justify-between p-2">
              <span className="text-secondary">Shipping</span>
              <span className="text-xl font-semibold">$5</span>
            </div>
            <div className="flex w-full justify-between p-2">
              <span className="text-primary font-semibold">
                Discount on orders
              </span>
              <span className="text-xl font-semibold">$10</span>
            </div>
          </div>
        </div>
        {/* total */}
        <div className="flex bg-primary/20 py-3 px-2 text-primary font-semibold rounded items-center">
          <div className="flex-1">
            Products Count({orders?.products?.length}){" "}
          </div>
          <div className="flex-1 flex item-center justify-between text-2xl">
            <div>Total</div>
            <div>${orders?.totalPrice + 25 + 5 + 10}</div>
          </div>
        </div>

        {/* checkout */}
        <div className="flex w-full justify-between gap-2 mt-2 overflow-auto">
          <button className="flex text-center py-4 px-4 gap-4 items-center text-nowrap bg-red-200 text-red-500 w-full text-xl font-semibold rounded">
            <MdOutlineCancel /> Cancel
          </button>
          <button className="flex text-center py-4 px-4 gap-4 items-center text-nowrap bg-primary2/20 text-primary2 w-full text-xl font-semibold rounded">
            <FaRegHandRock /> Hold
          </button>
          <button className="flex text-center py-4 px-4 gap-4 items-center text-nowrap bg-primary2/20 text-primary2 w-full text-xl font-semibold rounded">
            <FaPercent /> Discount
          </button>
          <button className="flex text-center py-4 px-4 gap-4 items-center text-nowrap bg-primary/20 text-primary w-full text-xl font-semibold rounded">
            <FaHandHoldingUsd />
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
