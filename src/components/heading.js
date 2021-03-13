import React from "react"
import "../styles/heading.css"
import { Form, Input, Select, Button, Space } from "antd"
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons"

const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
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

const areas = [
  { label: "Beijing", value: "Beijing" },
  { label: "Shanghai", value: "Shanghai" },
]

const sights = {
  Beijing: ["Tiananmen", "Great Wall"],
  Shanghai: ["Oriental Pearl", "The Bund"],
}

const Heading = () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log("Received values of form: ", values)
  }

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 100,
        }}
      >
        <Option value='972'>+972</Option>
      </Select>
    </Form.Item>
  )

  return (
    <div className='container mt-5 display-4 text-center input-form'>
      <Form {...formItemLayout} form={form} name='register' onFinish={onFinish}>
        <Form.Item
          name='firstName'
          label='First Name'
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Please input your first name.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='lastName'
          label='Last Name'
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Please input your last name.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='profession'
          label='Profession'
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Please input your profession.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name='city' label='City'>
          <Input />
        </Form.Item>

        <Form.Item
          name='state-province'
          label='State/Province'
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Please input your state / province.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='zip-code'
          label='Zip Code'
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Please input your zip code.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='phone'
          label='Phone Number'
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item
          name='email'
          label='Email Address'
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Please input your email address.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.List name='social-links' align='baseline'>
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)} label={index === 0 ? "Social Links" : ""} required={true} key={field.key}>
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Please input a social link or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <Input />
                  </Form.Item>
                  <MinusCircleOutlined className='dynamic-delete-button' onClick={() => remove(field.name)} />
                </Form.Item>
              ))}
              <Form.Item {...formItemLayoutWithOutLabel}>
                <Button type='dashed' onClick={() => add()} block>
                  Add Social Links
                </Button>

                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  )
}

export default Heading
