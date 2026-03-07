import ForgotForm from "@/components/ForgotForm";
import Image from "next/image";

export default function ForgotPassword() {
  return (
    <div className="forget_container w-full h-screen flex justify-center items-center flex-col">
      <Image
        src={"/images/edutrack-high-resolution-logo-transparent.png"}
        width={140}
        height={40}
        alt="EduTrack Logo | School Management System"
        className="pb-2"
      />
      <h1 className="text-2xl font-bold">Forgot Password</h1>
      <p className="text-sm">Enter your email address to reset your password</p>
      <br />
      <ForgotForm />
    </div>
  );
}
