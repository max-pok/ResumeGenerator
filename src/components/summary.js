import React from "react"
import { Form, Input } from "antd"
import "../styles/work-history.css"

const { TextArea } = Input

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 20,
  },
}

const Summary = (props) => {
  let { value, onChangeValue } = props

  const [form] = Form.useForm()

  const onSummaryChange = () => {
    onChangeValue(form.getFieldsValue().summary)
  }

  return (
    <div className='container mt-5 display-4 input-form-work'>
      <Form {...formItemLayout} form={form} name='work-history' layout='horizontal' onChange={onSummaryChange}>
        <Form.Item name='summary' label='Summary' initialValue={value}>
          <TextArea allowClear value={value} onChange={onSummaryChange} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Summary
