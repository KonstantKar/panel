import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Stacked, GoPencil, Button, SparkLine, AreaChart } from "../components";
import { earningData, sparkLineData, ecomPieChartData } from "../data/dummy";
import BG from "../data/welcome-bg.svg";
import { Divider } from "@mui/material";

const Ecommerce = () => {
  return (
    // Начало доходов и 4 карточек
    <div className="mt-24 ">
      <div className="flex flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center ">
          <div className="flex flex-col justify-between items-center mb-10 ">
            <div>
              <p className="font-bold text-gray-400">Доходы</p>
              <p className="text-2xl">100.000 рублей</p>
            </div>
            <div className="mt-6">
              <Button
                color="white"
                bgColor="blue"
                text="Загрузить"
                borderRadius="10px"
                size="md"
              ></Button>
            </div>
          </div>
          {/*Информация на карточках*/}
          <div className="flex m-3 flex-wrap justify-center gap-4 items-center">
            {earningData.map((card) => (
              <div
                key={card.title}
                className="bg-white dark:text-gray-200
               dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl ;"
              >
                <button
                  type="button"
                  style={{
                    color: card.iconColor,
                    backgroundColor: card.iconBg,
                  }}
                  className="text-2xl opacity-1 rounded-full p-4 hover:drop-shadow-xl"
                >
                  {card.icon}
                </button>
                <p className="mt-3 text-gray-400">{card.title}</p>
                <p className="mt-3"></p>
                <span className="text-lg font-semibold">
                  {card.amount} рублей
                </span>
                <span className={`ml-2 text-sm text-${card.pcColor} ml-2`}>
                  {card.percentage}
                </span>
              </div>
            ))}
          </div>
          {/*Начало отдела с ростом выручки*/}
          <div className="flex gap-10 flex-wrap justify-center">
            <div className="bg-white dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl  ">
              <div className="flex flex-col">
                <p className="font-semibold text-xl flex gap-2">
                  Рост доходов <AiOutlineArrowUp color="green" />
                </p>
                <AreaChart />
              </div>
            </div>
            <div className="bg-white dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl  ">
              <div className="flex flex-col">
                <p className="font-semibold text-xl flex gap-2">
                  Рост доходов <AiOutlineArrowUp color="green" />
                </p>
                <AreaChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
