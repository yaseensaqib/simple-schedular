import { Button, Form, Input, message, Space } from 'antd';
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Login = () => {

const [form] = Form.useForm();
//const [formLayout, setFormLayout] = useState('vertical');

// const onFinish = () => {
//   message.success('Submit success!');
// };

const onFinish = (values) => {
  //console.log('Received values of form:', values);
  //console.log(values.username);
  if(values.email == 'yaseen@test.com' && values.password == '123'){
    message.success('Submit success!');
    window.location.href= "/services";
  } else {
    message.error('Invalid Credentails, Please try with username: yaseen@test.com, pass: 123');
  }
  
};



const onFinishFailed = () => {
  message.error('Submit failed!');
};

// const onFill = () => {
//   form.setFieldsValue({
//     url: 'https://taobao.com/',
//   });
// };

  return (
    <div className="login-bg">
        <div className="login-frame">
            <div className="logo"></div>
            <h1>Login</h1>

            <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
              },
              {
                type: 'email',
                warningOnly: false,
              },
              {
                type: 'string',
                min: 6,
              },
            ]}
            >
              <Input placeholder="Entr Email" />
            </Form.Item>
            <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
              },
              {
                type: 'password',
                warningOnly: false,
              },
              {
                type: 'string',
                min: 3,
              },
            ]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item>
              <Button type="primary"  htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
          <small>Forgot your password?</small>
          <Link to="/about">
              <span>Super Admin Login</span>
          </Link>
          </div>
    </div>
  );
};

export default Login;