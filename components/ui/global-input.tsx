import { IconType } from "react-icons";
import { Field, FieldError, FieldLabel } from "./field";
import {
  ControllerRenderProps,
  ControllerFieldState,
  FieldValues,
  Path,
} from "react-hook-form";
import EmailInput from "./inputs/email-input";
import PasswordInput from "./inputs/password-input";
import { Checkbox } from "./checkbox";
import { HiOutlineMail } from "react-icons/hi";

export type InputType = "text" | "password" | "email" | "checkbox";

const inputClassName =
  "focus-visible:border-primary focus-visible:ring-primary/20 dark:focus-visible:ring-primary/40";

interface IGlobalInputProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
> {
  placeholder?: string;
  required?: boolean;
  startIcon?: IconType;
  inputType: InputType;
  endIcon?: IconType;
  field: ControllerRenderProps<TFieldValues, TName>;
  fieldState: ControllerFieldState;
  fieldID: string;
  label?: string;
  eyeOnClick?: () => void;
}

const InputWrapper = <
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
>(
  input: InputType,
  field: ControllerRenderProps<TFieldValues, TName>,
  startIcon: IconType,
  fieldID: string,
  placeholder: string,
  endIcon?: IconType,
  required?: boolean,
  eyeOnClick?: () => void,
) => {
  switch (input) {
    case "email":
      return (
        <EmailInput
          field={field}
          startIcon={startIcon}
          id={fieldID}
          required={required}
          placeholder={placeholder}
          inputClassName={inputClassName}
        />
      );
    case "password":
    case "text":
      return (
        <PasswordInput
          field={field}
          startIcon={startIcon}
          id={fieldID}
          required={required}
          placeholder={placeholder}
          inputClassName={inputClassName}
          endIcon={endIcon}
          eyeOnClick={eyeOnClick}
          showPassword={input === "text"}
        />
      );
    case "checkbox":
      return <Checkbox id={fieldID} {...field} />;

    default:
      return <input type="text" />;
  }
};

export default function GlobalInput<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
>({
  placeholder,
  startIcon,
  inputType,
  endIcon,
  field,
  fieldState,
  fieldID,
  label,
  required,
  eyeOnClick,
}: IGlobalInputProps<TFieldValues, TName>) {
  return (
    <Field
      data-invalid={fieldState.invalid}
      orientation={inputType === "checkbox" ? "horizontal" : "vertical"}
    >
      {/* label */}
      {label && inputType !== "checkbox" && (
        <FieldLabel htmlFor={fieldID}>
          {label}
          {required && (
            <span className="text-red-500 text-sm font-bold">*</span>
          )}
        </FieldLabel>
      )}
      {/* input */}
      {InputWrapper(
        inputType,
        field,
        startIcon ?? HiOutlineMail,
        fieldID,
        placeholder ?? "",
        endIcon,
        required,
        eyeOnClick,
      )}
      {inputType === "checkbox" && (
        <FieldLabel htmlFor={fieldID}>{label}</FieldLabel>
      )}
      {/* error */}
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
}
