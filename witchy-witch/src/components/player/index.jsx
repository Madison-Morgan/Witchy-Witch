import React from "react";
import Actor from "../actor";

export default function Player(){
    const data = {
        h: 274,
        w: 214,
      };
    return <Actor sprite={'/witch_stand.png'} data={data} />
}