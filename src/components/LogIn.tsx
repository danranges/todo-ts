import {
  Card,
  Button,
  Container,
  Input,
  Spacer,
  Text,
  Col,
  Row,
} from "@nextui-org/react"
import { useState } from "react"

type LogInProps = {
  goToSignUp: () => void
}
const LogIn = ({ goToSignUp }: LogInProps) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    console.log(username)
  }

  return (
    <Container display="flex" justify="center">
      <Card css={{ mw: "400px", my: "4rem", p: "2rem" }}>
        <Card.Header>
          <Col>
            <Text h2>Log In</Text>
            <Row align="center">
              <Text>Don't have an account?</Text>
              <Button
                light
                auto
                color={"secondary"}
                ripple={false}
                onPress={goToSignUp}
              >
                Sign up
              </Button>
            </Row>
          </Col>
        </Card.Header>
        <Card.Body>
          <Input
            bordered
            clearable
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Spacer y={0.5} />
          <Input.Password
            bordered
            clearable
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="flex-end">
            <Button color={"secondary"} ghost onPress={handleLogin}>
              Log In
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default LogIn
