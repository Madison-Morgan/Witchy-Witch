import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useMove from "../../hooks/use-move";

export default function Player() {
  const MAX_STEPS = 8;
  var extension="default";
  var data; 
  const { dir, step, walk, motion, position } = useMove(MAX_STEPS); //8 frames of animation
  

  useKeyPress((e) => {
    let keyPress = e.key.replace("Arrow", "").toLowerCase();
    console.log(keyPress);
    walk(keyPress);
    e.preventDefault();
  })

  
  if(!(motion==="jump")){
    extension="idle";
    data = {
      h: 212,
      w: 160,
    };
  }
  else{
    extension="up"
    data = {
      h:360,
      w:479,
    };
  }
  
  return (
  <Actor 
    sprite={'/sprites/witch/'+extension+'.png'} 
    data={data} 
    step={step} 
    dir={dir} 
    position={position}
  />);
}