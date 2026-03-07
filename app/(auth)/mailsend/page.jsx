import { Check } from "lucide-react";

function MailSent() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className=" rounded-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-green-100">
            <Check size={35} color="green"/>
          </div>
        </div>

        <h1 className="text-xl font-semibold text-gray-800">
          Check Your Email
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          We have sent a password reset link to your email address. Please check
          your inbox and follow the instructions.
        </p>

        

        <p className="text-xs text-gray-400 mt-4">
          If you don't see the email, check your spam folder.
        </p>
      </div>
    </div>
  );
}

export default MailSent;
