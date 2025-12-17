import React from "react";

function Task6({ name, job, avatar }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={name} className="profile-avatar" />
      <h2>{name}</h2>
      <p>{job}</p>
    </div>
  );
}

export default Task6 ;
