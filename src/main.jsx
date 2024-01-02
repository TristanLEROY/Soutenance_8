import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Error from './components/error'
import Home from './pages/home'
import About from './pages/about'
import './main.scss'
import data from './data/data.json'
import Detail from './pages/detail'
import { Navigate } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/about' element={<About />} />
        <Route exact path='/detail/:id' element={<Detail data={data} />} />
        <Route path='/404' element={<Error />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
