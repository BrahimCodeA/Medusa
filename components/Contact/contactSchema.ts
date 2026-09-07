import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),

  email: z.string().email("Adresse email invalide"),

  date: z.string().min(1, "Veuillez choisir une date"),

  guests: z.string().min(1, "Veuillez choisir le nombre de convives"),

  message: z
    .string()
    .max(500, "Le message ne peut pas dépasser 500 caractères")
    .optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
