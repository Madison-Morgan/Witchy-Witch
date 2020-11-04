import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";

export default function Player() {
  const MAX_STEPS = 8;
  const { dir, step, walk, position } = useWalk(MAX_STEPS); //8 frames of animation
  const data = {
    h: 212,
    w: 160,
  };

  useKeyPress((e) => {
    walk(e.key.replace("Arrow", "").toLowerCase());
    e.preventDefault();
  })

  return (
  <Actor 
    sprite={'/witch_sprite_sheet.png'} 
    data={data} 
    step={step} 
    dir={dir} 
    position={position}
  />);
}