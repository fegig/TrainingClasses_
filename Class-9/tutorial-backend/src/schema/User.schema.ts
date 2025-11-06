import {z} from "zod"

export const UserSchema = z.object({
  userId: z.uuid(),
  name: z.string(),
  email: z.email(),
  password: z.string(),
  role: z.enum(["admin", "user"]).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type UserType = z.infer<typeof UserSchema>;