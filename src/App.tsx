import { useState } from "react"
import { Grid, NextUIProvider, Switch } from "@nextui-org/react"
import { darkTheme, lightTheme } from "./utils/theme"
import { BsSunFill, BsMoonFill } from "react-icons/bs"
import Navigation from "./components/Navigation"
import SignUp from "./components/SignUp"
import Task from "./components/Task"
import LogIn from "./components/LogIn"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [hasLogin, setHasLogin] = useState(false)

  const changeTheme = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  const handleSignUpLogIn = () => {
    setHasLogin((prev) => !prev)
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
        {hasLogin ? (
          <SignUp goToLogIn={handleSignUpLogIn} />
        ) : (
          <LogIn goToSignUp={handleSignUpLogIn} />
        )}
        {false && (
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
        )}
      </div>
    </NextUIProvider>
  )
}

export default App
