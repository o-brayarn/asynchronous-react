import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/o-brayarn")
      .then((res) => res.json())
      .then((data) => setData(data)); // or simply use shorthand.then(setData)
  }, []);

  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return <h1>Data</h1>;
}

export default App;
