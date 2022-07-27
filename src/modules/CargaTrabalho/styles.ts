import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Regular";
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-family: "Light";
  text-align: center;
  margin-top: 32px;
`;

export const Icons = styled.div`
  background: #9d2ee9;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const BoxText = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e9e6e6;
  height: 80px;
`;

export const Grid = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 32px;
`;

export const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;

export const WorkerContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const WorkerContent = styled.div`
  display: flex;
  width: 140px;
  height: 40px;
  border-top: 1px solid #ccc;
`;

export const BorderRight = styled.span`
  width: 50%;
  border-right: 1px solid #ccc;
`;

export const WorkerImage = styled.figure`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: center;
`;
