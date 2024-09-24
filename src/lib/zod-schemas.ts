import { z } from "zod";

export const CreateTransactionSchema = z.object({
  type: z.enum(["expense", "income"]),
  title: z
    .string()
    .min(1, {
      message: "Title cannot be empty",
    })
    .max(255, {
      message: "Title cannot be more than 255 characters",
    }),
  amount: z
    .number()
    .min(1, {
      message: "Amount cannot be empty",
    })
    .max(15_000_000, {
      message: "Amount cannot be more than 15.000.000",
    }),
  currency: z.enum(["UYU", "ARG", "USD"]),
  date: z.date({
    message: "Date is invalid",
  }),
  description: z
    .string()
    .max(255, {
      message: "Description cannot be more than 255 characters",
    })
    .optional(),
});
