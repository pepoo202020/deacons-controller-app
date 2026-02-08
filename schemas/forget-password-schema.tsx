import en from "@/locales/en.json";
import z from "zod";

export const forgetPasswordSchema = (t: (key: keyof typeof en) => string) => {
  return z.object({
    email: z.email(t("login.email.error")),
  });
};

export type ForgetPasswordSchema = z.infer<
  ReturnType<typeof forgetPasswordSchema>
>;
