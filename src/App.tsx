import { NextUIProvider } from "@nextui-org/react"
import Navigation from "./components/Navigation"

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <Navigation />
      </div>
    </NextUIProvider>
  )
}

export default App
