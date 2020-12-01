import React from "react";
import Actor from "../actor";
import useMove from "../../hooks/use-move";



export default function Enemy({ color, initialPosition }) {
    const frameSize = { h: 32, w: 32 };
    const spritePath = "/enemy/" + color + "/";

    //return the direction of motion, step in animation, motion (idle, run, jump, down), 
    //position x-y coord on screen
    const { dir, walk, step, motion, position } = useMove(frameSize, initialPosition, color);



    setInterval(func => {
        for (var i = 0; i < 15; i++) {
            walk("right")
        }
    }, 15000);



    return (
        <Actor
            sprite={spritePath + motion}
            data={frameSize}
            step={step}
            dir={dir}
            position={position} />

    );
}