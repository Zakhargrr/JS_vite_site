import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Lablist from './components/LabsList'
import { useState } from 'react'


function App() {
  const [dark_theme, set_dark_theme] = useState(false)


  return (
    <>
      <div>
        <Header />
        <div className="main_page">
          <Lablist />
          <Content />
        </div>
        <Footer />
      </div>

    </>
  )
}

export default App
