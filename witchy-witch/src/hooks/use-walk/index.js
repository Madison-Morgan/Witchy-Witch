import { useState, useEffect } from "react";

export default function useWalk(maxSteps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dir, setDir] = useState(0);
    const [step, setStep] = useState({ x: 0, y: 0 });

    const directions = { //in terms of y/height component
        right: 0,
        left: 8,
        /* up: 16,
        down: 24, */
    };

    const animation = { // in terms of x/width component
        0: {
            "stand": 0,
            "run": 1,
        },
        8: {
            "stand": 1,
            "run": 0,
        },
    };

    const stepSize = 20;

    const modifier = {
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize },
    }

    useEffect(() => { //animate the standing
        const timer = window.setInterval(() => {
            setStep(prev => {
                const x = animation[dir]["stand"];
                const y = prev.y < (maxSteps + dir) - 1 ? prev.y + 1 : (0 + dir);
                return { x, y };
            });
        }, 125);
        return () => {
            window.clearInterval(timer);
        };
    }, [step]);


    function walk(dir) { //animate the walking
        let isStanding = false;
        let newDirection = directions[dir];
        setDir(prev => {
            if (newDirection === prev) {
                move(dir);
            }
            else {
                isStanding = true;
            }
            return newDirection;
        });
        if (!isStanding) {
            //console.log("INEEHEHHE");
            setStep(prev => {
                const x = animation[newDirection]["run"];
                const y = prev.y < (maxSteps + newDirection) - 1 ? prev.y + 1 : (0 + newDirection);
                return { x, y };
            });
        }
    }


    function move(dir) {
        setPosition(prev => ({
            x: prev.x + modifier[dir].x,
            y: prev.y + modifier[dir].y,
        }));
    }


    return {
        walk, dir, step, position,
    }
}