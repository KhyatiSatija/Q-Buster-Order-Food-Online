import React, { useEffect, useRef } from "react";
import CafeCard from "./sub/CafeCard";
import FoodCard from "./sub/FoodCard";
import { cafes } from "./utils/data";

const OrderMenu = ({ cafe, shouldScrollToMenu, setShouldScrollToMenu }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (shouldScrollToMenu) {
      menuRef.current.scrollIntoView({ behavior: "smooth" });
      setShouldScrollToMenu(false);
    }
  }, [shouldScrollToMenu, setShouldScrollToMenu]);

  const selectedCafe = cafes.find((item) => item.name === cafe);

  if (!selectedCafe) {
    return <div></div>;
  }

  const { name, menu, color } = selectedCafe;

  return (
    <div ref={menuRef} id="menu" className="font-Poppins p-12">
      <CafeCard name={`${name} Order Menu`} color={`${color}`}>
        {menu.map((item, index) => (
          <FoodCard
            key={index}
            name={item.name}
            price={item.price}
            buttonColor={item.buttonColor}
            image={item.image}
          />
        ))}
      </CafeCard>
    </div>
  );
};

export default OrderMenu;
