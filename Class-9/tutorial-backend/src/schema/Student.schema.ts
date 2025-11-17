import {z} from "zod"

export const StudentSchema = z.object({
  studentId: z.uuid(),
  studentFirstName: z.string(),
  studentLastName: z.string(),
  studentMiddleName: z.string().optional(),
  studentEmail: z.email(),
  studentCountry: z.string().optional(),
  studentGroup: z.enum(["home", "int"]),
  studentCreatedAt: z.date().optional(),
  studentUpdatedAt: z.date().optional(),
})

export type StudentType = z.infer<typeof StudentSchema>;