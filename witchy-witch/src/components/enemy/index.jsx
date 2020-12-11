import React from "react";
import { useEffect, useRef } from "react";
import Actor from "../actor";
import useMove from "../../hooks/use-move";
import useKeyPress from "../../hooks/use-key-press";



export default function Enemy({ color, initialPosition }) {
    const frameSize = { h: 32, w: 32 };
    const spritePath = "/sprites/enemy/" + color + "/";

    //return the direction of motion, step in animation, motion (idle, run, jump, down), 
    //position x-y coord on screen
    const { dir, walk, step, motion, position } = useMove(frameSize, initialPosition, spritePath);
    const count = useRef(5);



    useEffect(() => {
        
        const interval = setInterval(() => {
            if( count > 0 ){
                walk('right',10);
                count.current = count.current - 1;
            }
            else if( count > -5 ){
                walk('left',10);
                count.current = count.current - 1;
            }
            else{
                count.current = 5;
            }
            

        }, 100);

        return ()=>{
            clearInterval(interval);
        }
    }, [dir, walk, step, motion, position]);



    return (
        <Actor
            sprite={spritePath + motion}
            data={frameSize}
            step={step}
            dir={dir}
            position={position} />

    );
}