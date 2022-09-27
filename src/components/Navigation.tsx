import { Navbar } from "@nextui-org/react"
import { GiElephant } from "react-icons/gi"

const Navigation = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <GiElephant fontSize={30} />
        AnElephant
      </Navbar.Brand>
    </Navbar>
  )
}

export default Navigation
