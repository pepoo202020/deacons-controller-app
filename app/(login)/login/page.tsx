"use client";
import ForgetPasswordForm from "@/components/pages/login/forget-password-form";
import LoginForm from "@/components/pages/login/login-form";
import LoginLogo from "@/components/pages/login/login-logo";
import { Card } from "@/components/ui/card";
import GlobalModal from "@/components/ui/global-modal";
import { useLanguage } from "@/context/LanguageContext";
import {
  ForgetPasswordSchema,
  forgetPasswordSchema,
} from "@/schemas/forget-password-schema";
import { LoginFormSchema, loginFormSchema } from "@/schemas/login-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { t } = useLanguage();
  const loginForm = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema(t)),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const forgetPasswordForm = useForm<ForgetPasswordSchema>({
    resolver: zodResolver(forgetPasswordSchema(t)),
    defaultValues: {
      email: "",
    },
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [forgetPasswordModal, setForgetPasswordModal] =
    useState<boolean>(false);

  const onSubmit = (data: LoginFormSchema) => {
    //  get data
    const { email, password, rememberMe } = data;
    // login action
    // show toast message
    alert(`Email: ${email}, Password: ${password}, Remember Me: ${rememberMe}`);
    // reset the form
    loginForm.reset();
  };

  const forgetPasswordSubmit = (data: ForgetPasswordSchema) => {
    // get data
    const { email } = data;

    // forget password action
    // show a toast message with the error or the success
    alert(email);
    // reset the form
    forgetPasswordForm.reset();
    // close the modal
    setForgetPasswordModal(false);
  };

  const eyeClickHandler = () => {
    setShowPassword((prev) => !prev);
  };

  const forgetPasswordModalOpen = () => {
    setForgetPasswordModal((prev) => !prev);
  };

  return (
    <>
      <Card className="w-full h-fit border-2 border-primary bg-white flex flex-col justify-center items-center gap-2">
        <LoginLogo t={t} />
        <h3 className="text-2xl font-bold">{t("login.title")}</h3>
        <p className="text-muted-foreground">{t("login.subtitle")}</p>
        <div className="w-full px-2">
          <LoginForm
            handleSubmit={loginForm.handleSubmit(onSubmit)}
            control={loginForm.control}
            t={t}
            eyeOnClick={eyeClickHandler}
            showPassword={showPassword}
            forgetPasswordModalOpen={forgetPasswordModalOpen}
          />
        </div>
      </Card>
      <GlobalModal
        open={forgetPasswordModal}
        onOpenChange={forgetPasswordModalOpen}
        title={t("login.forgetPasswordModalTitle")}
        description={t("login.forgetPasswordModalDescription")}
        content={
          <ForgetPasswordForm
            handleSubmit={forgetPasswordForm.handleSubmit(forgetPasswordSubmit)}
            t={t}
            control={forgetPasswordForm.control}
          />
        }
      />
    </>
  );
}
