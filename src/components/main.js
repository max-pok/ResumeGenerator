import React from "react"
import { Steps, Button, message } from "antd"
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

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  return (
    <div className='container mt-5 display-4 text-center'>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className='steps-content'>
        {steps[current].content}
        <Heading />
      </div>
      <div className='steps-action'>
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
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  )
}

export default Main