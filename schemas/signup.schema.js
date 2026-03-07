import { z } from "zod";

export const signupSchema = z
  .object({
    firstName: z
      .string()
          .regex(/^[A-Za-z]+$/, {
        message: "First name must contain only letters",
      })
      .min(2)
      .max(20),
    lastName: z
      .string()
      .regex(/^[A-Za-z]+$/, {
        message: "Last name must contain only letters",
      })
      .min(2)
      .max(20),
      email: z.string().email({
      message: "Invalid email address",
      }),
    role: z.string().min(1, { message: "Role is required" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
    phone: z
      .string()
      .regex(/^[0-9]+$/, {
        message: "Phone number must contain only numbers",
      })
      .min(10)
      .max(10),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords not matched",
    path: ["confirmPassword"],
  });
