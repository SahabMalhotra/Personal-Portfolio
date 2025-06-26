import { useEffect, useState } from "react";
import{Sun} from "lucide-react";
import { Moon } from "lucide-react";


export const ThemeToggle = () => {
const[isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme=== "dark") {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
    }
    else{
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
    }
}, []);

const toggleTheme = () => {
    if (isDarkMode) {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
    }
  };
  return (
    <button onClick={toggleTheme} className="fixed top-4  z-50 p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 hover:bg-gray-900 dark:hover:bg-gray-800">
        {isDarkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-blue-700"/>}
    </button>
  );
}