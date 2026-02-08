import { FieldGroup } from "@/components/ui/field";
import GlobalButton from "@/components/ui/global-button";
import GlobalInput from "@/components/ui/global-input";
import en from "@/locales/en.json";
import { ForgetPasswordSchema } from "@/schemas/forget-password-schema";
import { Control, Controller } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";

interface IForgetPasswordFormProps {
  handleSubmit: () => void;
  t: (key: keyof typeof en) => string;
  control: Control<ForgetPasswordSchema>;
}

export default function ForgetPasswordForm({
  handleSubmit,
  t,
  control,
}: IForgetPasswordFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <GlobalInput<ForgetPasswordSchema, "email">
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
        <GlobalButton type="submit">
          {t("login.forgetPasswordModalSubmit")}
        </GlobalButton>
      </FieldGroup>
    </form>
  );
}
