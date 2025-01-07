import { useState } from 'react'

import './App.css'


function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div>
      <h1>React App</h1>
      <p>{message}</p>
      </div>
    </>
  )
}

export default App
