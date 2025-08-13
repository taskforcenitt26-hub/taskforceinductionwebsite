import React from 'react'
import heroBg from '../../assests/Websiteopenbg.png';
import { useParams } from 'react-router-dom'
import eventsData from '../data/pastEvents.json'
import eventImages from '../data/eventImages.json';
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const EventDetail = () => {
  const { id } = useParams()
  const event = eventsData.find((e) => String(e.id) === id)

  if (!event) return <div className="p-8 text-center">Event not found</div>

  // placeholder images; ideally event.images array exists
  let images = event.images;
  if (!images) {
    const mapped = eventImages[event.id];
    if (mapped && mapped.length) {
      images = mapped.map((p)=> new URL(p, import.meta.url).href);
    } else {
      images = [
        'https://via.placeholder.com/600x400?text=Event+Photo+1',
        'https://via.placeholder.com/600x400?text=Event+Photo+2',
        'https://via.placeholder.com/600x400?text=Event+Photo+3',
      ];
    }
  }

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
