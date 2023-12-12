import TextField, { TextFieldProps } from "@mui/material/TextField";
import { Control, Controller } from "react-hook-form";

interface ControlledTextInputProps
  extends Pick<
    TextFieldProps,
    "fullWidth" | "variant" | "className" | "id" | "label" | "required"
  > {
  control: Control<any>;
  name: string;
}

export const ControlledTextInput = (props: ControlledTextInputProps) => {
  const { control, name, ...inputProps } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <TextField
            {...inputProps}
            {...field}
            error={!!fieldState.invalid}
            helperText={fieldState.error?.message}
          />
        );
      }}
    />
  );
};
