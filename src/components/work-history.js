import React from "react"
import { Form, Input, Select, Button, Space } from "antd"
import "../styles/work-history.css"
import { DatePicker, TimePicker } from "antd"
import { Radio, Cascader, InputNumber, TreeSelect, Switch } from "antd"
import { MinusCircleOutlined } from "@ant-design/icons"

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
}

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
}

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
          span: 4,
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
          <RangePicker style={{ width: "550px" }} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default WorkHistory
