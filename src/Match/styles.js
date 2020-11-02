import styled from "styled-components";

export const MainDiv = styled.div`
  z-index: 0;
  > div {
    margin: 10px;
    > div {
      margin: 10px;
    }
  }
`;

export const FirstPlayer = styled.div`
  display: flex;
  > div {
    margin: 10px;
  }
`;

export const SecondPlayer = styled.div`
  display: flex;
  > div {
    margin: 10px;
  }
`;

export const Vs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfDiv = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Inf = styled.div`
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 80%;
  margin: 0 auto;
  z-index: 100000;
  position: relative;
  box-sizing: border-box;
  background: white;
`;
