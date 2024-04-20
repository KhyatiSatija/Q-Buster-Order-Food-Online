import React from "react";
import "./Switch.css"
import cx from "classnames";
import { constSelector } from "recoil";
const Switch =({rounded=false, isToggled, onToggled}) =>{

    const sliderCX=cx('slider', {
        'rounded':rounded
    });

    return( <label className="switch">
         <input type="checkbox" checked={isToggled} onchange={onToggled}/>
         <span className={sliderCX}/>
        </label>
    );
};
export default Switch;