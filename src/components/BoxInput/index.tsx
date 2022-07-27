import React from "react";
import Button from "../Button";
import Input from "../Input";
import { BoxButtons, BoxInput, InputContainer } from "./styles";

export interface PropsBoxnput {
  title: string;
  subtitle: string;
  quantityValue: number;
  onChangeQuantity: (value: string) => void;
  messageValue: number;
  onChangeMessage: (value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

export default function BoxInputContainer(props: PropsBoxnput) {
  const {
    subtitle,
    title,
    messageValue,
    onCancel,
    onChangeMessage,
    onChangeQuantity,
    onSubmit,
    quantityValue,
  } = props;
  console.log({ messageValue, quantityValue });
  return (
    <BoxInput>
      <span>
        <strong>{title}</strong>
        <p>{subtitle}</p>
      </span>

      <InputContainer>
        <BoxInput style={{ padding: 16 }}>
          <Input
            onChange={(e) => onChangeQuantity(e.target.value)}
            type="number"
            value={messageValue}
            label={"Quantidade"}
          />
          <Input
            onChange={(e) => onChangeMessage(e.target.value)}
            type="number"
            value={quantityValue}
            label={"Mensagens/s"}
          />
        </BoxInput>

        <BoxButtons>
          <Button
            onChange={onCancel}
            title="Cancelar"
            style={{ marginRight: 10 }}
          />
          <Button onChange={onSubmit} title="Adicionar" />
        </BoxButtons>
      </InputContainer>
    </BoxInput>
  );
}
