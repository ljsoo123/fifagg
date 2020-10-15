import React, { useState, useRef } from "react";
import * as S from "./styles";

const Home = ({ history }) => {
  const inputRef = useRef(null);
  const onBtnClick = () => {
    history.push(`/Profile/${inputRef.current.value}`);
  };
  return (
    <S.Main>
      <input ref={inputRef} />
      <button onClick={onBtnClick} />
    </S.Main>
  );
};

export default Home;
