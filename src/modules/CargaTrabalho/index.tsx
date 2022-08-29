import { ChangeEvent, useState } from "react";
import cogoToast from "cogo-toast";

import groupIcon from "../../assets/images/group.png";
import graphicIcon from "../../assets/images/grafico.png";
import graphicLowIcon from "../../assets/images/grafico2.png";
import configIcon from "../../assets/images/config.png";
import groupGrey from "../../assets/images/group-grey.png";
import lixoIcon from "../../assets/images/lixo.png";
import nucleo from "../../assets/images/processador.png";

import {
  BoxText,
  Flex,
  Grid,
  Icons,
  Subtitle,
  Title,
  TrashButton,
  WorkerContainer,
  WorkerContent,
  WorkerImage,
} from "./styles";
import BoxInputContainer from "../../components/BoxInput";
import Metricas from "../../components/Metricas";
import cogoDefaultOptions from "../../components/util/toast";
import { INITIAL, IWorker, TypeWorker, TypeWorkerEnum } from "./types";

export default function CargaTrabalho() {
  const [workload, setWorkload] = useState(INITIAL);
  const [metricas, setMetricas] = useState(INITIAL);

  const [arrayWorkload, setArrayWorkload] = useState<IWorker[]>([]);
  const [arrayMetricas, setArrayMetricas] = useState<IWorker[]>([]);

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

  function onDelete(type: TypeWorkerEnum, id: number) {
    document.getElementById(String(id))?.classList.add("element");
    if (type === TypeWorker.WORKLOAD) {
      setTimeout(() => {
        setArrayWorkload((item) => item.filter((x) => x.id !== id));
        cogoToast.success(
          `Carga de trabalho ${id} deletada`,
          cogoDefaultOptions
        );
        document.getElementById(String(id))?.classList.remove("element");
      }, 3000);

      return;
    }

    setTimeout(() => {
      setArrayMetricas((item) => item.filter((x) => x.id !== id));
      cogoToast.success(`Processador ${id} deletado`, cogoDefaultOptions);
      document.getElementById(String(id))?.classList.remove("element");
    }, 3000);
  }

  function renderWorkers(
    icon: string,
    value: number,
    type: TypeWorkerEnum,
    id: number,
    borderColor?: string
  ) {
    return (
      <WorkerContainer id={String(id)} style={{ borderColor }}>
        <p style={{ padding: 16 }}>{value} m/s</p>
        <WorkerContent>
          <TrashButton onClick={() => onDelete(type, id)}>
            <img src={lixoIcon} alt="" width={25} height={25} />
          </TrashButton>
          <WorkerImage>
            <img src={icon} alt="" width={25} height={25} />
          </WorkerImage>
        </WorkerContent>
      </WorkerContainer>
    );
  }

  function handleCancel(type: TypeWorkerEnum) {
    type === TypeWorker.WORKLOAD ? setWorkload(INITIAL) : setMetricas(INITIAL);
  }

  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function buildingBox(quantity: number, message: number) {
    let array = [];
    for (let index = 0; index < quantity; index++) {
      array.push({
        id: randomIntFromInterval(5, 1000),
        message: message,
        quantity: quantity,
      });
    }

    return array;
  }

  function handleSubmit(type: TypeWorkerEnum) {
    if (type === TypeWorker.WORKLOAD) {
      let array = buildingBox(workload.quantity, workload.message);
      setArrayWorkload([...arrayWorkload, ...array]);
      return;
    }
    let array = buildingBox(metricas.quantity, metricas.message);
    setArrayMetricas([...arrayMetricas, ...array]);
  }

  function handleMessage(event: ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;
    let formatValue = Number.parseInt(value);
    if (isNaN(formatValue) || !value) formatValue = 0;
    if (id === TypeWorker.WORKLOAD) {
      setWorkload({
        quantity: workload.quantity,
        message: formatValue,
      });

      return;
    }

    setMetricas({
      quantity: metricas.quantity,
      message: formatValue,
    });
  }

  function handleQuantity(event: ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;
    let formatValue = Number.parseInt(value);
    if (id === TypeWorker.WORKLOAD) {
      setWorkload({
        message: workload.message,
        quantity: formatValue,
      });

      return;
    }
    setMetricas({
      message: metricas.message,
      quantity: formatValue,
    });
  }

  function calculateCount(worker: IWorker[]) {
    return worker.reduce((count, work: IWorker) => {
      return count + work.message;
    }, 0);
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
            onCancel={() => handleCancel(TypeWorker.WORKLOAD)}
            onSubmit={() => handleSubmit(TypeWorker.WORKLOAD)}
            onChangeMessage={(e) => handleMessage(e)}
            onChangeQuantity={(e) => handleQuantity(e)}
            id={TypeWorker.WORKLOAD}
          />
          <Flex>
            <Metricas
              image={groupIcon}
              quantity={arrayWorkload.length | 0}
              title="Workloads (Qtd)"
              borderColor="#9797ff"
              background="#9797ff"
              marginRight={16}
            />
            <Metricas
              image={graphicIcon}
              quantity={calculateCount(arrayWorkload) | 0}
              title="Força do Workloads (Msg/s)"
              borderColor="#9797ff"
              background="#9797ff"
            />
          </Flex>
          <Flex style={{ flexWrap: "wrap" }}>
            {arrayWorkload.length > 0 &&
              arrayWorkload.map((x, i) => {
                return renderWorkers(
                  groupGrey,
                  x.message,
                  TypeWorker.WORKLOAD,
                  x.id,
                  "#9797ff"
                );
              })}
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
            onCancel={() => handleCancel(TypeWorker.METRICAS)}
            onSubmit={() => handleSubmit(TypeWorker.METRICAS)}
            onChangeMessage={(e) => handleMessage(e)}
            onChangeQuantity={(e) => handleQuantity(e)}
            id={TypeWorker.METRICAS}
          />
          <Flex>
            <Metricas
              image={configIcon}
              quantity={arrayMetricas.length | 0}
              title="Workers (Qtd)"
              borderColor="red"
              background="red"
              marginRight={16}
            />
            <Metricas
              image={graphicLowIcon}
              quantity={calculateCount(arrayMetricas) | 0}
              title="Capacidade de consumo (Msg/s)"
              borderColor="red"
              background="red"
            />
          </Flex>

          <Flex style={{ flexWrap: "wrap" }}>
            {arrayMetricas.length > 0 &&
              arrayMetricas.map((x, i) => {
                return renderWorkers(
                  nucleo,
                  x.message,
                  TypeWorker.METRICAS,
                  x.id,
                  "red"
                );
              })}
          </Flex>
        </div>
      </Grid>
    </div>
  );
}
