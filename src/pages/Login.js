import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../components/styles/main.css";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ErrorMessage, Formik, Form, Field } from "formik";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const handleLogin = (values) => {
    Axios.post("http://localhost:3001/loginCustomer", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };
  const validationsLogin = yup.object().shape({
    email: yup.string().email("invalid email").required("Email is mandatory"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is mandatory"),
  });

  return (
    <div className="center-div">
      <div className="container">
        <h1>Login</h1>
        <Formik
          initialValues={{}}
          onSubmit={handleLogin}
          validationSchema={validationsLogin}
        >
          <Form className="login-form">
            <div className="login-form-group">
              <Field name="email" className="form-field" placeholder="Email" />

              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
            </div>

            <div className="form-group">
              <Field
                name="password"
                className="form-field"
                placeholder="Password"
                type={passwordShown ? "text" : "password"}
              />
              <VisibilityOffIcon onClick={togglePassword} />

              <ErrorMessage
                component="span"
                name="password"
                className="form-error"
              />
            </div>
            <br />
            <Button
              type="submit"
              variant="contained"
              style={{
                height: "2%",
                width: "30%",
                color: "black",
                border: "2px solid",
                backgroundColor: "#8a9c8f",
                fontSize: "15px",
              }}
            >
              Sign In
            </Button>
          </Form>
        </Formik>
        <p>
          <Link to="/resetPassword"> Forgot Password</Link>
        </p>
        <p>
          Don't have an account
          <Link to="/register/type"> Sign-up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
