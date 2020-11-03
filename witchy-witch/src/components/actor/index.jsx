import React from "react";
import Sprite from "../sprites";

export default function Actor({ sprite, data, position={x:0, y:0}, step = 0, dir = 0 }) {
    const { h, w } = data;
    console.log("step"+step.toString());
    return (
        <Sprite
            image={sprite}
            position = {position}
            data={{
                x: dir * w,
                y: step * h,
                w,
                h
            }}
        />
    );
}