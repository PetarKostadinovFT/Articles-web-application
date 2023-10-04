import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/register.scss";
import { useAuth } from "../context/userContext";
import { handleRegister } from "../utils/registerUtils";

interface FormData {
  email: string;
  password: string;
  repass: string;
}

function Register() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [data, setData] = useState<FormData>({
    email: "",
    password: "",
    repass: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    handleRegister(data, setIsAuthenticated, navigate);
    setLoading(false);
  };

  return (
    <div
      className="o-layout register-form"
      data-o-component="o-layout register-form "
    >
      <div className="o-layout__header register-form "></div>
      <div className="o-layout__main register-form__container">
        <div data-o-component="o-syntax-highlight"></div>
        <br className="demo-break" />
        <br className="demo-break" />
        <div className="o-grid-row">
          <div data-o-grid-colspan="center">
            <h2 className="o-typography-heading-level-2">Register</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit} data-o-component="o-forms">
          <span className="o-forms-field register-form__field">
            <label
              className="o-forms-field register-form__label"
              htmlFor="required"
            >
              <span className="o-forms-title">
                <span className="o-forms-title__main">Email</span>
              </span>
            </label>
            <span className="o-forms-input forms-input o-forms-input--text">
              <input
                type="email"
                className="register-form__input"
                id="email"
                name="email"
                placeholder="Enter Email..."
                value={data.email}
                onChange={handleChange}
                autoComplete="true"
              />
            </span>
          </span>
          <span className="o-forms-field forms-field">
            <label className="o-forms-field register-form__label">
              <span className="o-forms-title o-forms-title--vertical-center">
                <span className="o-forms-title__main">Password</span>
              </span>
            </label>
            <span className="o-forms-input forms-input o-forms-input--password">
              <input
                type="password"
                className="register-form__input"
                id="password"
                name="password"
                placeholder="Enter Password..."
                value={data.password}
                onChange={handleChange}
                autoComplete="true"
              />
            </span>
          </span>
          <span className="o-forms-field forms-field">
            <label className="o-forms-field register-form__label">
              <span className="o-forms-title o-forms-title--vertical-center">
                <span className="o-forms-title__main">Repeat Password</span>
              </span>
            </label>
            <span className="o-forms-input forms-input o-forms-input--password">
              <input
                type="password"
                className="register-form__input"
                id="repass"
                name="repass"
                value={data.repass}
                onChange={handleChange}
                autoComplete="true"
                placeholder="Repeat Password..."
              />
            </span>
          </span>

          <button className="o-buttons o-buttons--secondary" type="submit">
            Register
          </button>
        </form>
        <br className="demo-break" />
        <span className="o-forms-title__prompt">
          Already have an account?
          <Link to="/login" className="o-typography-link">
            Login here
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

export default Register;
