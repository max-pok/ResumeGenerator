import React from "react"
import { Steps, Button, message } from "antd"
import { Form } from "antd"
import "../styles/main.css"
import Heading from "./heading"
const { Step } = Steps

const steps = [
  {
    title: "HEADING",
    content: "Heading",
  },
  {
    title: "WORK HISTORY",
    content: "Work History",
  },
  {
    title: "EDUCATION",
    content: "Education",
  },
  {
    title: "SKILLS",
    content: "Skills",
  },
  {
    title: "SUMMARY",
    content: "Summary",
  },
  {
    title: "FINALIZE",
    content: "Finalize",
  },
]

const Main = () => {
  const [current, setCurrent] = React.useState(0)

  const [heading, setHeading] = React.useState({
    city: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    prefix: "",
    profession: "",
    social_links: [],
    state_province: "",
    zip_code: "",
  })

  const onHeaderChangeHandler = (value) => {
    console.log(value)
    setHeading(value)
  }

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  return (
    <div className='container mt-4 display-5 text-center'>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className='steps-content'>
        {steps[current].content}
        {current === 0 && <Heading {...heading} value={heading} onChangeValue={onHeaderChangeHandler} />}
      </div>
      <div className='steps-action text-end'>
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type='primary' onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type='primary' onClick={() => message.success("Processing complete!")}>
            Done
          </Button>
        )}
      </div>
    </div>
  )
}

export default Main
