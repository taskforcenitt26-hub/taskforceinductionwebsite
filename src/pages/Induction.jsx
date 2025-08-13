import React, { useState } from 'react'
import heroBg from '../../assests/Websiteopenbg.png';
import { supabase } from '../utils/supabaseClient'

const Induction = () => {
  const [submitStatus, setSubmitStatus] = useState(null) // null | 'success' | 'error'
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    rollNo: '',
    department: '',
    preferences: [],
    studentLifeEasier: '',
    leadershipExperience: '',
    eventSuggestion: '',
    taskforceMeaning: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePreferenceSelect = (team) => {
    const currentPreferences = [...formData.preferences]
    const teamIndex = currentPreferences.indexOf(team)
    
    if (teamIndex > -1) {
      // Remove team if already selected
      currentPreferences.splice(teamIndex, 1)
    } else if (currentPreferences.length < 3) {
      // Add team if less than 3 selected
      currentPreferences.push(team)
    }
    
    setFormData({
      ...formData,
      preferences: currentPreferences
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate preferences
    if (formData.preferences.length === 0) {
      setSubmitStatus('error')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Submit to Supabase
      const { error } = await supabase.from('induction_forms').insert({
        name: formData.name,
        phone: formData.phone,
        roll_no: formData.rollNo,
        department: formData.department,
        pref1: formData.preferences[0] ?? null,
        pref2: formData.preferences[1] ?? null,
        pref3: formData.preferences[2] ?? null,
        student_life_easier: formData.studentLifeEasier,
        leadership_experience: formData.leadershipExperience,
        event_suggestion: formData.eventSuggestion,
        taskforce_meaning: formData.taskforceMeaning
      })

      if (error) {
        console.error('Supabase error:', error)
        setSubmitStatus('error')
        return
      }

      setSubmitStatus('success')
      // Reset form
      setFormData({
        name: '',
        phone: '',
        rollNo: '',
        department: '',
        preferences: [],
        studentLifeEasier: '',
        leadershipExperience: '',
        eventSuggestion: '',
        taskforceMeaning: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const departments = [
    'Computer Science',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Chemical Engineering',
    'Electronics & Communication',
    'Production Engineering',
    'Metallurgical Engineering',
    'Architecture',
    'B.Sc Mathematics',
    'B.Sc Physics',
    'B.Sc Chemistry',
    'Others'
  ]
  const subteams = [
    'Admin Relation & Treasury',
    'WeOps',
    'Publicity & Content',
    'Design & Media'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section style={{backgroundImage:`url(${heroBg})`}} className="bg-cover bg-center pt-32 pb-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
              Join TaskForce
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-snug text-white">
              Be part of the change. <br/> Fill out the form below to apply for TaskForce induction.
              <br/>Apply to become a <b className="text-yellow-400">TaskForce Deputy Manager</b>
            </p>
          </div>
        </div>
      </section>

      {/* Induction Form */}
      <section className="bg-white py-8">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Application Form</h2>
              <p className="text-xl text-gray-700">
                Fill out this form to apply for deputy manager position at TaskForce
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Basic Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 bg-white"
                      placeholder="+91 xxxxx xxxxx"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700 mb-2">
                      Roll Number *
                    </label>
                    <input
                      type="text"
                      id="rollNo"
                      name="rollNo"
                      value={formData.rollNo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 bg-white"
                      placeholder="Your roll number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                      Department *
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="">Select your department</option>
                      {departments.map((dept, index) => (
                        <option key={index} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Preference */}
              <div className="bg-white p-6 rounded-lg mt-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Team Preference</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Your Top 3 Preferences *
                  </label>
                  <p className="text-sm text-gray-600 mb-4">
                    Click on the teams to select your preferences in order. You can select up to 3 teams.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {subteams.map((team, index) => {
                      const isSelected = formData.preferences.includes(team)
                      const preferenceNumber = formData.preferences.indexOf(team) + 1
                      
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handlePreferenceSelect(team)}
                          className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                            isSelected
                              ? 'border-yellow-500 bg-white text-gray-900'
                              : 'border-gray-300 bg-white text-gray-900 hover:border-yellow-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{team}</span>
                            {isSelected && (
                              <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                {preferenceNumber}
                              </span>
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>

                </div>
                
                {submitStatus === 'error' && formData.preferences.length === 0 && (
                  <p className="mt-2 text-sm text-red-600">Please select at least one team preference</p>
                )}
              </div>

              {/* Application Questions */}
              <div className="bg-white p-6 rounded-lg mt-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Application Questions</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="studentLifeEasier" className="block text-sm font-medium text-gray-700 mb-2">
                      In one line, what does "making student life easier" mean to you? *
                    </label>
                    <input
                      type="text"
                      id="studentLifeEasier"
                      name="studentLifeEasier"
                      value={formData.studentLifeEasier}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 bg-white"
                      placeholder="Your answer in one line..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="leadershipExperience" className="block text-sm font-medium text-gray-700 mb-2">
                      Describe a time when you led a team under pressure. What was your approach? *
                    </label>
                    <textarea
                      id="leadershipExperience"
                      name="leadershipExperience"
                      value={formData.leadershipExperience}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 bg-white"
                      placeholder="Describe your leadership experience and approach..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="eventSuggestion" className="block text-sm font-medium text-gray-700 mb-2">
                      Suggest one event that you think TaskForce should organise this semester. *
                    </label>
                    <textarea
                      id="eventSuggestion"
                      name="eventSuggestion"
                      value={formData.eventSuggestion}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 bg-white"
                      placeholder="Describe your event idea and why it would be valuable..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="taskforceMeaning" className="block text-sm font-medium text-gray-700 mb-2">
                      What does TaskForce in this college mean to you? *
                    </label>
                    <textarea
                      id="taskforceMeaning"
                      name="taskforceMeaning"
                      value={formData.taskforceMeaning}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-900 bg-white"
                      placeholder="Share your thoughts about TaskForce and its role in the college..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary px-12 py-4 text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-6 bg-white border-l-4 border-green-500 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Application Submitted Successfully!</h3>
                      <p className="text-gray-700 mt-1">Thank you for your application! We will review your submission and get back to you soon.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-6 p-6 bg-white border-l-4 border-red-500 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Submission Failed</h3>
                      <p className="text-gray-700 mt-1">{formData.preferences.length === 0 ? 'Please select at least one team preference before submitting.' : 'Something went wrong. Please try again later.'}</p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-sm">1</div>
                <div className="text-3xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-900">Application Review</h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-sm">2</div>
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-gray-900">Pre-Induction Task</h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-sm">3</div>
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-gray-900">Group Discussion</h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-sm">4</div>
                <div className="text-3xl mb-4">🗣️</div>
                <h3 className="text-xl font-semibold text-gray-900">PI (Personal Interview)</h3>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center text-sm">5</div>
                <div className="text-3xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold text-gray-900">Welcome Aboard</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{backgroundImage:`url(${heroBg})`}} className="bg-cover bg-center py-12 md:py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
              Join TaskForce Today
            </h2>
            <p className="text-lg text-gray-900 mb-6 max-w-2xl mx-auto">
              Join TaskForce as a deputy manager and help us create a better student experience at NIT Trichy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-secondary" onClick={() => document.querySelector('form').scrollIntoView({behavior: 'smooth'})}>
                Fill Application
              </a>
              <a href="/about" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Learn About TaskForce
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Induction