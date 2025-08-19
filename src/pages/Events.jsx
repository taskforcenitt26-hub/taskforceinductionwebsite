import React, { useState, useEffect, useRef } from 'react'
import heroBg from '../../assests/Websiteopenbg.webp';
import upcomingEventsData from '../data/upcomingEvents.json'
import pastEventsData from '../data/pastEvents.json'
import { useNavigate } from 'react-router-dom'

// Direct image URLs for different event types
const eventTypeImages = {
  marathon: [
    'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop'
  ],
  workshop: [
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop'
  ],
  championship: [
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517649763962-0c2a4163f9b9?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517649763962-0c2a4163f9b9?w=800&auto=format&fit=crop'
  ],
  'night run': [
    'https://images.unsplash.com/photo-1517649763962-0c2a4163f9b9?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517649763962-0c2a4163f9b9?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517649763962-0c2a4163f9b9?w=800&auto=format&fit=crop'
  ],
  default: [
    'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517649763962-0c2a4163f9b9?w=800&auto=format&fit=crop'
  ]
};

// Component for the image carousel
const EventImageCarousel = ({ eventTitle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);
  
  // Determine which set of images to use based on event title
  const getEventType = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('marathon')) return 'marathon';
    if (lowerTitle.includes('workshop')) return 'workshop';
    if (lowerTitle.includes('championship')) return 'championship';
    if (lowerTitle.includes('night run')) return 'night run';
    return 'default';
  };
  
  const images = eventTypeImages[getEventType(eventTitle)] || eventTypeImages['default'];

  // Auto-advance the carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 h-full group-hover:scale-105"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          opacity: 1,
        }}
      />
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Format date for display
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

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [pastEvents, setPastEvents] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])

  // Dropdown navigation
  const navigate = useNavigate()
  const [selectedId, setSelectedId] = useState('')
  const allEvents = [...upcomingEventsData, ...pastEventsData]

  const handleSelect = (e) => {
    const id = e.target.value
    setSelectedId(id)
    if (id) navigate(`/events/${id}`)
  }

  useEffect(() => {
    // Format upcoming events
    const formattedUpcomingEvents = upcomingEventsData.map(event => ({
      id: event.id,
      title: event.title,
      date: formatDate(event.date),
      time: event.time,
      location: event.location,
      description: event.description
    }));
    
    // Format past events
    const formattedPastEvents = pastEventsData.map(event => ({
      id: event.id,
      title: event.title,
      date: formatDate(event.date),
      time: event.time,
      location: event.location,
      description: event.description
    }));
    
    setUpcomingEvents(formattedUpcomingEvents);
    setPastEvents(formattedPastEvents);
  }, [])

  const tabs = [
    { id: 'upcoming', label: 'Upcoming Events' },
    { id: 'past', label: 'Past Events' }
  ]

  const renderEventCard = (event) => (
    <div key={event.id} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 flex flex-col h-64 w-full">
      {/* Image Carousel - Top */}
      <div className="relative h-40 w-full overflow-hidden">
        <EventImageCarousel eventTitle={event.title} />
      </div>
      
      {/* Event Details - Bottom */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 line-clamp-1">{event.title}</h3>
          <div className="flex flex-col text-xs text-gray-500 mt-1 space-y-0.5">
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="whitespace-nowrap">
                {formatDate(event.date)}
              </span>
            </div>
            {event.time && (
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{event.time}</span>
              </div>
            )}
            {event.location && (
              <div className="flex items-start">
                <svg className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="line-clamp-1">{event.location}</span>
              </div>
            )}
          </div>
        </div>
        <a 
          href={`/events/${event.id}`} 
          className="mt-2 inline-block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium py-1.5 px-3 rounded transition-colors duration-200"
        >
          View Details
        </a>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen">
      {/* Dropdown Event Selector UI */}
      <section style={{backgroundImage:`url(${heroBg})`}} className="bg-cover bg-center text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Activities</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Choose an event from the list below to view its details
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <label htmlFor="event-select" className="block text-lg font-medium text-gray-700 mb-2">
            Select an event
          </label>
          <select
            id="event-select"
            value={selectedId}
            onChange={handleSelect}
            className="w-full border-gray-300 rounded-lg py-3 px-4 focus:ring-yellow-400 focus:border-yellow-400"
          >
            <option value="">-- Choose an event --</option>
            {allEvents.map((ev) => (
              <option key={ev.id} value={ev.id}>
                {ev.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Hero Section */}
      <section style={{backgroundImage:`url(${heroBg})`}} className="bg-cover bg-center text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Events & Activities
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Join us for exciting events and activities throughout the year
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Events Grid */}
        <div className="py-8">
          {activeTab === 'upcoming' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map(renderEventCard)}
            </div>
          )}
          {activeTab === 'past' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map(renderEventCard)}
            </div>
          )}
        </div>

        {/* Registration CTA */}
        <section className="mt-12 bg-yellow-400 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Ready to Participate?
            </h2>
            <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
              Join our upcoming events and be part of the TaskForce running community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Contact for Registration
              </a>
              <a href="/induction" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Join the Club
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Events