import React, { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Avatar, Tooltip } from "@mui/material";
import { Cart, Chat, Notification, UserProfile } from "../components";
import { useNavigate } from "react-router-dom";

const NavButton = ({ title, customFunc, icon, color }) => (
  <Tooltip title={title}>
    <button
      type="button"
      onClick={customFunc}
      style={{ color: color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-secondary-dark-bg"
    >
      {icon}
    </button>
  </Tooltip>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    setActiveSettings,
    currentColor,
  } = useStateContext();

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1400) {
      setActiveMenu(false);
      setActiveSettings(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Меню"
        customFunc={() => setActiveMenu(!activeMenu)}
        color={currentColor}
        icon={<RxHamburgerMenu />}
      ></NavButton>
      <div className="flex">
        <NavButton
          title="Корзина"
          customFunc={() => {
            handleClick("cart");
          }}
          color={currentColor}
          icon={<BsCart3 />}
        ></NavButton>
        <NavButton
          title="Уведомления"
          customFunc={() => {
            handleClick("notification");
          }}
          color={currentColor}
          icon={<RiNotification3Line />}
        ></NavButton>
        <NavButton
          title="Сообщения"
          customFunc={() => {
            handleClick("chat");
          }}
          color={currentColor}
          icon={<BsChatLeft />}
        ></NavButton>
        <Tooltip
          title="Профиль"
          onClick={() => {
            navigate("/profile");
          }}
          className="flex items-center"
        >
          <Avatar
            src="https://sun9-80.userapi.com/impf/c840526/v840526838/32c4/hTfHgWz5IKA.jpg?size=517x720&quality=96&sign=f37b45db94579008153c26d3c6463689&type=album"
            sx={{ marginLeft: "1rem" }}
          />
          <p className="text-gray-400 text-14 font-bold ml-4 "> Привет,</p>
          <p className="text-gray-600 text-14 font-bold  dark:text-gray-200">
            я Константин Караманов!
          </p>
          <MdKeyboardArrowDown className="text-gray-600 text-14 font-bold" />
        </Tooltip>
        {/* Отображаем те или иные окна в зависимости от значения передаваемого в контексте */}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
