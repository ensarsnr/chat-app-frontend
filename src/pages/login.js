import React from "react";
import "../app/globals.css";
import Boarding from "@/components/boarding";
import LoginForm from "@/components/login_form";
function Login() {
  return (
    <div className=" flex h-screen">
      <div className="shadow-2xl grid grid-cols-7 rounded-lg w-3/4 bg-white border-white border-2 h-5/6 m-auto">
        <Boarding text="Real-time chat application" />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
