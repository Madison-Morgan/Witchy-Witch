import React from "react";
import Sprite from "../sprites";

export default function Actor({ sprite, data, position, step = 0, dir = 0 }) {
    const { h, w } = data;
    console.log("h: "+h.toString());
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