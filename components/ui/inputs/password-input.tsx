import { cn } from "@/lib/utils";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../input-group";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { IconType } from "react-icons";

interface IPasswordInput<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
> {
  field: ControllerRenderProps<TFieldValues, TName>;
  startIcon?: IconType;
  className?: string;
  id: string;
  required?: boolean;
  placeholder: string;
  endIcon?: IconType;
  inputClassName?: string;
  eyeOnClick?: () => void;
  showPassword?: boolean;
}

export default function PasswordInput<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
>({
  field,
  startIcon: StartIcon,
  className,
  id,
  required,
  placeholder,
  endIcon: EndIcon,
  inputClassName,
  eyeOnClick,
  showPassword,
}: IPasswordInput<TFieldValues, TName>) {
  return (
    <InputGroup className={cn(className, "")}>
      {StartIcon && (
        <InputGroupAddon className="px-3">
          <StartIcon />
        </InputGroupAddon>
      )}
      <InputGroupInput
        type={showPassword ? "text" : "password"}
        {...field}
        id={id}
        required={required}
        placeholder={placeholder}
        className={cn(inputClassName, "")}
      />
      {EndIcon && (
        <InputGroupAddon
          align="inline-end"
          className="px-3 z-5"
          onClick={() => eyeOnClick?.()}
        >
          <EndIcon />
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}
