import React from "react";
import { ButtonWrapper } from "./styles";

export interface PropsButton {
  onClick: () => void;
  title: string;
  style?: React.CSSProperties;
}
export default function Button(props: PropsButton) {
  const { onClick, title, style } = props;
  return (
    <ButtonWrapper onClick={onClick} style={style}>
      {title}
    </ButtonWrapper>
  );
}
