import { useState } from "react"
import { Grid, NextUIProvider, Switch } from "@nextui-org/react"
import { darkTheme, lightTheme } from "./utils/theme"
import { BsSunFill, BsMoonFill } from "react-icons/bs"
import Navigation from "./components/Navigation"
import Task from "./components/Task"

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
        <Grid.Container justify="center" gap={1} css={{ p: "1rem" }}>
          <Grid>
            <Task />
          </Grid>
          <Grid>
            <Task />
          </Grid>
          <Grid>
            <Task />
          </Grid>
          <Grid>
            <Task />
          </Grid>
        </Grid.Container>
      </div>
    </NextUIProvider>
  )
}

export default App
