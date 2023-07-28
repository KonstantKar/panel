import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Avatar, Tooltip } from "@mui/material";
import { Cart, Chat, Notification, UserProfile } from "../components";

const NavButton = ({ title, customFunc, icon, color }) => (
  <Tooltip title={title}>
    <button
      type="button"
      onClick={customFunc}
      style={{ color: color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      {icon}
    </button>
  </Tooltip>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick } =
    useStateContext();
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Меню"
        customFunc={() => setActiveMenu(!activeMenu)}
        color="blue"
        icon={<RxHamburgerMenu />}
      ></NavButton>
      <div className="flex">
        <NavButton
          title="Корзина"
          customFunc={() => {
            handleClick("cart");
          }}
          color="blue"
          icon={<BsCart3 />}
        ></NavButton>
        <NavButton
          title="Уведомления"
          customFunc={() => {
            handleClick("notifications");
          }}
          color="blue"
          icon={<RiNotification3Line />}
        ></NavButton>
        <NavButton
          title="Сообщения"
          customFunc={() => {
            handleClick("chat");
          }}
          color="blue"
          icon={<BsChatLeft />}
        ></NavButton>
        <Tooltip
          title="Профиль"
          onClick={() => {
            handleClick("userProfile");
          }}
          className="flex items-center"
        >
          <Avatar
            src="https://sun9-80.userapi.com/impf/c840526/v840526838/32c4/hTfHgWz5IKA.jpg?size=517x720&quality=96&sign=f37b45db94579008153c26d3c6463689&type=album"
            sx={{ marginLeft: "1rem" }}
          />
          <p className="text-gray-400 text-14 font-bold ml-4 "> Привет,</p>
          <p className="text-gray-600 text-14 font-bold">
            я Константин Караманов!
          </p>
          <MdKeyboardArrowDown className="text-gray-600 text-14 font-bold" />
        </Tooltip>
        {/* Отображаем те или иные окна в зависимости от значения передаваемого в контексте */}
        {isClicked.card && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
