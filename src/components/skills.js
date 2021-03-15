import React from "react"
import "../styles/heading.css"
import { Form, Input, Button, Slider } from "antd"
import { MinusCircleOutlined } from "@ant-design/icons"

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

const Skills = (props) => {
  const { value, onChangeValue } = props

  const { skills } = value

  const [form] = Form.useForm()

  const onSkillChange = () => {
    console.log(form.getFieldsValue())
    //   onChangeValue(form.getFieldsValue());
  }

  return (
    <div className='container mt-5 display-4 text-center input-form'>
      <Form {...formItemLayout} form={form} name='register' onChange={onSkillChange}>
        <Form.List initialValue={skills} name='skills' align='baseline'>
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item label='Skill' key={field.key}>
                  <Form.Item name={skills[index].skill} noStyle initialValue={skills[index].skill}>
                    <Input value={skills[index].skill} />
                  </Form.Item>
                  <Form.Item noStyle>
                    <Slider onChange={onSkillChange} />
                  </Form.Item>
                  <MinusCircleOutlined className='dynamic-delete-button' onClick={() => remove(field.name)} />
                </Form.Item>
              ))}
              <Form.Item {...formItemLayoutWithOutLabel}>
                <Button
                  type='dashed'
                  onClick={() => {
                    add()
                  }}
                  block
                >
                  Add Skill
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

export default Skills
