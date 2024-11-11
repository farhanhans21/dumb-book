import { z } from "zod";

export const loginSchema = z.object({
  username: z.string(),
  password: z.string().min(4, "password is required"),
})

export const registerSchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  password: z.string().min(4, "password is required"),
  role: z.string()
})

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>