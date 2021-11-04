import React from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
      <h1>Signup</h1>
      <SignupForm />
    </div>
  );
}
