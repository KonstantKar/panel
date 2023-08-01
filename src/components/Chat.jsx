import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { useStateContext } from "../contexts/ContextProvider";
import { Avatar, Divider } from "@mui/material";
import { chatData } from "../data/dummy";
const Chat = () => {
  const { currentColor, handleClickOff } = useStateContext();
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
      <div className="flex flex-col justify-between gap-2 ml-10">
        {chatData.map((user) => (
          <>
            <div className="flex ">
              <Avatar src={user.image} />
              <div className="flex flex-col justify-between gap-2">
                <span className="font-extrabold ml-2 text-xl dark:text-white">
                  {user.message}
                </span>
                <span className=" ml-2 dark:text-white">{user.desc}</span>
                <span className=" ml-2 dark:text-white">{user.time}</span>
              </div>
            </div>
            <Divider />
          </>
        ))}
      </div>
    </div>
  );
};

export default Chat;
