import React from "react";
import RegisterForm from "../Components/auth/RegisterForm/RegisterForm";

function page() {
  return (
    <div className="auth-page w-full h-full flex justify-center items-center">
      <RegisterForm />
    </div>
  );
}

export default page;
