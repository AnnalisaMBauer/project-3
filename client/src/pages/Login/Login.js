import React from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function Login() {
  const Style ={
    fontFamily: 'Orbitron',
    marginBottom: 'auto',
  }
  return (
    <div className="container">
    <div style={Style}>
      <h1>Login</h1>
      <LoginForm />
      <h1>Signup</h1>
      <SignupForm />
    </div>
    </div>
  );
}
