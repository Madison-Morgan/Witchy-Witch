import React from "react";
import Actor from "../actor";
import useMove from "../../hooks/use-move";
import useKeyPress from "../../hooks/use-key-press";



export default function Enemy({ color, initialPosition }) {
    const frameSize = { h: 32, w: 32 };
    const spritePath = "/sprites/enemy/" + color + "/";

    //return the direction of motion, step in animation, motion (idle, run, jump, down), 
    //position x-y coord on screen
    const { dir, walk, step, motion, position } = useMove(frameSize, initialPosition, spritePath);



    useKeyPress((e) => {
        walk('right');
        e.preventDefault();
    })



    return (
        <Actor
            sprite={spritePath + motion}
            data={frameSize}
            step={step}
            dir={dir}
            position={position} />

    );
}