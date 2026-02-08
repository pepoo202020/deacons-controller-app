import en from "@/locales/en.json";
import z from "zod";

export const loginFormSchema = (t: (key: keyof typeof en) => string) => {
  return z.object({
    email: z.email(t("login.email.error")),
    password: z.string().min(6, t("login.password.error")),
    rememberMe: z.boolean(),
  });
};

export type LoginFormSchema = z.infer<ReturnType<typeof loginFormSchema>>;
