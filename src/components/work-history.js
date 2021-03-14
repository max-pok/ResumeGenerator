import React from "react"
import { Form, Input, Select, Button, Space } from "antd"
import "../styles/work-history.css"
import { DatePicker, TimePicker } from "antd"
import { Radio, Cascader, InputNumber, TreeSelect, Switch } from "antd"
import { MinusCircleOutlined } from "@ant-design/icons"

const rangeConfig = {
  rules: [
    {
      type: "array",
      required: true,
      message: "Please select time!",
    },
  ],
}

const { RangePicker } = DatePicker

const WorkHistory = () => {
  const [form] = Form.useForm()

  return (
    <div className='container mt-5 display-4 input-form-work'>
      <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout='horizontal'
      >
        <Form.Item label='Job Title'>
          <Input />
        </Form.Item>

        <Form.Item label='Employer'>
          <Input />
        </Form.Item>

        <Form.Item label='Location'>
          <Input />
        </Form.Item>

        <Form.Item label='Date'>
          <RangePicker style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default WorkHistory
