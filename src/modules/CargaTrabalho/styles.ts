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

  .element {
    animation-name: stretch;
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;
  }

  @keyframes stretch {
    0% {
      -webkit-box-shadow: 0 0 0 0 red;
      border-color: red;
    }
    70% {
      -webkit-box-shadow: 0 0 0 6px rgba(204, 169, 44, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  /* gap: 1rem; */
`;

export const WorkerContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  width: calc(20% - 16px);
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

export const WorkerContent = styled.div`
  display: flex;
  height: 40px;
  border-top: 1px solid #ccc;
`;

export const TrashButton = styled.button`
  width: 50%;
  border: none;
  background: none;
  cursor: pointer;
  border-right: 1px solid #ccc;
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
