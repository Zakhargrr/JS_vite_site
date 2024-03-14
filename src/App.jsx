import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Lablist from './components/LabsList'

function App() {


  return (
    <>
      <Header />

      <div className="main_page">
        <Lablist />
        <Content />
      </div>
      <Footer />

    </>
  )
}

export default App
