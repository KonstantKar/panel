import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Tooltip } from "@mui/material";
import { FiSettings } from "react-icons/fi";
//Мы можем импортировать в одну строку благодаря index.jsx в файле "./components";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Customers,
  Line,
} from "./pages";
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
      <div className="bg-white dark:bg-main-dark-bg">
        <BrowserRouter>
          <>
            <div className="flex relative dark:bg-main-dark-bg">
              <div
                className="fixed right-4 bottom-4"
                style={{ zIndex: "1000" }}
              >
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
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg w-full">
                  <Navbar />
                </div>
                <div>
                  <Routes>
                    <Route path="/ecommerce" element={<Ecommerce />} />
                    {/*Pages*/}
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/customers" element={<Customers />} />
                    {/*Apps*/}
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/editor" element={<Editor />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/colpicker" element={<ColorPicker />} />
                    {/*Charts*/}
                    <Route path="/line" element={<Line />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/financial" element={<Financial />} />
                    <Route path="/colMapping" element={<ColorMapping />} />
                    <Route path="/stacked" element={<Stacked />} />
                    <Route path="/pyramid" element={<Pyramid />} />
                  </Routes>
                </div>
              </div>
            </div>
          </>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
