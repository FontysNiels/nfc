import { createContext } from "react";

export const ActionsContext = createContext(
    {
        scan: null,
        setActions:()=>{}
    }
);