import { useState } from "react";

export default function useStand(dir){
    const [stand, setStand] = useState(0);
    const offset = dir===2 ? 0 : 8;
    
}