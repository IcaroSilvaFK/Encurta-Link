import { Controller, useFormContext } from "react-hook-form";

interface IInputProps {
  name: string;
  placeholder: string;
}

export function Input({ name, placeholder }: IInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <input placeholder={placeholder} {...field} />}
    />
  );
}
