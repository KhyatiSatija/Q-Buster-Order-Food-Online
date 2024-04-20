import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import OrderMenu from "./OrderMenu";

const Colorchange = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const [textColor, setTextColor] = useState("text-primary-beige");
  const [cafe, setCafe] = useState("Southern Stories");
  const [bgColor, setBgColor] = useState("bg-primary-beige");
  const [rotation, setRotation] = useState("rotate-[0deg]");
  const colors = [
    "primary-beige",
    "primary-green",
    "primary-blue",
    "primary-red",
    "primary-orange",
  ];
  const cafes = ["Southern Stories", "Quench","Cafe One", "Nestle Hotspot", "Urban Kitchen"];
  const photos = [
    "./assets/south.png",
    "./assets/salad.png",
    "./assets/mexican.png",
    "./assets/Italian.png",
    "./assets/nonveg.png",
  ];
  const [photo, setPhoto] = useState("./assets/south.png");
  const [menuVisible, setMenuVisible] = useState(false);
  const [shouldScrollToMenu, setShouldScrollToMenu] = useState(false);
  const [cartCount,setCartCount] = useState(0);

const handleClick = (direction) => {
  let nextIndex;
  let newRotation;
  if (direction === "clockwise") {
    nextIndex = (colorIndex + 1) % colors.length;
    newRotation = `${22.5 * (nextIndex)*2}deg`;
  } else {
    nextIndex = (colorIndex - 1 + colors.length) % colors.length;
    newRotation = `${22.5 * (nextIndex)*2}deg`;
  }

  const newTextColor = `text-${colors[nextIndex]}`;
  const newBgColor = `bg-${colors[nextIndex]}`;

  setColorIndex(nextIndex);
  setTextColor(newTextColor);
  setBgColor(newBgColor);
  setRotation(newRotation);
  setCafe(cafes[nextIndex]);
  setPhoto(photos[nextIndex]);
};

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setShouldScrollToMenu(!menuVisible);
  };

  return (
    <div className="overflow-hidden">
      <nav className="mt-4 flex justify-between items-center w-[80%] mx-auto">
        <div className="flex justify-between items-center gap-4">
          <img
            src="/assets/logo.png"
            className="w-12 border-2 border-red-900 rounded-2xl"
            alt="Logo"
          />
          <div className="font-Poppins font-semibold text-2xl text-center">
            Q-Buster
          </div>
        </div>
        <div className="w-[50%] ml-36">
          <Input
            isClearable
            radius="lg"
            classNames={{
              label: "text-black/50",
              input: [
                "bg-transparent",
                "text-center",
                "text-black/90",
                "placeholder:text-default-700/50",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "group-data-[focused=true]:bg-default-200/50",
                "!cursor-text",
              ],
            }}
            placeholder="Search your favorite food"
            startContent={
              <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-secondary pointer-events-none flex-shrink-0" />
            }
          />
        </div>

        <div className="flex pl-10 justify-between align-center gap-8 text-2xl cursor-pointer">
          <div className="hover:bg-white rounded-full p-2 pr-3 pl-3">
            {cartCount !== 0 && (
              <div className="absolute top-9 right-80 text-xs font-bold flex items-center justify-center w-5 h-5 rounded-full bg-white">
                {cartCount}
              </div>
            )}
            <i className="ri-shopping-cart-2-line hover:[transition-all]"></i>
          </div>

          <div className="hover:bg-white rounded-full p-2 pr-3 pl-3">
            <i className="ri-notification-2-line"></i>
          </div>
          <div className="hover:bg-white rounded-full p-2 pr-3 pl-3">
            <i className=" border-2 border-black rounded-full ri-user-line"></i>
          </div>
        </div>
      </nav>
      <div className="main-container flex">
        <div className="left w-[50%] h-screen flex justify-center items-center">
          <div className="text-container w-[70%] font-Poppins">
            <div className={`${textColor} text-7xl font-semibold`}>
              Delicious.
            </div>
            <div className="text-secondary text-4xl pt-4 pb-12 font-medium">
              One Stop Destination
            </div>
            <div className="text-black text-lg">
              Beat the Queue: Get a wait time & unique token - track your order
              live & plan your time
            </div>
            <div className="w-fit flex flex-center flex-col items-center">
              <div className="pt-16 text-3xl font-medium italic pb-7 w-fit">
                " Wait Less, Eat Fresh "
              </div>
              <Button
                onClick={toggleMenu}
                className={`${bgColor} rounded-full px-16 text-black font-medium w-fit`}
                variant="shadow"
              >
                Order Now!
              </Button>
            </div>
          </div>
        </div>

        <div className="right w-[50%]">
          <div
            className={`${bgColor} w-[75%] h-[150%] rounded-full absolute -top-[75%] -right-[10%] -z-20 flex flex-end items-end overflow-hidden`}
          >
            <img
              src="./assets/wheel2.svg"
              alt="Food"
              className={`w-[100%] relative  transition-transform transform top-[45%] -right-[01%] duration-500 object-cover`}
              style={{ transform: `rotate(${rotation})` }}
            />
          </div>
          <div className="h-fit w-fit relative top-[50%] -right-[32%]">
            <img src={photo} alt="Food" />
          </div>

          <div className="ml-12 mt-[51%] text-center mr-[24vh] flex justify-center items-center w-[80%]">
            <img
              onClick={() => {
                handleClick("anti-clockwise");
                setMenuVisible(false);
              }}
              src="./assets/spoon.png"
              alt="Spoon"
              className="-mr-2 drop-shadow-lg cursor-pointer hover:rotate-12 transition-transform duration-300"
            />
            <div
              className={`${bgColor} shadow-black shadow-2xl pt-2 pb-2 pl-28 pr-28 rounded-full h-fit z-10`}
            >
              {cafe}
            </div>
            <img
              onClick={() => {
                handleClick("clockwise");
                setMenuVisible(false);
              }}
              src="./assets/spoon-2.png"
              alt="Spoon 2"
              className="-ml-2 drop-shadow-lg cursor-pointer hover:rotate-12 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      {menuVisible && (
        <OrderMenu
          cafe={cafe}
          shouldScrollToMenu={shouldScrollToMenu}
          setShouldScrollToMenu={setShouldScrollToMenu}
        />
      )}
    </div>
  );
};

export default Colorchange;
