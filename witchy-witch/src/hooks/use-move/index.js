import { useState, useEffect } from "react";

export default function useMove(maxSteps) {
    const [position, setPosition] = useState({ x: 500, y: 500 });
    const [dir, setDir] = useState(0);
    const [step, setStep] = useState({ x: 0, y: 0 });
    const [motion, setMotion] = useState("stand"); //stand, jump, run, down

    const directions = { //in terms of y/height component
        right: 0,
        left: 8,
    };

    const movement = {
        "stand":0, 
        "jump":1,
        "run":2, 
        "down":3,
    };

    const animation = { // in terms of x/width component
        0: {
            "stand": 0,
            "jump": 0,
            "run": 1,
            "down": 2,
        },
        8: {
            "stand": 1,
            "jump": 1,
            "run": 0,
            "down": 2,
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

            if () {
                setStep(prev => {
                    const x = animation[dir]["stand"];
                    const y = prev.y < (maxSteps + dir) - 1 ? prev.y + 1 : (0 + dir);
                    return { x, y };
                });
            }
            else if () {
                move(dir);
                setStep(prev => {
                    const x = prev.x < steps - 1 ? prev.x + 1 : 0;
                    const y = animation[newDirection][dir];
                    return { x, y };
                });
            }
        }, 125);
        return () => {
            window.clearInterval(timer);
        };
    }, [step]);


    function walk(dir) { //animate the walking
        let newDirection = directions[dir];
        setDir(prev => {
            if (newDirection === prev) {
                move(dir);
                setMotion
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
        walk, jump, dir, step, position,
    }
}