"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "./ui/field";
import { Input } from "./ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "@/schemas/signin.schema";
import { ShowAlert } from "./ShowAlert";

export function LoginForm() {
  const [showPassword, setPassword] = useState(false);
  const [showAlert, setShowAlert] = useState({
    show: false,
    title: "Failed to login.",
    message: "",
    type: "error",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signinSchema),
  });
  const submitdata = async (data) => {
    try {
      const res = await fetch("http://localhost:8080/api/authentication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      const result = await res.json();
      if (res.ok) {
        setShowAlert({
          show: true,
          title: "Login Successful!",
          message: "You have logged in successfully.",
          type: "success",
        });
        window.location.href = "/";
      } else {
        setShowAlert({
          show: true,
          title: "Failed to login.",
          message: "Invalid email or password.",
          type: "error",
        });
      }
    } catch (error) {
      console.log("the error is", error);
      setShowAlert({
        show: true,
        title: "Failed to login.",
        message: "Internal server error.",
        type: "error",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(submitdata)}>
      <FieldGroup className="w-sm">
        <Field>
          <FieldLabel>Email</FieldLabel>
          {errors.email && (
            <FieldDescription className="text-red-500 text-xs">
              {errors.email.message}
            </FieldDescription>
          )}
          <FieldContent>
            <Input
              placeholder="Enter Your Email"
              type="email"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />
          </FieldContent>
        </Field>
        <Field>
                  <FieldLabel>Password</FieldLabel>
          {errors.password && (
            <FieldDescription className="text-red-500 text-xs">
              {errors.password.message}
            </FieldDescription>
          )}
          <FieldContent>
            <InputGroup >
              <InputGroupInput
                placeholder="Enter Your Password"
                {...register("password")}
                type={showPassword ? "text" : "password"}
                aria-invalid={errors.password ? "true" : "false"}
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton onClick={() => setPassword(!showPassword)}>
                  {showPassword ? <Eye /> : <EyeClosed />}
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </FieldContent>
          <FieldDescription
            className={"text-right text-xs text-blue-500 hover:cursor-pointer"}
          >
            <Link href={'/forgot'} className="no-underline" style={{
                textDecoration:"none"
            }}>Forgot Password</Link>
          </FieldDescription>
        </Field>
        <Button type="submit" className={'cursor-pointer'}>Login</Button>
      </FieldGroup>
      <p className="text-xs text-gray-400 text-center pt-4">
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue-700">
          Sign Up
        </Link>
      </p>
      {showAlert.show && (
        <ShowAlert
          message={showAlert.message}
          type={showAlert.type}
          title={showAlert.title}
          show={showAlert.show}
          setShow={setShowAlert}
        />
      )}
    </form>
  );
}
