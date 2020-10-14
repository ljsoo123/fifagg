import React, { useEffect } from "react";

const Profile = ({ match }) => {
  const { nickname } = match.params;

  useEffect(() => {}, []);
  return <div>{nickname}</div>;
};

export default Profile;
