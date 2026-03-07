"use client";

import { ShowAlert } from "@/components/ShowAlert";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { PasswordSchema } from "@/schemas/password.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ResetPasswordPage() {
  const [showPassword, setPassword] = useState(false);
  const [showCpassword, setShowCpassword] = useState(false);
  const [showAlert, setShowAlert] = useState({
    show: false,
    title: "Failed to Reset Password.",
    message: "",
    type: "error",
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(PasswordSchema),
  });
  const submitForm = async (data) => {
    const res = await fetch("http://localhost:8080/api/resetPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, token }),
    });
    const result = await res.json();
      if (res.ok) {
      setShowAlert({
        show: true,
        title: "Successfull",
          message: 'Password reset successfully',
        type: "success",
      })
      router.push("/login");
      } else {
      setShowAlert({
        show: true,
        title: "Failed",
        message: 'Password reset failed.',
        type: "error",
      });
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <Image
        src={"/images/edutrack-high-resolution-logo-transparent.png"}
        width={100}
        height={30}
        className="pb-2"
      />
      <h1 className="text-2xl font-bold">Reset Password</h1>
      <p className="text-sm text-gray-500">Please set your new password</p>
      <br />
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldGroup className={"w-78"}>
          <Field>
            <FieldLabel>Password</FieldLabel>
            <FieldContent>
              <InputGroup>
                <InputGroupInput
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  aria-invalid={errors.password ? "true" : "false"}
                  placeholder="Password here"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton onClick={() => setPassword(!showPassword)}>
                    {showPassword ? <Eye /> : <EyeClosed />}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
              <FieldError>{errors.password?.message}</FieldError>
            </FieldContent>
          </Field>
          <Field>
            <FieldLabel>Confirm Password</FieldLabel>
            <FieldContent>
              <InputGroup>
                <InputGroupInput
                  type={showCpassword ? "text" : "password"}
                  {...register("confirmPassword")}
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                  placeholder="Password here"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    onClick={() => setShowCpassword(!showCpassword)}
                  >
                    {showCpassword ? <Eye /> : <EyeClosed />}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </FieldContent>
            <FieldError>{errors.confirmPassword?.message}</FieldError>
          </Field>
          <Button>Reset Password</Button>
        </FieldGroup>
        <p className="text-xs flex items-center gap-2 pt-2">
          <Info size={18} />
          <span>
            If you remember your password, you can{" "}
            <Link
              href="/login"
              className="whitespace-nowrap hover:text-blue-500"
            >
              sign in
            </Link>
            .
          </span>
        </p>
      </form>
      {showAlert.show && (
        <ShowAlert
          message={showAlert.message}
          type={showAlert.type}
          title={showAlert.title}
          show={showAlert.show}
          setShow={setShowAlert}
        />
      )}
    </div>
  );
}
