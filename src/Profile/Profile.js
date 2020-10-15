import Axios from "axios";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Player from "../Player/Player";

const Profile = ({ match }) => {
  const [player, setPlayer] = useState(null);
  const { nickname } = match.params;
  useEffect(() => {
    axios
      .get(
        `https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${nickname}`,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTY0NDc3NDY0MyIsImF1dGhfaWQiOiIyIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsIlgtQXBwLVJhdGUtTGltaXQiOiI1MDA6MTAiLCJuYmYiOjE2MDI2NzA3NDgsImV4cCI6MTYxODIyMjc0OCwiaWF0IjoxNjAyNjcwNzQ4fQ.bJSyiju8IDbyaKxagdpTB1bV2zMw5ExOem_L5TjTZ-Y",
          },
        }
      )
      .then((res) => {
        setPlayer({
          accessId: res.data.accessId,
          nickname: res.data.nickname,
          level: res.data.level,
        });
      });
  }, []);
  return <>{player && <Player player={player} />}</>;
};

export default Profile;
