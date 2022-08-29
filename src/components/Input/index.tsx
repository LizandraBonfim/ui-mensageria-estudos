import React, { ChangeEvent } from "react";
import { InputWrapper, Label } from "./styles";

export interface PropsInput {
  value: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  id: string
}
export default function Input(props: PropsInput) {
  const { value, type, onChange, label , id} = props;
  console.log({ value });
  return (
    <div>
      {label ? <Label>{label}</Label> : null}
      <InputWrapper type={type} value={value} onChange={onChange} id={id}/>
    </div>
  );
}
