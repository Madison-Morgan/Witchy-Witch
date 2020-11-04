import { useState, useEffect } from "react";

export default function useWalk(maxSteps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dir, setDir] = useState(0);
    const [step, setStep] = useState(0);

    const directions = {
        right: 0,
        left: 1,
        /* up: 16,
        down: 24, */
    };
    const stepSize = 20;

    const modifier = {
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize },
    }

    console.log("dir"+dir.toString());
    useEffect(() => {
        const timer = window.setInterval(() => {
            setStep(prev => {
                const offset = dir===directions["right"] ? 0 : 8;
                console.log("Offset: "+dir.toString());

                return prev < (maxSteps+offset) - 1 ? prev + 1 : (0+offset);
            });
        }, 125);
        return () => {
            window.clearInterval(timer);
        };
    }, [step]);

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