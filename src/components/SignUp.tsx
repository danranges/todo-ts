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

type SignUpProps = {
  goToLogIn: () => void
}

const SignUp = ({ goToLogIn }: SignUpProps) => {
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
                onClick={goToLogIn}
              >
                Log in
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
              Create Account
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default SignUp
