import React from "react";
import Actor from "./Actor";
import useKeyPress from "../hooks/use-key-press";
import useMove from "../hooks/use-move-player";

export default function Player({sprite, initialPosition}) {
  const frameSize = {h: 212, w: 160 };
  //return the direction of motion, step in animation, motion (idle, run, jump, down), 
  //position x-y coord on screen
  const { dir, step, walk, motion, position } = useMove(frameSize, initialPosition, sprite); //8 frames of animation
  

  useKeyPress((e) => {
    let keyPress = e.key.replace("Arrow", "").toLowerCase();
    walk(keyPress);
    e.preventDefault();
  })
  
  var extension;
  if(motion==="idle" || motion==="run"){
    extension = "all";
  }
  else{
    extension = motion;
  }

  return (
  <Actor 
    sprite={sprite+extension}
    data={frameSize} 
    step={step} 
    dir={dir} 
    position={position}
  />);
}