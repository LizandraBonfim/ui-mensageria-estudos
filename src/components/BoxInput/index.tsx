import React, { ChangeEvent } from "react";
import Button from "../Button";
import Input from "../Input";
import { BoxButtons, BoxInput, InputContainer } from "./styles";

export interface PropsBoxnput {
  title: string;
  subtitle: string;
  quantityValue: number;
  onChangeQuantity: (e: ChangeEvent<HTMLInputElement>) => void;
  messageValue: number;
  onChangeMessage: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
  id: string
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
    id
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
            onChange={(e) => onChangeQuantity(e)}
            type="number"
            value={String(quantityValue)}
            label={"Quantidade"}
            id={id}
          />
          <Input
            onChange={(e) => onChangeMessage(e)}
            type="number"
            value={String(messageValue)}
            label={"Mensagens/s"}
            id={id}
          />
        </BoxInput>

        <BoxButtons>
          <Button
            onClick={onCancel}
            title="Cancelar"
            style={{ marginRight: 10 }}
          />
          <Button onClick={onSubmit} title="Adicionar" />
        </BoxButtons>
      </InputContainer>
    </BoxInput>
  );
}
