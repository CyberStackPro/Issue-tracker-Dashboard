import { z } from "zod";

export const issueSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters" })
    .max(255),
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters" })
    .max(255),
});
