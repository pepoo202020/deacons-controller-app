import en from "@/locales/en.json";

export const forgetPassword = async (
  email: string,
  t: (key: keyof typeof en) => string,
) => {
  //  verify email exists in the database or not
  // if doesn't exist return email doesn't exist or has been entered false
  // if exists get the admin email
  // send a template email to the admin email with the email entered of the user
  // return email sent successfully or has been sent false
};
