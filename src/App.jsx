import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import App from './App'
import Header from './components/header'
import Footer from './components/footer'
import HeroHome from './components/hero'
import Error from './components/error'
import Home from './pages/home'
import About from './pages/about'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <HeroHome />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/detail/:title' element={<Detail />} />
      <App /> */}
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
