import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({ name, company, location, avatar }) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{company}</h2>
      <p>{location}</p>
      <img src={avatar} alt="user avatar" />
    </>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/o-brayarn")
      .then((res) => res.json())
      .then((data) => setData(data)); // or simply use shorthand.then(setData)
  }, []);

  if (data)
    return (
      <GithubUser
        name={data.name}
        company={data.company}
        location={data.location}
        avatar={data.avatar_url}
      />
    );

  return <h1>Data</h1>;
}

export default App;
