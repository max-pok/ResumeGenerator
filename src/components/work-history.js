import React from "react"
import { Form, Input } from "antd"
import "../styles/work-history.css"
import { DatePicker } from "antd"

const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select time!",
    },
  ],
}

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 20,
  },
}

const { RangePicker } = DatePicker

const WorkHistory = (props) => {
  const { value, onChangeValue } = props

  const { jobTitle, employer, location, date } = value

  const [form] = Form.useForm()

  const onWorkerHistoryChange = () => {
    onChangeValue(form.getFieldsValue())
  }

  return (
    <div className='container mt-5 display-4 input-form-work'>
      <Form {...formItemLayout} form={form} name='work-history' layout='horizontal' onChange={onWorkerHistoryChange}>
        <Form.Item name='jobTitle' label='Job Title' initialValue={jobTitle}>
          <Input value={jobTitle} />
        </Form.Item>

        <Form.Item name='employer' label='Employer' initialValue={employer}>
          <Input value={employer} />
        </Form.Item>

        <Form.Item name='location' label='Location' initialValue={location}>
          <Input value={location} />
        </Form.Item>

        <Form.Item name='date' label='Date' initialValue={date}>
          <RangePicker style={{ width: "100%" }} picker='month' onChange={onWorkerHistoryChange} value={date} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default WorkHistory
