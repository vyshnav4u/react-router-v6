import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  let { user } = useParams();
  return (
    <div>
      <h1>My Profile</h1>
      <p>Hello {user}</p>
    </div>
  );
}

export default Profile;
