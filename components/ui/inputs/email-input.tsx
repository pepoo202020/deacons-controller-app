import { cn } from "@/lib/utils";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../input-group";
import { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { IconType } from "react-icons";

interface IEmailInput<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
> {
  field: ControllerRenderProps<TFieldValues, TName>;
  startIcon?: IconType;
  className?: string;
  id: string;
  required?: boolean;
  placeholder: string;
  inputClassName?: string;
}

export default function EmailInput<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>,
>({
  field,
  startIcon: StartIcon,
  className,
  id,
  required,
  placeholder,
  inputClassName,
}: IEmailInput<TFieldValues, TName>) {
  return (
    <InputGroup className={cn(className, "")}>
      {StartIcon && (
        <InputGroupAddon className="px-3">
          <StartIcon />
        </InputGroupAddon>
      )}
      <InputGroupInput
        type="email"
        {...field}
        id={id}
        required={required}
        placeholder={placeholder}
        className={cn(inputClassName, "")}
      />
    </InputGroup>
  );
}
