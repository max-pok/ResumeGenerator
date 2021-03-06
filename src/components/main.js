import React, { useState } from "react"
import { Steps, Button, message } from "antd"
import "../styles/main.css"
import Heading from "./heading"
import WorkHistory from "./work-history"
import Education from "./education"
import Skills from "./skills"
import Summery from "./summary"
import Finalize from "./finalize"
import { INIT_HEADER } from "../models/header.model"
import { INIT_WORK_HISTORY } from "../models/work-hisotry.model"
import { INIT_EDUCATION } from "../models/education.model"
import { INIT_SKILLS } from "../models/skills.model"

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
  const [current, setCurrent] = useState(0)

  const [heading, setHeading] = useState(INIT_HEADER)
  const [workHistory, setWorkHistory] = useState(INIT_WORK_HISTORY)
  const [education, setEducation] = useState(INIT_EDUCATION)
  const [skills, setSkills] = useState(INIT_SKILLS)
  const [summary, setSummary] = useState("")

  const onHeaderChangeHandler = (value) => {
    setHeading(value)
  }

  const onWorkHistoryChangeHandler = (value) => {
    setWorkHistory(value)
  }

  const onEducationChangeHandler = (value) => {
    setEducation(value)
  }

  const onSkillsChangeHandler = (value) => {
    setSkills(value)
  }

  const onSummaryChangeHandler = (value) => {
    setSummary(value)
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
        {current === 1 && <WorkHistory {...workHistory} value={workHistory} onChangeValue={onWorkHistoryChangeHandler} />}
        {current === 2 && <Education {...education} value={education} onChangeValue={onEducationChangeHandler} />}
        {current === 3 && <Skills {...skills} value={skills} onChangeValue={onSkillsChangeHandler} />}
        {current === 4 && <Summery {...summary} value={summary} onChangeValue={onSummaryChangeHandler} />}
        {current === 5 && <Finalize />}
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
