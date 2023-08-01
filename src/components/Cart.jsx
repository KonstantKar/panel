import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { useStateContext } from "../contexts/ContextProvider";
import { Card, Divider } from "@mui/material";
import { cartData } from "../data/dummy";
const Cart = () => {
  const { handleClickOff } = useStateContext();
  return (
    <div className="absolute  md:right-108 mt-20 bg-main-bg dark:bg-main-dark-bg rounded-xl z-10 ">
      <div className=" flex justify-between text-xl font-extrabold lg:p-5 md:p-0">
        <p className="m-2 mr-40 dark:text-white">Сообщения</p>
        <button
          className="m-3 ml-5 rounded-xl text-gray-400"
          onClick={() => handleClickOff()}
        >
          <ImCancelCircle />
        </button>
      </div>
      <div className="flex flex-col justify-between gap-2 ml-10 ">
        {cartData.map((item) => (
          <>
            <div className="flex">
              <div className="w-40 dark:text-white ">
                <img src={item.image} />
              </div>
              <div className="flex flex-col ">
                <span className="font-extrabold ml-2 text-xl p-2 dark:text-white">
                  {item.name}
                </span>
                <span className=" ml-4 dark:text-white">{item.category}</span>
                <span className="font-extrabold ml-4 dark:text-white">
                  {item.price}
                </span>
              </div>
            </div>
            <Divider />
          </>
        ))}
      </div>
    </div>
  );
};

export default Cart;
