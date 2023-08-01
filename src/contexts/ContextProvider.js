import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeSettings, setActiveSettings] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };

  const setColor = (mode) => {
    setCurrentColor(mode);
    localStorage.setItem("colorMode", mode);
  };

  //В зависимости от того, на что кликаешь, состояние того свойства и меняется
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const handleClickOff = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: false });
  };

  return (
    <StateContext.Provider
      value={{
        setActiveMenu,
        setIsClicked,
        handleClick,
        setScreenSize,
        setActiveSettings,
        setColor,
        setMode,
        handleClickOff,
        activeMenu,
        isClicked,
        screenSize,
        activeSettings,
        currentMode,
        currentColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

//Хук, который позволяет доставать значение activeMenu из контекста
export const useStateContext = () => useContext(StateContext);
