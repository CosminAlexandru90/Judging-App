import {useState} from 'react'
import './App.css'

function App() {
  const [fruits, setFruits] = useState([])

  const fetchFruits = async () => {
    const response = await fetch("http://localhost:8080/api");
    const data = await response.json();
    setFruits(data.fruits);
    console.log(data.fruits);
  }

  return (
    <>
        <button onClick={() => fetchFruits()}>
          Get fruits
        </button>
        {fruits.map((fruit) => (<><div>{fruit}</div><br /></>))}
    </>
  )
}

export default App
