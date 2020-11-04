import { useState, useEffect } from "react";
import directions from "../use-walk/index";

export default function useStand(dir, maxSteps) {
    const [stand, setStand] = useState(0);
    const offset = directions[dir] === directions["right"] ? 0 : 8;

    useEffect(() => {
        const timer = window.setInterval(() => {
            setStand(prev => {
                return prev < (maxSteps+offset) - 1 ? prev + 1 : (0+offset);
            });
        }, 7500);
        return () => {
            window.clearInterval(timer);
        };
    }, []);

    return {
        stand,
    }

}