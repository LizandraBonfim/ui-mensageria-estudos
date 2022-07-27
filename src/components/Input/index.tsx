import React, { ChangeEvent } from "react";
import { InputWrapper, Label } from "./styles";

export interface PropsInput {
  value: number;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}
export default function Input(props: PropsInput) {
  const { value, type, onChange, label } = props;
  return (
    <div>
      {label ? <Label>{label}</Label> : null}
      <InputWrapper type={type} value={value} onChange={onChange} />
    </div>
  );
}
