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
  let { value, onChangeValue } = props

  const [form] = Form.useForm()

  const onSkillChange = () => {
    onChangeValue(form.getFieldsValue().skills)
  }

  return (
    <div className='container mt-5 display-4 text-center input-form'>
      <Form {...formItemLayout} form={form} name='register' onChange={onSkillChange}>
        <Form.List initialValue={value} name='skills' align='baseline'>
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item label='Skill' key={field.key}>
                  <Form.Item name={[index, ["skill"]]} initialValue={value[index] === undefined ? "" : value[index].skill} noStyle>
                    <Input value={value[index] === undefined ? "" : value[index].skill} />
                  </Form.Item>
                  <Form.Item name={[index, ["experience"]]} initialValue={value[index] === undefined ? 1 : value[index].experience} noStyle>
                    <Slider value={value[index] === undefined ? 50 : value[index].experience} onChange={onSkillChange} />
                  </Form.Item>
                  <MinusCircleOutlined
                    className='dynamic-delete-button'
                    onClick={async () => {
                      await remove(index)
                      value = value.filter((v, i) => {
                        return i !== index
                      })
                      onSkillChange()
                    }}
                  />
                </Form.Item>
              ))}
              <Form.Item {...formItemLayoutWithOutLabel}>
                <Button
                  type='dashed'
                  onClick={async () => {
                    await add({ skill: "", experience: 50 })
                    await value.push({ skill: "", experience: 50 })
                    onSkillChange()
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
