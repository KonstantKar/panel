import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Tooltip } from "@mui/material";
import { FiSettings } from "react-icons/fi";
//Мы можем импортировать в одну строку благодаря index.jsx в файле "./components";
import { Navbar, Sidebar, ThemeSettings } from "./components";
import { Ecommerce, Orders, Profile } from "./pages";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    activeMenu,
    activeSettings,
    setActiveSettings,
    currentColor,
    currentMode,
  } = useStateContext();
  const handleCloseSettings = () => {
    setActiveSettings(!activeSettings);
  };

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <Tooltip title="Настройки">
                <button
                  type="button"
                  className="text-4xl p-3 
              hover:drop-shadow-xl
             hover:bg-light-gray
             text-white "
                  // style нужен для динамического изменения фона
                  style={{ background: currentColor, borderRadius: "50%" }}
                  onClick={handleCloseSettings}
                >
                  <FiSettings />
                </button>
              </Tooltip>
            </div>
            {activeMenu ? (
              <div
                className="w-72 fixed sidebar
            dark:bg-secondary-dark-bg
            bg-white"
              >
                <Sidebar />
              </div>
            ) : (
              <div
                className="w-0
          dark:bg-secondary-dark-bg
          "
              ></div>
            )}
            <div
              className={`dark:bg-main-dark-bg bg-main-bg  w-full ${
                activeMenu ? " md:ml-72" : " flex-2"
              }`}
            >
              {activeSettings ? (
                <div
                  className="w-72 fixed sidebar
            dark:bg-secondary-dark-bg
            bg-white right-0 z-20"
                >
                  <ThemeSettings />
                </div>
              ) : (
                <div
                  className="w-0
          dark:bg-secondary-dark-bg
          "
                ></div>
              )}
              <div>
                <Navbar />
              </div>
              <div className="bg-white dark:bg-main-dark-bg">
                <Routes>
                  <Route path="/ecommerce" element={<Ecommerce />} />
                  {/*Pages*/}
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div>
            </div>
          </div>
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
