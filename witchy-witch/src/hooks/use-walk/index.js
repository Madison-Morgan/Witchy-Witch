import { useState } from "react";

export default function useWalk(maxSteps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dir, setDir] = useState(0);
    const [step, setStep] = useState(0);

    
    const directions = {
        right: 1,
        left: 0,
        down: 2,
        up: 3,
    };
    const stepSize = 16;
    

    const modifier = {
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize },
    }

    function walk(dir) {
        setDir(prev => {
            if(directions[dir] === prev){
                move(dir);
            }
            return directions[dir];
        });
        setStep(prev => {
            const offset = directions[dir]===directions["right"] ? 0 : 8;
            return prev < (maxSteps+offset) - 1 ? prev + 1 : (0+offset);
        });
    }

    function move(dir){
        setPosition(prev => ({
            x: prev.x + modifier[dir].x,
            y: prev.y + modifier[dir].y,
        }));
    }

    return {
        walk, dir, step, position,
    }
}