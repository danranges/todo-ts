import { useState } from "react"
import { NextUIProvider, Switch } from "@nextui-org/react"
import { darkTheme, lightTheme } from "./utils/theme"
import { BsSunFill, BsMoonFill } from "react-icons/bs"
import Navigation from "./components/Navigation"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const changeTheme = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <NextUIProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className="App">
        <Navigation>
          <Switch
            checked={darkMode}
            onChange={changeTheme}
            color={"warning"}
            iconOn={<BsSunFill />}
            iconOff={<BsMoonFill />}
          />
        </Navigation>
      </div>
    </NextUIProvider>
  )
}

export default App
