import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Tooltip } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { FiSettings } from "react-icons/fi";

function App() {
  const activeMenu = false;
  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <Tooltip title="Настройки">
            <button
              type="button"
              className="text-4xl p-3 
              hover:drop-shadow-xl
             hover:bg-light-gray
             text-white"
              // style нужен для динамического изменения фона
              style={{ background: "blue", borderRadius: "50%" }}
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
            Sidebar
          </div>
        ) : (
          <div
            className="w-0
          dark:bg-secondary-dark-bg
          "
          ></div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg  min-h-screen w-full ${
            activeMenu ? " md:ml-72" : " flex-2"
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            Navbar
          </div>
        </div>

        <div>
          <Routes>
            {/*Dashboard*/}
            <Route path="/ " element="Commerce" />
            <Route path="/commerce " element="Commerce" />
            {/*Pages*/}
            <Route path="/orders " element="Orders" />
            <Route path="/employees " element="Employees" />
            <Route path="/customers " element="Customers" />
            {/*Apps*/}
            <Route path="/kanban " element="Kanban" />
            <Route path="/editor " element="Editor" />
            <Route path="/calendar " element="Calendar" />
            <Route path="/colpicker " element="Colpicker" />
            {/*Charts*/}
            <Route path="/line" element="Line" />
            <Route path="/area " element="Area" />
            <Route path="/bar " element="Bar" />
            <Route path="/pie " element="Pie" />
            <Route path="/financial " element="Financial" />
            <Route path="/colMapping " element="Colmapping" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
