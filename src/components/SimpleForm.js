import {Form, Input} from 'antd'
import React from 'react'

class SimpleForm extends React.PureComponent {
    render(){
        const {getFieldDecorator} = this.props.form

        return (
            <Form>
                <Form.Item label="username">
                    {
                        getFieldDecorator('username')(<Input />)
                    }
                </Form.Item>
                <Form.Item label="age">
                    {
                        getFieldDecorator('age')(<Input />)
                    }
                </Form.Item>
                <Form.Item label="sex">
                    {
                        getFieldDecorator('sex')(<Input />)
                    }
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create({
    onValuesChange(props, changedFields ){
        console.log(props)
        console.log('-----------fields-------')
        console.log(changedFields )
        props.onChange({...props,...changedFields })
        
    },
    mapPropsToFields(props){
        return {
            username: Form.createFormField({
                value: props.username,
            })
        }
    }
})(SimpleForm)