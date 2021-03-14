import React from "react"
import "../styles/heading.css"
import { Form, Input, Select, Button } from "antd"
import { MinusCircleOutlined } from "@ant-design/icons"

const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
}

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 5 },
  },
}

const Heading = (props) => {
  const { value, onChangeValue } = props

  const { firstName, lastName, profession, city, prefix, state_province, zip_code, phone, email, social_links } = value

  const [form] = Form.useForm()

  const [header, setHeader] = React.useState({})

  const onHeaderChange = (e) => {
    onChangeValue(form.getFieldsValue())
  }

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 100,
        }}
        onChange={onHeaderChange}
      >
        <Option value='+972'>+972</Option>
      </Select>
    </Form.Item>
  )

  return (
    <div className='container mt-5 display-4 text-center input-form'>
      <Form {...formItemLayout} form={form} name='register' onChange={onHeaderChange}>
        <Form.Item
          label='First Name'
          name='firstName'
          initialValue={firstName}
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Please input your first name.",
            },
          ]}
        >
          <Input value={firstName} />
        </Form.Item>

        <Form.Item
          label='Last Name'
          name='lastName'
          initialValue={lastName}
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Please input your last name.",
            },
          ]}
        >
          <Input value={lastName} />
        </Form.Item>

        <Form.Item
          label='Profession'
          name='profession'
          initialValue={profession}
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Please input your profession.",
            },
          ]}
        >
          <Input value={profession} />
        </Form.Item>

        <Form.Item label='City' name='city' initialValue={city}>
          <Input value={city} />
        </Form.Item>

        <Form.Item
          label='State/Province'
          name='state_province'
          initialValue={state_province}
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Please input your state / province.",
            },
          ]}
        >
          <Input value={state_province} />
        </Form.Item>
        <Form.Item
          label='Zip Code'
          name='zip_code'
          initialValue={zip_code}
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Please input your zip code.",
            },
          ]}
        >
          <Input value={zip_code} />
        </Form.Item>

        <Form.Item
          label='Phone Number'
          name='phone'
          initialValue={phone}
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
            value={phone}
          />
        </Form.Item>
        <Form.Item
          label='Email Address'
          name='email'
          initialValue={email}
          validateTrigger={["onChange", "onBlur"]}
          rules={[
            {
              required: true,
              message: "Please input your email address.",
            },
          ]}
        >
          <Input value={email} />
        </Form.Item>

        <Form.List initialValue={social_links} name='social_links' align='baseline'>
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)} label={index === 0 ? "Social Links" : ""} required={true} key={field.key}>
                  <Form.Item
                    {...fields}
                    name={("link", index)}
                    validateTrigger={["onChange", "onBlur"]}
                    initialValue={social_links[index]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Please input a social link or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <Input value={social_links[index]} />
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
