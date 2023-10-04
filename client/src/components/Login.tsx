import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/userContext";
import { handleLogin } from "../utils/loginUtils";
import "../styles/login.scss";

interface FormData {
  email: string;
  password: string;
}

function Login() {
  const [data, setData] = useState<FormData>({ email: "", password: "" });
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const loginUser = async (e: FormEvent) => {
    e.preventDefault();
    handleLogin(data, setIsAuthenticated, navigate);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="o-layout login-form">
      <div className="o-layout__main login-form__container">
        <br className="demo-break" />
        <br className="demo-break" />
        <div className="o-grid-row">
          <div data-o-grid-colspan="center">
            <h2 className="o-typography-heading-level-2">Login</h2>
          </div>
        </div>
        <form onSubmit={loginUser} data-o-component="o-forms">
          <span className="o-forms-field">
            <label className="o-forms-field" htmlFor="required">
              <span className="o-forms-title">
                <span className="o-forms-title__main">Email</span>
              </span>
            </label>
            <span className="o-forms-input o-forms-input--text">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter Email..."
                autoComplete="true"
                value={data.email}
                onChange={handleChange}
              />
            </span>
          </span>
          <span className="o-forms-field">
            <label className="o-forms-field">
              <span className="o-forms-title o-forms-title--vertical-center">
                <span className="o-forms-title__main">Password</span>
              </span>
            </label>
            <span className="o-forms-input o-forms-input--password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password..."
                value={data.password}
                autoComplete="true"
                onChange={handleChange}
              />
            </span>
          </span>

          <button className="o-buttons o-buttons--secondary" type="submit">
            Login
          </button>
        </form>

        <br className="demo-break" />
        <span className="o-forms-title__prompt">
          Don't have an account?
          <Link to="/register" className="o-typography-link">
            Register here
          </Link>
        </span>

        <br className="demo-break" />
        <div className="o-forms-field">
          <span className="o-forms-title__prompt">
            Have a question? Visit the
            <a href="http://help.ft.com" className="o-typography-link">
              FT Help Centre
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
