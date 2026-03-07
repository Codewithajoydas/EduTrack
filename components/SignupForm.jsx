"use client";

import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { InputGroup, InputGroupInput } from "@/components/ui/input-group";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/schemas/signup.schema";

import { useEffect, useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";
import { Info } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [agree, setAgree] = useState(false);
  const [tryToSubmit, setTryToSubmit] = useState(false);
  const [showMessage, setShowMessage] = useState({
    show: false,
    message: "",
    type: "error",
  });
  const submitForm = async (data) => {
    setTryToSubmit(true);
    if (!agree) return;

    try {
      const res = await fetch("http://localhost:8080/api/authorization", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        setShowMessage({
          show: true,
          message: result.message,
          type: "success",
        });
        router.push("/login");
      } else {
        setShowMessage({
          show: true,
          message: result.message,
          type: "error",
        });
      }
    } catch (error) {
      setShowMessage({
        show: true,
        message: "Something went wrong. Please try again.",
        type: "error",
      });
      console.log("the error is: ", error.message);
    }

    setTryToSubmit(false);
  };

  useEffect(() => {
    let time;
    if (showMessage.show) {
      time = setTimeout(() => {
        setShowMessage({
          show: false,
          message: "",
          type: "error",
        });
      }, 5000);
    }
    return () => {
      clearTimeout(time);
    };
  }, [showMessage]);

  const errorStyle = "border-red-500 focus:ring-red-500";

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <FieldGroup className="w-sm gap-4">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="firstName">First Name</FieldLabel>

            <FieldContent>
              <InputGroup>
                <InputGroupInput
                  id="firstName"
                  placeholder="John"
                  {...register("firstName")}
                  aria-invalid={!!errors.firstName}
                  className={errors.firstName ? errorStyle : ""}
                />
              </InputGroup>

              <FieldError className="text-xs">
                {errors.firstName?.message}
              </FieldError>
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel htmlFor="lastName">Last Name</FieldLabel>

            <FieldContent>
              <InputGroup>
                <InputGroupInput
                  id="lastName"
                  placeholder="Das"
                  {...register("lastName")}
                  aria-invalid={!!errors.lastName}
                  className={errors.lastName ? errorStyle : ""}
                />
              </InputGroup>

              <FieldError className="text-xs">
                {errors.lastName?.message}
              </FieldError>
            </FieldContent>
          </Field>
        </div>

        {/* Email */}
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>

          <FieldContent>
            <InputGroup>
              <InputGroupInput
                id="email"
                type="email"
                placeholder="Email"
                {...register("email")}
                aria-invalid={!!errors.email}
                className={errors.email ? errorStyle : ""}
              />
            </InputGroup>

            <FieldError className="text-xs">{errors.email?.message}</FieldError>
          </FieldContent>
        </Field>

        {/* Phone */}
        <Field>
          <FieldLabel htmlFor="phone">Mobile Number</FieldLabel>

          <FieldContent>
            <InputGroup>
              <InputGroupInput
                id="phone"
                placeholder="Mobile Number"
                {...register("phone")}
                aria-invalid={!!errors.phone}
                className={errors.phone ? errorStyle : ""}
              />
            </InputGroup>

            <FieldError className="text-xs">{errors.phone?.message}</FieldError>
          </FieldContent>
        </Field>

        {/* Role */}
        <Field>
          <FieldLabel>Select Role</FieldLabel>

          <FieldContent>
            <Controller
              name="role"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="principal">Principal</SelectItem>
                      <SelectItem value="teacher">Teacher</SelectItem>
                      <SelectItem value="parent">Parent</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </FieldContent>
        </Field>

        {/* Password */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>

            <FieldContent>
              <InputGroup>
                <InputGroupInput
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  aria-invalid={!!errors.password}
                  className={errors.password ? errorStyle : ""}
                />
              </InputGroup>

              <FieldError className="text-xs">
                {errors.password?.message}
              </FieldError>
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>

            <FieldContent>
              <InputGroup>
                <InputGroupInput
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                  aria-invalid={!!errors.confirmPassword}
                  className={errors.confirmPassword ? errorStyle : ""}
                />
              </InputGroup>

              <FieldError className="text-xs">
                {errors.confirmPassword?.message}
              </FieldError>
            </FieldContent>
          </Field>
        </div>

        {/* Terms */}
        <Field orientation="horizontal">
          <Checkbox
            id="terms"
            checked={agree}
            onCheckedChange={(checked) => setAgree(checked)}
          />

          <FieldLabel htmlFor="terms">
            Before signing up, I agree to the{" "}
            <span
              className="hover:text-blue-400 hover:underline cursor-pointer"
              onClick={() =>
                window.location.assign("https://docs.codewithajoydas.live/")
              }
            >
              terms and conditions
            </span>
          </FieldLabel>
        </Field>

        {/* Submit */}
        <Button type="submit" className="w-full">
          Sign Up
        </Button>

        <Link href="/login" className="text-xs text-center pb-2">
          Already have an account?{" "}
          <span className="text-blue-400 hover:underline">Login</span>
        </Link>
      </FieldGroup>

      {!agree && tryToSubmit && (
        <Alert
          variant="destructive"
          className="fixed bottom-2 right-2 w-88 z-10"
        >
          <Info />
          <AlertTitle className="text-left">Attention required</AlertTitle>
          <AlertDescription className="text-left">
            If you want to sign up, you must agree to the terms and conditions.
          </AlertDescription>
        </Alert>
      )}

      {showMessage.show && (
        <Alert
          variant={showMessage.type === "error" ? "destructive" : ""}
          className="fixed bottom-2 right-2 w-88 z-10"
        >
          <Info />
          <AlertTitle className="text-left capitalize">
            {showMessage.type}
          </AlertTitle>
          <AlertDescription className="text-left">{showMessage.message}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
