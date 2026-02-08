import { FieldGroup } from "@/components/ui/field";
import GlobalInput from "@/components/ui/global-input";
import { LoginFormSchema } from "@/schemas/login-form-schema";
import { Control, Controller } from "react-hook-form";

import en from "@/locales/en.json";
import { HiEye, HiEyeOff, HiOutlineMail } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import GlobalButton from "@/components/ui/global-button";
interface ILoginFormPops {
  handleSubmit: () => void;
  control: Control<LoginFormSchema>;
  t: (key: keyof typeof en) => string;
  eyeOnClick: () => void;
  showPassword: boolean;
  forgetPasswordModalOpen: () => void;
}

export default function LoginForm({
  handleSubmit,
  control,
  t,
  showPassword,
  eyeOnClick,
  forgetPasswordModalOpen,
}: ILoginFormPops) {
  return (
    <form onSubmit={handleSubmit} className="px-3 mt-2">
      <FieldGroup>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <GlobalInput<LoginFormSchema, "email">
              fieldID="email"
              fieldState={fieldState}
              inputType="email"
              label={t("login.email.label")}
              placeholder={t("login.email.placeholder")}
              startIcon={HiOutlineMail}
              field={field}
              required={true}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <GlobalInput<LoginFormSchema, "password">
              fieldID="password"
              fieldState={fieldState}
              inputType={showPassword ? "text" : "password"}
              label={t("login.password.label")}
              placeholder={t("login.password.placeholder")}
              startIcon={FaLock}
              field={field}
              required={true}
              eyeOnClick={eyeOnClick}
              endIcon={showPassword ? HiEyeOff : HiEye}
            />
          )}
        />
        <div className="flex items-center justify-between">
          <Controller
            name="rememberMe"
            control={control}
            render={({ field, fieldState }) => (
              <GlobalInput<LoginFormSchema, "rememberMe">
                fieldID="rememberMe"
                fieldState={fieldState}
                inputType="checkbox"
                label={t("login.rememberMe")}
                field={field}
              />
            )}
          />
          <div
            onClick={forgetPasswordModalOpen}
            className="text-primary text-sm w-full text-end cursor-pointer hover:underline"
          >
            {t("login.forgotPassword")}
          </div>
        </div>
        <GlobalButton type="submit">{t("login.submit")}</GlobalButton>
      </FieldGroup>
    </form>
  );
}
