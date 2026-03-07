import { LoginForm } from "@/components/LoginForm";
import "@/styles/css/index.css";
import Image from "next/image";

export default function Login() {
  return (
    <div className="login_container grid grid-cols-1 sm:grid-cols-2">
      <div className="login_form h-screen flex justify-center flex-col items-center">
        <Image src={'/images/edutrack-high-resolution-logo-transparent.png'} width={140} height={40} alt="EduTrack Logo | School Management System" className="pb-2"/>
        <h1 className="text-2xl font-bold">Welcome Back,</h1>
              <p>Login to get started, it takes less than a minute</p>
              <br/>
        <LoginForm />
      </div>
      <div className="login_banner rounded-l-2xl overflow-hidden">
        <img
          src="\images\login_page_banner_image.jpg"
          alt="Login Page Banner Image"
          className="h-screen object-cover relative top-0"
        />
      </div>
    </div>
  );
}
