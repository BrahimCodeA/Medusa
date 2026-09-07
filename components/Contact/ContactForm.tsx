"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema, type ContactFormData } from "./contactSchema";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <Field label="Nom" error={errors.name?.message}>
          <input
            {...register("name")}
            type="text"
            placeholder="Votre nom"
            className="w-full border-b border-[#171512]/20 bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-[#171512]/30 focus:border-[#171512]"
          />
        </Field>

        <Field label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            placeholder="votre@email.fr"
            className="w-full border-b border-[#171512]/20 bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-[#171512]/30 focus:border-[#171512]"
          />
        </Field>
      </div>

      <div className="grid gap-10 sm:grid-cols-2">
        <Field label="Date" error={errors.date?.message}>
          <input
            {...register("date")}
            type="date"
            className="w-full border-b border-[#171512]/20 bg-transparent pb-3 text-sm outline-none transition-colors focus:border-[#171512]"
          />
        </Field>

        <Field label="Convives" error={errors.guests?.message}>
          <select
            {...register("guests")}
            defaultValue=""
            className="w-full border-b border-[#171512]/20 bg-transparent pb-3 text-sm outline-none transition-colors focus:border-[#171512]"
          >
            <option value="" disabled>
              Nombre de personnes
            </option>

            <option value="1">1 personne</option>
            <option value="2">2 personnes</option>
            <option value="3">3 personnes</option>
            <option value="4">4 personnes</option>
            <option value="5">5 personnes</option>
            <option value="6">6 personnes</option>
            <option value="7+">7 personnes ou plus</option>
          </select>
        </Field>
      </div>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Une demande particulière ?"
          className="w-full resize-none border-b border-[#171512]/20 bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-[#171512]/30 focus:border-[#171512]"
        />
      </Field>

      <div className="flex items-center gap-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex items-center gap-5 text-[10px] uppercase tracking-[0.25em] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="border-b border-[#171512] pb-2">
            {isSubmitting ? "Envoi..." : "Envoyer la demande"}
          </span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        {isSubmitSuccessful && (
          <p className="text-xs text-[#6f675f]">
            Votre demande a bien été envoyée.
          </p>
        )}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <div>
      <label className="mb-3 block text-[9px] uppercase tracking-[0.25em] text-[#8b7455]">
        {label}
      </label>

      {children}

      {error && <p className="mt-2 text-xs text-red-700">{error}</p>}
    </div>
  );
}
