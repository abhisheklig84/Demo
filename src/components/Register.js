import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";

function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="register">
      <div className="register_container">
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
              type="text"
              placeholder="Enter Your Name"
              {...register("name", {
                required: true,
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
