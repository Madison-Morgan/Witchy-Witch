import React from "react";
import Sprite from "./Sprites";

export default function Actor({ sprite, data, position, step = 0, dir = 0 }) {
    const { h, w } = data;
    console.log("step: "+sprite.toString());

    return (
        <Sprite
            image={sprite+".png"}
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