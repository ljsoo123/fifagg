import styled from "styled-components";

export const MainDiv = styled.div`
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

export const Inf = styled.div`
  width: 0;
  height: 0;
  display: none;
`;
