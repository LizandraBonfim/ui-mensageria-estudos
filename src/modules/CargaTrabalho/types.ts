export interface IWorker extends IWorkerContent {
  id: number;
}

export interface IWorkerContent {
  quantity: number;
  message: number;
}

export const INITIAL = {
  message: 0,
  quantity: 0,
};

export enum TypeWorker {
  WORKLOAD = "WORKLOAD",
  METRICAS = "METRICAS",
}

export type TypeWorkerEnum = keyof typeof TypeWorker;
