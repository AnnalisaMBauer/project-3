import React from "react";
import Auth from "./auth";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ children, ...props }) {
  if (!Auth.loggedIn()) {
    return <Redirect to="/login" />;
  }
  return <Route>{children}</Route>;
}
