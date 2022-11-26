import React from "react";
import { getMockData } from "../../../routes";
import NavBar from "../../common/navbar";

const Profile = () => {
  const { data } = getMockData();

  return (
    <React.Fragment>
      <NavBar />
      <h1>Profile</h1>
      {Object.keys(data).map((key) => (
        <h3>
          {key}: {data[key]}
        </h3>
      ))}
    </React.Fragment>
  );
};

export default Profile;
