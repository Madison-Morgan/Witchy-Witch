import { useState, useEffect } from "react";

export default function useMove(frameSize, initialPosition, sprite) {
    const [position, setPosition] = useState(initialPosition); //({ x: 50, y: 50 });
    const [dir, setDir] = useState(0);
    const [step, setStep] = useState({ x: 0, y: 0 });
    const [motion, setMotion] = useState("Idle"); //Idle, Jump, Run

    const stepSize = 10;
    const modifier = {
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
    }
    const directions = {
        "right": 0,
        "left": 1
    }


    function walk(direction, steps){
        setDir(directions[direction]);
        setMotion("Run");
        move(direction);
        var MAX_STEPS = determineAnimation();
        
        setStep(prev => {
            const x = prev.x < (MAX_STEPS  - 1) ? prev.x + 1 :0;
            const y = dir
            return { x, y };
        });
        
    }


    function move(key) {
        setPosition(prev => ({
            x: prev.x + modifier[key].x,
            y: prev.y + modifier[key].y,
        }));
    }


    function determineAnimation(){
        var img = new Image();
        img.src = sprite + motion + ".png";
        var steps = img.width / frameSize["w"];
        return steps;
    }

    return {
        dir, walk, step, motion, position
    }

}