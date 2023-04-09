import { IGameContext } from "@/components/interfaces";
import React from "react";
import { useContext } from "react";

function useGameContext() {

    const GameContext = React.createContext<IGameContext>(null);
    
    const context = useContext(GameContext);
    if (context === undefined) {
      throw new Error("useGameContext must be used within a GameContextProvider");
    }
    return context;
}

export { useGameContext };