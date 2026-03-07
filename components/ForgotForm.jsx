"use client";
import { Info, Link as LinkIcon, Mail } from "lucide-react";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Button } from "./ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { forgotSchema } from "@/schemas/forgot.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Spinner } from "./ui/spinner";
import { useRouter } from "next/navigation";

export default function ForgotForm() {
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgotSchema),
  });
  const sendResetLink = async (data) => {
    setSubmitted(true);
    const res = await fetch("http://localhost:8080/api/forgotPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (res.ok) {
        setSubmitted(false);
        router.push("/mailsend");
    } else {
      alert(result.message);
      setSubmitted(false);
    }
  };
  return (
    <form action="" className="w-75" onSubmit={handleSubmit(sendResetLink)}>
      <FieldGroup className={"w-75 text-red"}>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <InputGroup>
            <InputGroupInput
              placeholder="example@xyz.com"
              {...register("email")}
              aria-invalid={errors.email ? true : false}
            />
            <InputGroupAddon align="inline-end">
              <Mail />
            </InputGroupAddon>
          </InputGroup>
          <FieldError>{errors.email?.message}</FieldError>
          <p className="text-xs flex items-center gap-2 text-yellow-500">
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
          <Button className={"cursor-pointer"} disabled={submitted}>
              {!submitted ? (
                <>
                  <LinkIcon size={16} />
                  Send Reset Link
                </>
              ) : (
                <>
                  <Spinner /> Sending...
                </>
              )}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
