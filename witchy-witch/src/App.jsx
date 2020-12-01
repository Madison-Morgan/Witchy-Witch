import React from "react";
import Player from "./components/player";
import Enemy from "./components/enemy";

export default function App() {

  
  return (
    <div className="zone-container">
      {/* <Player 
          sprite={'/sprites/witch/idle'+'.png'} 
          initialPosition={{x:0,y:0}}/> */}
        <Enemy
            color={'Red'}
            initialPosition={{x:50,y:50}}/>
    </div>
  );
}

