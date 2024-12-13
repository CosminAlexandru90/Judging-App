import { useState } from "react";
import "./App.css";
import { Button } from "./components/button.tsx";

function App() {
  const [fruits, setFruits] = useState([]);

  const fetchFruits = async () => {
    const response = await fetch("http://localhost:8080/api");
    const data = await response.json();
    setFruits(data.fruits);
    console.log(data.fruits);
  };

  return (
    <>
      <Button onClick={() => fetchFruits()} title="Fruits" />
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </>
  );
}

export default App;
