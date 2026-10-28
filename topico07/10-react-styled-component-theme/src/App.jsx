/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {ThemeProvider} from "styled-components"
import Home from "./pages/Home";
import theme from "./styles/themes/default.styled";
import { useContext } from "react";
import { changeThemeContext } from "./context/ChangeThemeProvider";
// import { detectThemeChanges } from "./utils/themeWindow";

function App() {
  const [count, setCount] = useState(0);
  const {isThemeLight} = useContext(changeThemeContext)

  // useEffect(() => {
  //   detectThemeChanges(changeTheme);
  
  // }, []);

  
  return (
    <ThemeProvider theme={isThemeLight?theme.light:theme.dark}>
        <Home 
          count={count} 
          setCount={setCount} 
          />
    </ThemeProvider>
  );
}

export default App;
