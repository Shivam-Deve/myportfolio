import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false)
    const toggle = () => {
        setDark(prev => !prev)
    }
    return (
        <ThemeContext.Provider value={{ dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}
const useThemeContext = () => useContext(ThemeContext);
export default useThemeContext;
