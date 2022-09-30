import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { createContext, useState } from "react";

export const themeContext = createContext(null);

function App(props) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id="dark">
        <Navbar />
        <Home />
      </div>
    </themeContext.Provider>
  );
}

export default App;
