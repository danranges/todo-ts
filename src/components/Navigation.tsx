import React from "react"
import { Navbar, Text } from "@nextui-org/react"

type Props = {
  children?: React.ReactNode
}
const Navigation: React.FC<Props> = ({ children }) => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Text h1>AnElephant</Text>
      </Navbar.Brand>
      {children}
    </Navbar>
  )
}

export default Navigation
