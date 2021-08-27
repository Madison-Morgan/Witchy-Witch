import React from "react";
import Player from "./components/Player";
import Enemy from "./components/Enemy";
import Background from "./components/background/Background";

export default function App() {

  
  return (
    <div className="zone-container">
      <Player 
          sprite={'/sprites/witch/'} 
          initialPosition={{x:300,y:300}}/>
          <Background />
        {/* <Enemy
            color={'Red'}
            initialPosition={{x:0,y:0}}/> */}
    </div>
  );
}

