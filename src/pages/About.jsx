import React from 'react';
import heroBg from '../../assests/Websiteopenbg.png';
import { FaBullseye, FaEye, FaUsers, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 about-page">
      {/* Hero Section */}
      <section style={{backgroundImage:`url(${heroBg})`}} className="bg-cover bg-center text-white section-padding">
        <div className="container mx-auto px-4 text-center">
          <h1 className="about-heading">About TaskForce</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empowering students through leadership, service, and community engagement at NIT Trichy.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="about-heading">Our Core Purpose</h2>
              <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Driving positive change and fostering leadership at NIT Trichy through innovative solutions and community engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="text-yellow-500 text-3xl mb-4">
                  <FaBullseye className="inline-block" />
                </div>
                <h2 className="about-heading">Our Mission</h2>
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    To enhance student life at NIT Tiruchirappalli by providing accessible, affordable, and impactful solutions to everyday challenges, while offering opportunities for students to engage in meaningful administrative and community-focused initiatives.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Through our diverse programmes and responsive support, we strive to create a collaborative environment that empowers students to contribute to the betterment of campus life.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="text-yellow-500 text-3xl mb-4">
                  <FaEye className="inline-block" />
                </div>
                <h2 className="about-heading">Our Vision</h2>
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    To be a dynamic and student-driven hub that fosters leadership, administrative skills, and social responsibility, inspiring future leaders who can initiate and sustain positive change.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We envision a campus where every student has the resources, support, and platform to address challenges, explore ideas, and build a stronger, more inclusive NIT Trichy community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="about-heading">Our Core Values</h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at TaskForce and shape our community.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              {
                title: 'Leadership',
                description: 'We empower students to take initiative and lead with integrity and purpose.',
                icon: <FaUsers className="w-6 h-6" />
              },
              {
                title: 'Innovation',
                description: 'We encourage creative thinking and innovative solutions to campus challenges.',
                icon: <FaLightbulb className="w-6 h-6" />
              },
              {
                title: 'Community',
                description: 'We build strong, inclusive communities that support and uplift every member.',
                icon: <FaHandsHelping className="w-6 h-6" />
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in all our initiatives and services.',
                icon: <FaBullseye className="w-6 h-6" />
              },
              {
                title: 'Integrity',
                description: 'We operate with honesty, transparency, and ethical practices.',
                icon: <FaEye className="w-6 h-6" />
              },
              {
                title: 'Service',
                description: 'We are committed to serving the NIT Trichy community with dedication.',
                icon: <FaHandsHelping className="w-6 h-6" />
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-yellow-500 mb-3">
                  {value.icon}
                </div>
                <h3 className="about-heading">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="about-heading">Join Our Community</h2>
          <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Be part of TaskForce and help us make a difference at NIT Trichy. Whether you want to lead, create, or contribute, there's a place for you here.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href="/induction" 
              className="bg-yellow-500 text-white font-semibold py-2 px-6 text-sm rounded-md shadow"
            >
              Join TaskForce
            </a>
            <a 
              href="/#upcoming-events" 
              className="upcoming-events-btn"
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;