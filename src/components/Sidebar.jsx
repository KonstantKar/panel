import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogoGraphql } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { Tooltip } from "@mui/material";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { dark } from "@mui/material/styles/createPalette";
const Sidebar = () => {
  const { currentColor } = useStateContext();
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  //В случае маленького экрана после таба на раздел меню будет закрываться
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-4 pl-4 pt-3 pb-2.5 rounded-lg  text-md m-3  dark:text-gray-200";
  const normalLink =
    "flex items-center gap-4 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 hover:bg-light-gray  dark:text-gray-200 dark:hover:text-black";

  return (
    <div
      className="ml-3 h-screen 
    md:overflow-hidden overflow-auto 
    md:hover:overflow-auto pb-10"
    >
      {activeMenu && (
        <>
          <div
            className="flex justify-between
      items-center"
          >
            <Link
              to="/"
              onClick={() => {}}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold "
            >
              <BiLogoGraphql className="text-3xl  dark:text-gray-200" />
              <span className="dark:text-gray-200">Посчитай-КА!</span>
            </Link>
            <Tooltip title="Закрыть" placement="bottom">
              <button
                type="button"
                onClick={handleCloseSideBar}
                className="text-2xl mr-3 mt-4 md:hidden"
              >
                <ImCancelCircle />
              </button>
            </Tooltip>
          </div>
          <div className="mt-10 ml-3 ">
            {links.map((link) => (
              <div key={link.title}>
                <p className="text-gray-500 m-3 mt-4 uppercase  dark:text-gray-200">
                  {link.title}
                </p>
                {link.links.map((linkItem) => (
                  <NavLink
                    to={`/${linkItem.name}`}
                    key={linkItem.name}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    onClick={handleCloseSideBar}
                  >
                    {linkItem.icon}
                    <span>{linkItem.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
