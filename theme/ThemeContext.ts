import { createContext } from "react";

export interface ThemeContextType {
    theme: string,
    toggleTheme: (value: string) => void
}

export const ThemeContext = createContext({
    theme: "dark",
    toggleTheme: (value: string) => {}
})