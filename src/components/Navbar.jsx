import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assests/LOGO.png'
import eventsData from '../data/pastEvents.json'

const Navbar = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false)
  const [eventsOpen, setEventsOpen] = useState(false)
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false)
  const location = useLocation()

  // Close desktop Events dropdown on outside click
  useEffect(() => {
    if (!eventsOpen) return;
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setEventsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [eventsOpen]);

  const isHome = location.pathname === '/';

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Members', href: '/members' },
    { name: 'Events', href: '#' },
    { name: 'Induction', href: '/induction' },
    { name: 'Contact', href: '/contact' },
  ].map(item => ({
    ...item,
    className: 'text-lg font-medium' // Added larger font size
  }))

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  }

  return (
    <nav className="bg-transparent absolute top-0 shadow-none border-b border-transparent w-full z-50 py-4">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={Logo} alt="TaskForce logo" className="w-16 h-16 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-yellow-400">TaskForce</h1>
              <p className="text-sm text-white font-medium">NIT Trichy</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              item.name === 'Events' ? (
                <React.Fragment key={item.name}>

                  {/* Events Dropdown just after About */}
                  <div
                    ref={dropdownRef} className="relative ml-2"
                    
                  >
                    <button onClick={() => setEventsOpen(!eventsOpen)} className={`${item.className} text-white hover:text-yellow-400 transition-colors duration-200 flex items-center focus:outline-none`}>
                      Events
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {eventsOpen && (
                      <div className="absolute left-0 mt-3 w-48 bg-gray-700 shadow-lg rounded-md z-50">
                        {eventsData.map((ev) => (
                          <Link
                            key={ev.id}
                            to={`/events/${ev.id}`}
                            className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-yellow-400 font-medium"
                            onClick={() => setEventsOpen(false)}
                          >
                            {ev.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-bold transition-colors duration-200 text-base ${
                    isActive(item.href)
                      ? 'text-yellow-400 border-b-2 border-yellow-400 active'
                      : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}


          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 rounded-lg mt-2" style={{ backgroundColor: 'var(--dark-bg)' }}>
            <div className="flex flex-col space-y-3 px-2">
              {navigation.map((item) => (
                item.name === 'Events' ? (
                  <React.Fragment key={item.name}>
                    {/* Events Dropdown */}
                    <div className="pt-1">
                      <button
                        onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
                        className={`w-full px-3 py-2 flex items-center justify-between ${item.className} text-white hover:text-yellow-400 focus:outline-none`}
                      >
                        <span>Events</span>
                        <svg
                          className={`w-4 h-4 transform transition-transform ${mobileEventsOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileEventsOpen && (
                        <div className="pl-6 mt-1 space-y-2">
                          {eventsData.map((ev) => (
                            <Link 
                              key={ev.id}
                              to={`/events/${ev.id}`} 
                              onClick={() => { setIsOpen(false); setMobileEventsOpen(false); }} 
                              className="block py-1.5 px-3 text-white hover:text-yellow-400 text-base rounded hover:bg-gray-700 transition-colors"
                            >
                              {ev.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </React.Fragment>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 rounded-md ${item.className} ${isActive(item.href) ? 'text-yellow-400 bg-gray-800' : 'text-white hover:text-yellow-400 hover:bg-gray-800'}`}
                  >
                    {item.name}
                  </Link>
                )

              ))}

            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar