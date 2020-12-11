import { useState, useEffect } from "react";

export default function useMove(frameSize, initialPosition, sprite) {
    const [position, setPosition] = useState(initialPosition); //({ x: 50, y: 50 });
    const [dir, setDir] = useState(0);
    const [step, setStep] = useState({ x: 0, y: 0 });
    const [motion, setMotion] = useState("idle"); //idle, jump, run
    const MAX_STEPS ={
        "idle" : 8,
        "jump": 24,
        "run" : 8,
    };

    const directions = { //in terms of y/height component
        right: 0,
        left: 8,
    };

    const animation = { // in terms of x/width component
        0: {
            "idle": 0,
            "jump": 0,
            "run": 1,
        },
        8: {
            "idle": 1,
            "jump": 1,
            "run": 0,
        },

    };

    const stepSize = 20;

    const modifier = {
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
    }

    useEffect(() => { //animate the idleing 
        const timer = window.setInterval(() => {
            console.log(motion);
            if (motion === "idle") {
                setStep(prev => {
                    const x = animation[dir]["idle"];
                    const y = prev.y < (MAX_STEPS[motion] + dir) - 1 ? prev.y + 1 : (0 + dir);
                    return { x, y };
                });
            }
            // else if (motion === "jump") {
            //     jump();
            //     setStep(prev => {
            //         let x;
            //         if (prev.x < steps) {
            //             x = prev.x + 1;
            //         }
            //         else {
            //             x = 0;
            //             setMotion("idle");
            //         }
            //         const y = animation[dir]["jump"];
            //         return { x, y };
            //     });
            // }
        }, 125);
        return () => {
            window.clearInterval(timer);
        };
    }, [step]);


    function walk(key) { //animate the running, jumping
        if (key === "right" || key === "left") {
            let newDirection = directions[key];
            setDir(prev => {
                if (newDirection === prev) {
                    move(key);
                    setMotion("run");
                }
                else {
                    setMotion("idle");
                }

                return newDirection;
            });
            if (motion === "run") {
                setStep(prev => {
                    const x = animation[newDirection]["run"];
                    const y = prev.y < (MAX_STEPS[motion] + newDirection) - 1 ? prev.y + 1 : (0 + newDirection);
                    return { x, y };
                });
            }
        }
        else if (key === "up") {
            setMotion("jump");
        }


    }


    function move(key) {
        setPosition(prev => ({
            x: prev.x + modifier[key].x,
            y: prev.y + modifier[key].y,
        }));
    }

    function jump() {
        let multiplier = dir === directions["right"] ? 1 : -1;
        setPosition(prev => {
            const x = prev.x + stepSize * multiplier;
            let modY = step < 12 ? -stepSize : stepSize;
            const y = prev.y + modY;
            return { x, y };
        });

    }


    return {
        dir, step, walk, motion, position
    }
}