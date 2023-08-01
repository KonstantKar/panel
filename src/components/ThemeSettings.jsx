import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { Divider, Tooltip } from "@mui/material";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { themeColors } from "../data/dummy";

const ThemeSettings = () => {
  const {
    activeSettings,
    setActiveSettings,
    screenSize,
    setColor,
    setMode,
    currentMode,
    currentColor,
    setThemeSettings,
  } = useStateContext();
  //В случае маленького экрана после таба на раздел меню будет закрываться
  const handleCloseSettings = () => {
    if (activeSettings && screenSize <= 900) {
      setActiveSettings(false);
    }
  };
  return (
    <div
      className=" h-screen 
    md:overflow-hidden overflow-auto 
    md:hover:overflow-auto pb-10 "
    >
      {activeSettings && (
        <>
          <div
            className="flex justify-between
      items-center  bg-gray-100 dark:bg-main-dark-bg"
          >
            <p className="items-center gap-3 ml-6 mt-4 flex text-xl font-extrabold mb-4  dark:text-gray-200 ">
              Настройки
            </p>
            <Tooltip title="Закрыть" placement="bottom">
              <button
                type="button"
                onClick={handleCloseSettings}
                className="text-2xl mr-3  md:hidden"
              >
                <ImCancelCircle />
              </button>
            </Tooltip>
          </div>
          <Divider />
          <span className="items-center ml-6 mt-4 flex text-md font-bold dark:text-gray-200 ">
            Цвет темы
          </span>
          <div className="mt-4 ml-6 mb-3">
            <div className="flex flex-col">
              <div>
                <input
                  type="radio"
                  id="light"
                  name="theme"
                  value="Light"
                  className="cursor-pointer"
                  onChange={setMode}
                  checked={currentMode === "Light"}
                />
                <label
                  htmlFor="light"
                  className="cursor-pointer ml-2 text-md dark:text-gray-200"
                >
                  Light
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="radio"
                  id="dark"
                  name="theme"
                  value="Dark"
                  className="cursor-pointer"
                  onChange={setMode}
                  checked={currentMode === "Dark"}
                />
                <label
                  htmlFor="light"
                  className="cursor-pointer ml-2 text-md dark:text-gray-200"
                >
                  Dark
                </label>
              </div>
            </div>
          </div>
          <Divider />
          <span className="items-center ml-6 mt-4 flex text-md font-bold dark:text-gray-200 ">
            Цвет темы
          </span>
          <div className="flex gap-1">
            {themeColors.map((color, index) => (
              <Tooltip key={index} title={color.name} placement="top">
                <div className="relative mt-4 cursor-pointer flex gap-5 items-center ml-6">
                  <button
                    type="button"
                    className="h-7 w-7 rounded-full cursor--pointer"
                    style={{ backgroundColor: color.color }}
                    onClick={() => {
                      setColor(color.color);
                    }}
                  >
                    <BsCheckLg
                      className={`text-2xl text-white ${
                        color.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </Tooltip>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSettings;
