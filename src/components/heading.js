import React from "react"
import "../styles/heading.css"
import { Form, Input, Select, Button, Space } from "antd"
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"

const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
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

  const socialLinkSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 100,
        }}
      >
        <Option value='twitter'>Twitter</Option>
        <Option value='linkedin'>LinkedIn</Option>
      </Select>
    </Form.Item>
  )

  return (
    <div className='container mt-5 display-4 text-center input-form'>
      <Form {...formItemLayout} form={form} name='register' onFinish={onFinish}>
        <Form.Item
          name='firstName'
          label='First Name'
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
          rules={[
            {
              required: true,
              message: "Please input your email address.",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Heading
