import React, { useState } from "react";
import groupIcon from "../../assets/images/group.png";
import graphicIcon from "../../assets/images/grafico.png";
import graphicLowIcon from "../../assets/images/grafico2.png";
import configIcon from "../../assets/images/config.png";
import groupGrey from "../../assets/images/group-grey.png";
import nucleo from "../../assets/images/processador.png";

import {
  BorderRight,
  BoxText,
  Flex,
  Grid,
  Icons,
  Subtitle,
  Title,
  WorkerContainer,
  WorkerContent,
  WorkerImage,
} from "./styles";
import BoxInputContainer from "../../components/BoxInput";
import Metricas from "../../components/Metricas";

export default function CargaTrabalho() {
  const [workload, setWorkload] = useState({
    quantity: 0,
    message: 0,
  });
  const [metricas, setMetricas] = useState({
    quantity: 0,
    message: 0,
  });

  function renderText(icon: string, title: string, subtitle: string) {
    return (
      <BoxText>
        <Icons>
          <img src={icon} alt="" width={25} />
        </Icons>
        <div>
          <strong>{title}</strong>
          <p>{subtitle}</p>
        </div>
      </BoxText>
    );
  }
  function renderWorkers(icon: string, value: number, borderColor?: string) {
    return (
      <WorkerContainer style={{ borderColor }}>
        <p style={{ padding: 16 }}>{value} m/s</p>
        <WorkerContent>
          <BorderRight />
          <WorkerImage>
            <img src={icon} alt="" width={25} height={25} />
          </WorkerImage>
        </WorkerContent>
      </WorkerContainer>
    );
  }

  function handleCancel(type: "workload" | "metricas") {
    if (type === "workload") {
      setWorkload({
        message: 0,
        quantity: 0,
      });
      return;
    }

    setMetricas({
      message: 0,
      quantity: 0,
    });
  }

  function handleSubmit(type: "workload" | "metricas") {
    if (type === "workload") {
      return;
    }
  }

  function handleMessage(type: "workload" | "metricas", message: number) {
    console.log(message)
    if (type === "workload") {
      setWorkload({
        quantity: workload.quantity,
        message,
      });
      return;
    }

    setMetricas({
      quantity: workload.quantity,
      message,
    });
  }

  function handleQuantity(type: "workload" | "metricas", quantity: number) {
    if (type === "workload") {
      setWorkload({
        quantity: workload.quantity,
        message: quantity,
      });
      return;
    }

    setMetricas({
      quantity: workload.quantity,
      message: quantity,
    });
  }

  return (
    <div>
      <Subtitle>Análise</Subtitle>
      <Title>Comportamento de Processamento Assíncrono</Title>
      <p
        style={{
          textAlign: "center",
        }}
      >
        Aqui coordenamos cargas de trabalho e consumo de forma interativa.
      </p>

      <Grid>
        <div style={{ width: "50%" }}>
          {renderText(
            groupIcon,
            "Carga de trabalho",
            "Aqui simulamos aumento de requests por segundo, seja por uma massa de usuários, clientes consumindo nossas API'S, periodos do mês etc"
          )}

          <BoxInputContainer
            subtitle="Aqui você adiciona uma carga de trabalho"
            title="Adicionar"
            messageValue={workload.message}
            quantityValue={workload.quantity}
            onCancel={() => handleCancel("workload")}
            onSubmit={() => handleSubmit("workload")}
            onChangeMessage={(e) => handleMessage("workload", Number(e))}
            onChangeQuantity={(e) => handleQuantity("workload", Number(e))}
          />
          <Flex>
            <Metricas
              image={groupIcon}
              quantity={3}
              title="Workloads (Qtd)"
              borderColor="#9797ff"
              background="#9797ff"
            />
            <Metricas
              image={graphicIcon}
              quantity={3}
              title="Força do Workloads (Msg/s)"
              borderColor="#9797ff"
              background="#9797ff"
            />
          </Flex>
          <Flex>
            {renderWorkers(groupGrey, 3, "#9797ff")}
            {renderWorkers(groupGrey, 3, "#9797ff")}
          </Flex>
        </div>

        <div style={{ width: "50%" }}>
          {renderText(
            configIcon,
            "Unidade de processamento",
            "Aqui simulamos aumento da capacidade, seja por alocação de mais hardware, otimização de operações etc"
          )}

          <BoxInputContainer
            subtitle="Aqui você adiciona um novo worker"
            title="Adicionar"
            messageValue={metricas.message}
            quantityValue={metricas.quantity}
            onCancel={() => handleCancel("metricas")}
            onSubmit={() => handleSubmit("metricas")}
            onChangeMessage={(e) => handleMessage("metricas", Number(e))}
            onChangeQuantity={(e) => handleQuantity("metricas", Number(e))}
          />
          <Flex>
            <Metricas
              image={configIcon}
              quantity={3}
              title="Workers (Qtd)"
              borderColor="red"
              background="red"
            />
            <Metricas
              image={graphicLowIcon}
              quantity={3}
              title="Capacidade de consumo (Msg/s)"
              borderColor="red"
              background="red"
            />
          </Flex>

          <Flex>
            {renderWorkers(nucleo, 5, "red")}
            {renderWorkers(nucleo, 5, "red")}
          </Flex>
        </div>
      </Grid>
    </div>
  );
}
