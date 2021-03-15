import React from "react"
import { Form, Input, Select, DatePicker } from "antd"
import "../styles/work-history.css"

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 20,
  },
}

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 5 },
  },
}

const { RangePicker } = DatePicker
const { Option } = Select

const Education = (props) => {
  const { value, onChangeValue } = props

  const { schoolName, degree, field, date, gpa } = value

  const [form] = Form.useForm()

  const onEducationChange = () => {
    onChangeValue(form.getFieldsValue())
  }

  const degreeSelector = (
    <Select onChange={onEducationChange}>
      <Option value='Associate Degree'>Associate Degree</Option>
      <Option value='Bachelor`s Degree'>Bachelor's Degree</Option>
      <Option value='Master`s Degree'>Master's Degree</Option>
      <Option value='Doctoral Degree'>Doctoral Degree</Option>
      <Option value='Undergraduate Degrees'>Undergraduate Degrees</Option>
    </Select>
  )

  return (
    <div className='container mt-5 display-4 input-form-work text-start'>
      <Form {...formItemLayout} form={form} name='work-history' layout='horizontal' onChange={onEducationChange}>
        <Form.Item name='schoolName' label='School Name' initialValue={schoolName}>
          <Input value={schoolName} />
        </Form.Item>

        <Form.Item label='Degree'>
          <Form.Item name='degree' noStyle rules={[{ required: true, message: "Province is required" }]} initialValue={degree}>
            {degreeSelector}
          </Form.Item>
        </Form.Item>

        <Form.Item name='field' label='Field of Study' initialValue={field}>
          <Input value={field} />
        </Form.Item>

        <Form.Item name='date' label='Graduation' initialValue={date}>
          <RangePicker style={{ width: "100%" }} picker='month' value={date} />
        </Form.Item>

        <Form.Item name='gpa' label='GPA' initialValue={gpa}>
          <Input value={gpa} type='number' />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Education
