import React, { useRef, useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as S from "./styles";
const Match = ({ matchData }) => {
  let history = useHistory();
  const inputRef = useRef(null);
  const [matchIn, setMatchIn] = useState([]);
  matchData = matchData[0];
  useEffect(() => {
    const data = matchData.map((gameId) =>
      axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${gameId}`, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTY0NDc3NDY0MyIsImF1dGhfaWQiOiIyIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsIlgtQXBwLVJhdGUtTGltaXQiOiI1MDA6MTAiLCJuYmYiOjE2MDI2NzA3NDgsImV4cCI6MTYxODIyMjc0OCwiaWF0IjoxNjAyNjcwNzQ4fQ.bJSyiju8IDbyaKxagdpTB1bV2zMw5ExOem_L5TjTZ-Y",
        },
      })
    );
    Promise.all(data).then((data) => {
      const gameData = data.map((res) => res.data);
      gameData.sort((a, b) => new Date(a.matchDate) - new Date(b.matchDate));
      setMatchIn(gameData);
    });
  }, []);
  const onBtnClick = useCallback(
    (index) => {
      console.log(matchIn[index]);
    },
    [matchIn]
  );
  return (
    <S.MainDiv>
      {matchIn.map((match, i) => {
        console.log(match);
        const firstIsWin = match.matchInfo[0].matchDetail.matchResult === "승";
        console.log(firstIsWin);
        const result = match.matchInfo[0].matchDetail.matchResult === "무";
        return (
          <S.List ref={inputRef}>
            <S.FirstPlayer>
              <div>{firstIsWin ? "승" : result ? "무" : "패"}</div>
              <div></div>
              <div>
                {console.log(match.matchInfo[0].shoot.goalTotal)}
                {firstIsWin
                  ? match.matchInfo[0].nickname
                  : match.matchInfo[1].nickname}
              </div>
              <div>
                {firstIsWin
                  ? match.matchInfo[0].shoot.goalTotal
                  : match.matchInfo[1].shoot.goalTotal}
              </div>
            </S.FirstPlayer>
            <S.Vs> vs </S.Vs>
            <S.SecondPlayer>
              <div>
                {!firstIsWin
                  ? match.matchInfo[0].shoot.goalTotal
                  : match.matchInfo[1].shoot.goalTotal}
              </div>
              <div>
                {!firstIsWin
                  ? match.matchInfo[0].nickname
                  : match.matchInfo[1].nickname}
              </div>
              <div>{result ? "무" : !firstIsWin ? "승" : "패"}</div>
            </S.SecondPlayer>
            <div>{match.matchDate}</div>
            <button
              onClick={() => {
                onBtnClick(i);
              }}
            >
              상세정보
            </button>
          </S.List>
        );
      })}
      {<div>{matchIn.matchInfo}</div>}
    </S.MainDiv>
  );
};

export default Match;
