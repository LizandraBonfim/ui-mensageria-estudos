import React from "react";
import { BackgroundIcon, CardContainer } from "./styles";

export interface IMetricas {
  image: string;
  title: string;
  quantity: number;
  borderColor?: string;
  background?: string;
  marginRight?: number;
}
export default function Metricas(props: IMetricas) {
  const { image, quantity, title, borderColor, background, marginRight } = props;
  return (
    <CardContainer style={{ borderColor, marginRight }}>
      <BackgroundIcon style={{ background: background ? background : "red" }}>
        <img src={image} alt="" width={25} />
      </BackgroundIcon>
      <span>
        <p>{title}</p>
        <strong>{quantity}</strong>
      </span>
    </CardContainer>
  );
}
