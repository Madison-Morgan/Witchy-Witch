import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useMove from "../../hooks/use-move";

export default function Player({sprite, initialPosition}) {
  const frameSize = {h: 212, w: 160 };
  //return the direction of motion, step in animation, motion (idle, run, jump, down), 
  //position x-y coord on screen
  const { dir, step, walk, motion, position } = useMove(frameSize, initialPosition); //8 frames of animation
  

  useKeyPress((e) => {
    let keyPress = e.key.replace("Arrow", "").toLowerCase();
    walk(keyPress);
    e.preventDefault();
  })
  
  return (
  <Actor 
    sprite={sprite}
    data={frameSize} 
    step={step} 
    dir={dir} 
    position={position}
  />);
}