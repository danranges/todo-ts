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

type SignUpProps = {
  goToLogIn: () => void
}

const SignUp = ({ goToLogIn }: SignUpProps) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = () => {
    console.log(username)
  }

  return (
    <Container display="flex" justify="center">
      <Card css={{ mw: "400px", my: "4rem", p: "2rem" }}>
        <Card.Header>
          <Col>
            <Text h2>Sign Up</Text>
            <Row align="center">
              <Text>Already have an account?</Text>
              <Button
                light
                auto
                color={"secondary"}
                ripple={false}
                onPress={goToLogIn}
              >
                Log in
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
            <Button color={"secondary"} ghost onPress={handleSignUp}>
              Create Account
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default SignUp
