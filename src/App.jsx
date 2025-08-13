import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Members from './pages/Members'
import Contact from './pages/Contact'
import EventDetail from './pages/EventDetail'
import Induction from './pages/Induction'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow bg-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/induction" element={<Induction />} />
            <Route path="/events/:id" element={<EventDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App