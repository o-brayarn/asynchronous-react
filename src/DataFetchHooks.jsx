import React, { useState, useEffect } from "react";

const DataFetchHooks = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/o-brayarn")
      .then((res) => res.json())
      .then((data) => setData(data)); // or simply use shorthand.then(setData)
  }, []);
  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return <h1>Data</h1>;
};

export default DataFetchHooks;
