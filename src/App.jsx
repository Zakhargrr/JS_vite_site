import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import my_button from './components/my_button'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header>
        <h1>Список лабораторных работ</h1>
      </Header>
      
      <div className="card">
        <my_button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </my_button>
        <my_button onClick={() => alert("Hello world")}>
          Выводим alert
        </my_button>
        <p>
          Это работающие кнопки
        </p>
      </div>
      <div className="labsList">
        <h2>Это список лабораторных работ</h2>
        
      </div>
      <Footer>
        <h2>Еськова А.А.</h2>
      </Footer>
    </>
  )
}

export default App
