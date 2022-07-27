import React from "react";
import { ButtonWrapper } from "./styles";

export interface PropsButton {
  onChange: () => void;
  title: string;
  style?: React.CSSProperties;
}
export default function Button(props: PropsButton) {
  const { onChange, title, style } = props;
  return (
    <ButtonWrapper onChange={onChange} style={style}>
      {title}
    </ButtonWrapper>
  );
}
