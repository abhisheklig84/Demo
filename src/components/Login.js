import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./Login.css";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="Login">
      <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="input"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
          </div>
          <div>
            <input
              className="input"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Login
            </button>
            <Link to="register">
              <button className="btn1">Sign up</button>
            </Link>
            <Link to="">
              <p>Reset Password</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
