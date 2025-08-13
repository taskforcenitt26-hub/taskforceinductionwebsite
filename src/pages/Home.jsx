import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import heroBg from '../../assests/Websiteopen.png';
import upcomingEventsData from '../data/upcomingEvents.json'
import './Home.css';

const Home = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([])
  // carousel for mobile
  const [currentUpdateIndex, setCurrentUpdateIndex] = useState(0)

  const showPrevUpdate = () => {
    setCurrentUpdateIndex((prev) =>
      prev === 0 ? upcomingEvents.length - 1 : prev - 1
    )
  }

  const showNextUpdate = () => {
    setCurrentUpdateIndex((prev) => (prev + 1) % upcomingEvents.length)
  }


  // Format date helper function
  const formatDate = (dateString) => {
    // If the date string contains commas (multi-day events), return as is
    if (dateString.includes(',')) {
      return dateString;
    }
    
    // Try to parse single dates
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      }
    } catch (error) {
      console.warn('Could not parse date:', dateString);
    }
    
    // Return original string if parsing fails
    return dateString;
  };

  useEffect(() => {
    // Format upcoming events for display
    const formattedEvents = upcomingEventsData.slice(0, 3).map(event => ({
      id: event.id,
      title: event.title,
      date: formatDate(event.date),
      time: event.time,
      location: event.location,
      description: event.description
    }));
    
    setUpcomingEvents(formattedEvents);
  }, []);

  const features = [
    {
      title: 'Admin Relation & Treasury',
      description: 'Manages club finances, institutional relations, and administrative operations to ensure smooth functioning.',
      icon: '💼'
    },
    {
      title: 'WeOps',
      description: 'Handles technical operations, event logistics, and infrastructure for all club activities.',
      icon: '⚙️'
    },
    {
      title: 'Publicity & Content',
      description: 'Creates engaging content and manages all club communications and social media presence.',
      icon: '📢'
    },
    {
      title: 'Design & Media',
      description: 'Designs visual assets and manages all creative content for events and digital platforms.',
      icon: '🎨'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
       <section style={{backgroundImage:`url(${heroBg})`}} className="relative bg-cover bg-center text-black min-h-[360px] sm:min-h-[400px] md:min-h-[500px]">
        <div className="container-max h-full">
          <div className="w-full h-full flex flex-col items-center text-center">
            
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-4 justify-center w-full px-4 max-w-md">
              <Link to="/about" className="btn-secondary w-11/12 sm:w-auto max-w-xs py-2 text-sm sm:py-3 sm:text-base mx-auto">
                Learn More About Us
              </Link>
              <Link to="/induction" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 sm:py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl w-11/12 sm:w-auto max-w-xs text-sm sm:text-base mx-auto">
                Join the Club
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="bg-gray-100">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="upcoming-events-heading">
              Upcoming Events
            </h2>
          </div>
          
          {/* Mobile carousel */}
          <div className="relative md:hidden">
            {/* Event card */}
            {upcomingEvents.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-200 text-gray-800">
                <div className="text-yellow-600 font-semibold mb-2">
                  {upcomingEvents[currentUpdateIndex].date}
                </div>
                <h3 className="event-title text-xl font-semibold mb-3 text-gray-900">
                  {upcomingEvents[currentUpdateIndex].title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {upcomingEvents[currentUpdateIndex].description}
                </p>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {upcomingEvents[currentUpdateIndex].time}
                  </div>
                  <div className="flex items-center mt-1">
                    <svg className="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {upcomingEvents[currentUpdateIndex].location}
                  </div>
                </div>
              </div>
            )}
            {/* Nav buttons */}
            <button
              onClick={showPrevUpdate}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={showNextUpdate}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-200 text-gray-800">
                <div className="text-yellow-600 font-semibold mb-2">{event.date}</div>
                <h3 className="event-title text-xl font-semibold mb-3 text-gray-900">
                  {event.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {event.description}
                </p>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                  <div className="flex items-center mt-1">
                    <svg className="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home