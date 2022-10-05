import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, Button, Checkbox, Form, Input, message } from "antd";

import styles from "./index.module.scss";

import { login } from "../../api/user";
import { setToken } from '../../utils/storageToken';

export default function Login() {
  const [loadings, setLoadings] = useState<boolean>(false);
  const navigate = useNavigate();
  async function onFinish(values: { mobile: number; code: number }) {
    setLoadings(true);
    try {
      const { mobile, code } = values;
      const res = await login(mobile, code);
      // console.log(res);
      const { token} = res.data
      setToken(token)
      // 1.登录成功,保存token
      message.success("登录成功", 0.5, () => {
        navigate("/home");
      });
      // 2.跳转到首页
    } catch (error) {
      console.log("@error:", error);
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.login}>
      <Card className={styles['login-container']}>
        <div className={styles['login-logo']}>
        </div>
        <Form
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          labelAlign="left"
          size="large"
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{ mobile: 13911111111, code: 123456, agree: false }}
        >
          <Form.Item
            label="用户名"
            name="mobile"
            validateTrigger={["onBlur", "onChange"]}
            rules={[
              { required: true, message: "手机号不能为空" },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "手机号格式错误",
              },
            ]}
          >
            <Input placeholder="请输入您的手机号" />
          </Form.Item>

          <Form.Item
            label="验证码"
            name="code"
            rules={[
              { required: true, message: "验证码不能为空" },
              {
                pattern: /^\d{6}$/,
                message: "验证码格式错误",
              },
            ]}
          >
            <Input placeholder="请输入您的验证码" />
          </Form.Item>

          <Form.Item
            name="agree"
            valuePropName="checked"
            wrapperCol={{ offset: 5, span: 19 }}
            rules={[
              {
                //自定义校验规则
                validator(_, value) {
                  if (value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("请阅读并阅读用户协议"));
                },
              },
              // {
              //   pattern: /^true$/,
              //   message: "请阅读[隐私条款]和[用户协议]",
              // },
            ]}
          >
            <Checkbox>我已阅读并同意[隐私条款]和[用户协议]</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5, span: 19 }}>
            <Button type="primary" htmlType="submit" block loading={loadings}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
