import React from 'react'
import heroBg from '../../assests/Websiteopenbg.png';
import { useParams } from 'react-router-dom'
import eventsData from '../data/pastEvents.json'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// Import local event images
import recycle1 from '../../assests/events images/RECycle/IMG_9851.JPG';
import recycle2 from '../../assests/events images/RECycle/IMG_9857.JPG';
import passport1 from '../../assests/events images/Passport Mela/passport mela 1.jpg';
import passport2 from '../../assests/events images/Passport Mela/passport mela 2.jpg';
import townhall1 from '../../assests/events images/Townhall/2_20250110_112004_0001.png';
import townhall2 from '../../assests/events images/Townhall/3_20250110_112005_0002.png';
import townhall3 from '../../assests/events images/Townhall/GOLDEN HOUR_20250117_214858_0000.png';
import aadhar1 from '../../assests/events images/Aadhar and Pan Card Mela/AADHAR UPDAION MELA_20250108_223004_0000.png';
import aadhar2 from '../../assests/events images/Aadhar and Pan Card Mela/AADHAR UPDAION MELA_20250108_223004_0001.png';
import aadhar3 from '../../assests/events images/Aadhar and Pan Card Mela/AADHAR UPDAION MELA_20250108_223004_0002.png';

// Map event IDs to their corresponding local images
const eventImageUrls = {
  "1": [recycle1, recycle2],
  "2": [passport1, passport2],
  "3": [townhall1, townhall2, townhall3],
  "4": [aadhar1, aadhar2, aadhar3],
  "5": [
    'https://via.placeholder.com/600x400?text=Soapbox+Event+1',
    'https://via.placeholder.com/600x400?text=Soapbox+Event+2',
    'https://via.placeholder.com/600x400?text=Soapbox+Event+3'
  ]
}

const EventDetail = () => {
  const { id } = useParams()
  const event = eventsData.find((e) => String(e.id) === id)

  if (!event) return <div className="p-8 text-center">Event not found</div>

  // Use direct image URLs from eventImageUrls
  let images = event.images || eventImageUrls[event.id] || [
    'https://via.placeholder.com/600x400?text=Event+Photo+1',
    'https://via.placeholder.com/600x400?text=Event+Photo+2',
    'https://via.placeholder.com/600x400?text=Event+Photo+3',
  ];

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section style={{backgroundImage:`url(${heroBg})`}} className="bg-cover bg-center text-white section-padding">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">{event.title}</h1>
          {event.tagline && <p className="text-lg md:text-xl max-w-3xl mx-auto">{event.tagline}</p>}
        </div>
      </section>

      <div className="w-full py-8" style={{ background: 'var(--dark-bg)' }}>
        <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Left: carousel */}
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 p-4 rounded-lg shadow-lg" style={{ background: 'var(--content-bg)' }}>
              <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={3000}
                showStatus={false}
                className="w-full"
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && (
                    <button
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )
                }
              >
                {images.map((src, idx) => (
                  <div key={idx} className="flex items-center justify-center h-[500px] overflow-hidden">
                    <img 
                      src={src} 
                      alt={`slide ${idx + 1}`} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Right: content */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-white leading-relaxed mb-6 whitespace-pre-line">{event.description}</p>
                {/* Registration button */}
                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition-colors duration-200"
                  >
                    Register Now
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail
