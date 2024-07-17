import React from "react";

const GithubUser = ({ name, company, location, avatar, blog }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>{company}</h2>
      <p>{location}</p>
      <p>Blog: {blog}</p>
      <img src={avatar} alt={name} />
    </>
  );
};

export default GithubUser;
