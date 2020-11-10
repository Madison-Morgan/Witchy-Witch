import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useMove from "../../hooks/use-move";

export default function Player() {
  const MAX_STEPS = 8;
  var keyPress="default";
  var data; 
  const { dir, step, walk, jump, position } = useMove(MAX_STEPS); //8 frames of animation
  

  useKeyPress((e) => {
    keyPress = e.key.replace("Arrow", "").toLowerCase();
    console.log(keyPress);
    if(keyPress==="up"){
      jump(keyPress);
    }
    else{
      walk(keyPress);
    }
    e.preventDefault();
  })

  
  if(!(keyPress==="up")){
    keyPress="idle";
    data = {
      h: 212,
      w: 160,
    };
  }
  else{
    data = {
      h:479,
      w:360,
    };
  }

  
  return (
  <Actor 
    sprite={'/sprites/witch/'+keyPress+'.png'} 
    data={data} 
    step={step} 
    dir={dir} 
    position={position}
  />);
}