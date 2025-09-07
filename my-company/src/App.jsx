import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
