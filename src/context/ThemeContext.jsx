import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('ai-hub-theme');
        return saved ? saved === 'dark' : true;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('ai-hub-theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('ai-hub-theme', 'light');
        }
    }, [darkMode]);

    const toggleTheme = () => setDarkMode(prev => !prev);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
