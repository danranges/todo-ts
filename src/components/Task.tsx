import { Card, Text } from "@nextui-org/react"

const Task = () => {
  return (
    <Card isHoverable isPressable css={{ mw: "600px" }}>
      <Card.Header>
        <Text weight={"bold"}>Task Header </Text>
      </Card.Header>
      <Card.Body>
        This is the fake text for a fake task while I figure out what it's
        supposed to look like
      </Card.Body>
    </Card>
  )
}

export default Task
