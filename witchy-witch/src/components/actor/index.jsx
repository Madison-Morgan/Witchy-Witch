import React from "react";
import Sprite from "../sprites";

export default function Actor({ sprite, data, position={x:0, y:0}, step = 0, dir = 0 }) {
    const { h, w } = data;
    //console.log("Here is fir: "+(dir*w).toString());
    //console.log("Here is sec: "+(step*h).toString());
    //console.log("step : "+step.toString());
    return (
        <Sprite
            image={sprite}
            position = {position}
            data={{
                x: step.x * w,
                y: step.y * h,
                w,
                h
            }}
        />
    );
}