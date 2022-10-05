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

type LogInProps = {
  goToSignUp: () => void
}
const LogIn = ({ goToSignUp }: LogInProps) => {
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
                onClick={goToSignUp}
              >
                Sign up
              </Button>
            </Row>
          </Col>
        </Card.Header>
        <Card.Body>
          <Input bordered clearable label="Username" />
          <Spacer y={0.5} />
          <Input.Password bordered clearable label="Password" />
        </Card.Body>
        <Card.Footer>
          <Row justify="flex-end">
            <Button color={"secondary"} ghost>
              Log In
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default LogIn
