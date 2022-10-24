import { LoginParams } from "@/interface/user/login";
import { loginAction } from "@/redux/action/authenAction";
import { Button, Checkbox, Form, Input } from "antd";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.less";

const initialValues: LoginParams = {
  username: "",
  password: "",
  // remember: true
};

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const onFinished = async (form: LoginParams) => {
    dispatch(loginAction({ form: form, navigate }));
  };

  return (
    <div className="login-page">
      <Form<LoginParams>
        onFinish={onFinished}
        className="login-page-form"
        initialValues={initialValues}
      >
        <h2>PINBUS ADMIN</h2>
        <Form.Item
          name="username"
          rules={[
            { required: true, message: "Tên đăng nhập không được bỏ trống!" },
          ]}
        >
          <Input placeholder="Tên đăng nhập" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Mật khẩu không được bỏ trống!" }]}
        >
          <Input type="password" placeholder="Mật khẩu" />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            className="login-page-form_button"
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
