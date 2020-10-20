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
      gameData.sort((a, b) => new Date(b.matchDate) - new Date(a.matchDate));
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
        let penaltyShootOut = false;
        console.log(match);
        const firstIsWin = match.matchInfo[0].matchDetail.matchResult === "승";
        console.log(firstIsWin);
        const result = match.matchInfo[0].matchDetail.matchResult === "무";
        if (!result) {
          if (
            match.matchInfo[0].shoot.goalTotal ==
            match.matchInfo[1].shoot.goalTotal
          )
            penaltyShootOut = true;
        }
        return (
          <S.List ref={inputRef}>
            <S.FirstPlayer>
              <div>{result ? "무" : "승"}</div>
              <div></div>
              <div>
                {firstIsWin
                  ? match.matchInfo[0].nickname
                  : match.matchInfo[1].nickname}
              </div>
              <div>
                {firstIsWin
                  ? match.matchInfo[0].shoot.goalTotal
                  : match.matchInfo[1].shoot.goalTotal}
              </div>
              {penaltyShootOut && (
                <div>
                  (
                  {penaltyShootOut &&
                    (firstIsWin
                      ? match.matchInfo[0].shoot.shootOutScore
                      : match.matchInfo[1].shoot.shootOutScore)}
                  )
                </div>
              )}
            </S.FirstPlayer>
            <S.Vs> vs </S.Vs>
            <S.SecondPlayer>
              {penaltyShootOut && (
                <div>
                  (
                  {penaltyShootOut &&
                    (!firstIsWin
                      ? match.matchInfo[0].shoot.shootOutScore
                      : match.matchInfo[1].shoot.shootOutScore)}
                  )
                </div>
              )}
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
              <div>{result ? "무" : "패"}</div>
            </S.SecondPlayer>
            <div>
              {match.matchDate.split("-")[0] +
                "-" +
                match.matchDate.split("-")[1] +
                "-" +
                match.matchDate.split("-")[2].substr(0, 2)}
            </div>
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
    </S.MainDiv>
  );
};

export default Match;
