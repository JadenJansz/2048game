import { GameContext } from "@/components/Game/Game";
import { IGameContext } from "@/components/interfaces";
import React from "react";
import { useContext } from "react";

function useGameContext() {
    
    const context = useContext(GameContext);
    if (context === undefined) {
      throw new Error("useGameContext must be used within a GameContextProvider");
    }
    return context;
}

export { useGameContext };