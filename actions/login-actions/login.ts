import { LoginFormSchema } from "@/schemas/login-form-schema";
import en from "@/locales/en.json";

export default async function login(
  data: LoginFormSchema,
  t: (key: keyof typeof en) => string,
) {
  // get data
  const { email, password, rememberMe } = data;
  // handle login action
  // check if user exists
  // if user exists, check if password is correct
  // if password is correct, check if remember me is checked
  // if remember me is checked, set cookie and set local storage
  // if remember me is not checked, set session
  // if user is logged in, redirect to dashboard
  // if user is not logged in, redirect to login
}
