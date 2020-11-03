import React from "react";

export default function Sprite({image, data}){
    console.log(data);
    const { x,
         y, 
         w, 
         h } = data;
    console.log(y);
    return( <div
    style={
        {
           display: "block",
           height:  `${h}px`,
           width: `${w}px`,
           backgroundImage: 'url(' + image + ')',
           backgroundRepeat: "no-repeat",
           backgroundPosition: `-${x}px -${y}px`,
        }
    } 
    
    />
    );
}