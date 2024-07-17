import React, { useEffect, useState } from "react";
import GithubUser from "./GithubUser";

// Displaying data from an API
/*
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
}
*/

// Handling Loading States
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/o-brayarn`)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  if (loading) return <h1>Page loading . . .</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  return (
    <GithubUser name={data.name} blog={data.blog} avatar={data.avatar_url} />
  );
};

export default App;
