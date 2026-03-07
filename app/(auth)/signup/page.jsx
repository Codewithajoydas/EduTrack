import { SignupForm } from "@/components/SignupForm";
import "@/styles/css/index.css";

import Image from "next/image";

export const metadata = {
  title: "Signup | EduTrack | School Management System",
  description:
    "Signup page for EduTrack, a school management system. Create an account to access all features of EduTrack.",
}

export default function Signup() {
  return (
    <div className="sign_up_container grid grid-cols-1 sm:grid-cols-2 p-10 sm:p-0">
      <div className="sign_up_form  flex flex-col items-center justify-center ">
        <div className=" rounded-2xl text-center pt-2">
          <div className="w-full flex justify-center">
            {" "}
            <Image
              src={"/images/edutrack-high-resolution-logo-transparent.png"}
              width={140}
              height={20}
              className="text-center"
              alt="Edutrack Logo"
            />
          </div>
          <h1 className="text-3xl font-bold text-center">Create an account</h1>
          <p className="text-sm text-gray-400 mb-4">Create an account to get started, it takes less than a minute</p>
          <SignupForm />
        </div>
      </div>
      <div className="sign_up_banner_image h-screen rounded-l-3xl overflow-hidden  hidden sm:block  sticky top-0">
        <Image
          alt="signup page bg image"
          src="/images/signup_page_banner_image.jpg"
          fill
          className="h-screen object-cover pointer-events-none"
        />
      </div>
    </div>
  );
}
