import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";

export default function Player() {
  const { dir, step, walk, position } = useWalk(3);
  const data = {
    h: 274,
    w: 214,
  };

  

  useKeyPress((e) => {
    walk(e.key.replace("Arrow", "").toLowerCase());
    e.preventDefault();
  })

  return (
  <Actor 
    sprite={'/witch_stand.png'} 
    data={data} 
    steps={step} 
    dir={dir} 
    position={position}
  />);
}