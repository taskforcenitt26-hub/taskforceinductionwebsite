import React, { useState } from 'react';
import heroBg from '../../assests/Websiteopenbg.png';
import membersData from '../data/members.json';
import coreMembersData from '../data/coremember.json';

import DrSreejithMohan from "../../assests/faculty advisor/sreejith mohan.jpeg";
import ajayj from "../../assests/core member/Ajay J.jpg";
import thilaks from "../../assests/core member/Thilak S.jpg";
import AaqhilAhmed from "../../assests/managers/Aaqhil Ahmed.jpeg";
import ChinmaiBathula from "../../assests/managers/Chinmai Bathula.jpg";
import GauthamS from "../../assests/managers/Gauthum S.jpg";
import HarinathSS from "../../assests/managers/Harinath SS.webp";
import KinethaSampath from "../../assests/managers/Kinetha Sampath.jpeg";
import ParshanaBaskaran from "../../assests/managers/Parshana Baskaran.jpg";
import Priyadharshini from "../../assests/managers/Priyadharshini.jpg";
import RoshanBhaskar from "../../assests/managers/Roshan Bhaskar.jpg";
import Swathilakshmi from "../../assests/managers/S.Swathilakshmi.jpg";
import SivasubramanianP from "../../assests/managers/Siva Subramanian Prabaharan.jpg";
import AindrilaAtoshiGopeArthi from "../../assests/managers/Aindrila Gope.jpg";
import Anaswara from "../../assests/managers/Anaswara.jpg";
import KrishanduttSathish from "../../assests/managers/Krishnadutt Sathish.jpg";
import LankeshwarM from "../../assests/managers/Lankeshwar M.jpg";
import ManishKumar from "../../assests/managers/Manish Kumar.jpg";
import MohanaSomeshKumarP from "../../assests/managers/Mohana Somesh Kumar P.jpg";
import steve from "../../assests/core member/Steve.jpg";
import asritha from "../../assests/core member/Asritha Dakuri.jpg";
import rashmi from "../../assests/managers/Rashmi Kumari.jpg";

// Helper: badge color and icon based on division (top-level so renderMemberCard can use it)
const getDivisionStyles = (division) => {
  if (!division) return { 
    bg: 'bg-gray-50',
    text: 'text-gray-800',
    border: 'border-gray-200',
    icon: '👥'
  };

  switch ((division || '').toLowerCase()) {
    case 'admin':
    case 'admin relation & treasury':
      return {
        bg: 'bg-red-50',
        text: 'text-red-800',
        border: 'border-red-200',
        icon: '🏛️'
      };
    case 'weops':
    case 'technical':
      return {
        bg: 'bg-blue-50',
        text: 'text-blue-800',
        border: 'border-blue-200',
        icon: '⚙️'
      };
    case 'publicity & content':
    case 'marketing':
      return {
        bg: 'bg-purple-50',
        text: 'text-purple-800',
        border: 'border-purple-200',
        icon: '📢'
      };
    case 'design & media':
    case 'design':
      return {
        bg: 'bg-orange-50',
        text: 'text-orange-800',
        border: 'border-orange-200',
        icon: '🎨'
      };
    default:
      return {
        bg: 'bg-gray-50',
        text: 'text-gray-800',
        border: 'border-gray-200',
        icon: '👥'
      };
  }
};

// Helper function to render member card
const renderMemberCard = (member) => {
  const photoMap = {
    'Aaqhil Ahmed': AaqhilAhmed,
    'Chinmai Bathula': ChinmaiBathula,
    'Harinath SS': HarinathSS,
    'Parshana Baskaran': ParshanaBaskaran,
    'Priyadharshini M': Priyadharshini,  
    'M. Roshan Bhaskar': RoshanBhaskar,  
    'S. Swathilakshmi': Swathilakshmi,
    'Kinetha S': KinethaSampath,
    'Gautham Natarajan S': GauthamS,
    'Sivasubramanian P': SivasubramanianP,
    'Anaswara S Kumar': Anaswara,
    'Aindrila Atoshi Gope Arthi': AindrilaAtoshiGopeArthi,
    'Krishandutt (KD)': KrishanduttSathish,
    'M. Lankeshwar': LankeshwarM,
    'Manish Kumar K': ManishKumar,
    'Ajay J': ajayj,
    'Thilak S': thilaks,
    'Steve Fredrick': steve,
    'Asritha Dakuri': asritha,
    'Mohana Somesh Kumar P': MohanaSomeshKumarP,
    'Dr. Sreejith Mohan': DrSreejithMohan,
    'Rashmi': rashmi
  };
  
  const memberName = Object.keys(photoMap).find(
    key => key.toLowerCase() === member.name.toLowerCase()
  );
  const memberPhoto = memberName ? photoMap[memberName] : (member.photo || null);
  const needsContain = ['S. Swathilakshmi', 'Chinmai Bathula'].includes(memberName);
  
  return (
    <div key={member.name} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 w-80 md:w-72 h-[26rem] flex flex-col flex-none">
      <div className="p-6 text-center">
        {/* Member Photo */}
        <div className="w-full h-60 md:h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4 overflow-hidden relative">
          {memberPhoto ? (
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={memberPhoto} 
                alt={member.name} 
                className={`w-full h-full ${needsContain ? 'object-contain' : 'object-cover object-top'}`} 
                style={{
                  objectPosition: member.name.toLowerCase() === 'mohana somesh kumar p' ? '80% center' : 'top',
                  transform: member.name.toLowerCase() === 'mohana somesh kumar p' ? 'scale(1.4)' : 'none'
                }}
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Member Details */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-yellow-400">{member.name}</h3>
          {member.position && (
            <p className="text-yellow-400 font-medium text-sm">{member.position}</p>
          )}
          <p className="text-white text-sm">{member.year || member.department}</p>
          
          {/* Team Badge */}
          {member.division && (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDivisionStyles(member.division).bg} ${getDivisionStyles(member.division).text}`}>
              {member.division}
            </span>
          )}
          
          {/* LinkedIn Icon */}
          <div className="flex justify-center mt-3">
            <a 
              href={member.linkedIn} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Members component
export default function Members() {
  const [activeTab, setActiveTab] = useState('faculty');
  const [activeMemberSubTab, setActiveMemberSubTab] = useState('core');

  const facultyAdvisors = [
    {
      name: 'Dr. Sreejith Mohan',
      position: 'Faculty Advisor',
      department: 'Department of Mechanical Engineering',
      linkedIn: 'https://www.linkedin.com/in/sreejith-mohan-a06b0566/',
      photo: DrSreejithMohan
    }
  ]

  const coreTeam = coreMembersData;

  const members = Array.isArray(membersData) ? membersData : membersData.members || []

  // Helper function to filter members by division
  const getMembersByDivision = (division) =>
    members.filter((m) => (m.division || m.subtype) === division)

  // Define the four main sub-teams with consistent naming and descriptions
  const memberDivisions = [
    { 
      id: 'admin', 
      label: 'Admin Relation & Treasury', 
      members: getMembersByDivision('Admin Relation & Treasury'),
      description: 'Manages club finances, institutional relations, and administrative operations.',
      icon: '🏛️'  // Optional: can be replaced with actual icons
    },
    { 
      id: 'weops', 
      label: 'WeOps', 
      members: getMembersByDivision('WeOps'),
      description: 'Handles technical operations, event logistics, and workshop coordination.',
      icon: '⚙️'  // Optional: can be replaced with actual icons
    },
    { 
      id: 'publicity', 
      label: 'Publicity & Content', 
      members: getMembersByDivision('Publicity & Content'),
      description: 'Creates engaging content, manages social media, and handles public relations.',
      icon: '📢'  // Optional: can be replaced with actual icons
    },
    { 
      id: 'design', 
      label: 'Design & Media', 
      members: getMembersByDivision('Design & Media'),
      description: 'Designs visual assets, creates media content, and manages creative direction.',
      icon: '🎨'  // Optional: can be replaced with actual icons
    }
  ]

  const tabs = [
    { id: 'faculty', label: 'Faculty Advisors', count: facultyAdvisors.length },
    { id: 'core', label: 'Core Team', count: coreTeam.length },
    { id: 'managers', label: 'Managers', count: members.length }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section style={{backgroundImage:`url(${heroBg})`}} className="bg-cover bg-center pt-20 pb-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white">
              Meet the dedicated individuals who make TaskForce the premier student organization at NIT Trichy
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-8">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center justify-items-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">{facultyAdvisors.length}</div>
              <div className="text-white">Faculty Advisors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">{coreTeam.length}</div>
              <div className="text-white">Core Team</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">{members.length}+</div>
              <div className="text-white">Active Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="bg-gray-900">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-yellow-400 text-black'
                    : 'bg-white text-gray-700 hover:bg-yellow-50'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Faculty Advisors */}
          {activeTab === 'faculty' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-yellow-400 mb-2">Faculty Advisors</h2>
                <p className="text-xl text-white">
                  Academic mentors who provide guidance and support to our club
                </p>
              </div>
              <div className="flex justify-center">
                {facultyAdvisors.map((member) => renderMemberCard(member))}
              </div>
            </div>
          )}

          {/* Core Team */}
          {activeTab === 'core' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-yellow-400 mb-2">Core Team</h2>
                <p className="text-xl text-white">
                  The driving force behind TaskForce's vision and operations
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 md:flex-row md:flex-wrap md:justify-center pb-4">
                {coreTeam.map((member) => renderMemberCard(member))}
              </div>
            </div>
          )}

          {/* Managers */}
          {activeTab === 'managers' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-yellow-400 mb-2">Managers</h2>
                <p className="text-xl text-white">
                  Managers oversee sub-team activities and drive TaskForce operations
                </p>
              </div>
              
              {/* Member Sub-tabs */}
              <div className="flex flex-wrap justify-center mb-8">
                {memberDivisions.map((division) => (
                  <button
                    key={division.id}
                    onClick={() => setActiveMemberSubTab(division.id)}
                    className={`px-4 py-2 mx-1 mb-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      activeMemberSubTab === division.id
                        ? 'bg-yellow-400 text-black'
                        : 'bg-white text-gray-700 hover:bg-yellow-50 border border-gray-200'
                    }`}
                  >
                    {division.label} ({division.members.length})
                  </button>
                ))}
              </div>

              {/* Member Content by Division */}
              {memberDivisions.map((division) => (
                activeMemberSubTab === division.id && (
                  <div key={division.id}>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-semibold text-yellow-400 mb-1">
                        {division.label} Team
                      </h3>
                      <p className="text-white max-w-2xl mx-auto">
                        {division.description}
                      </p>
                    </div>
                    
                    {division.members.length > 0 ? (
                      <div className="flex flex-wrap justify-center gap-1">
                        {division.members.map((member) => renderMemberCard(member))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">No members in this category yet</h4>
                        <p className="text-gray-600">We're always looking for passionate members to join this team!</p>
                      </div>
                    )}
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Team Structure */}
      <section className="bg-gray-900">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Team Structure</h2>
            <p className="text-xl text-white">Understanding our organizational structure and roles</p>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 justify-items-center">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400 w-full max-w-xs">
                <div className="flex justify-center mb-3">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium text-center">Admin Relation & Treasury</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">Leadership</h3>
                <p className="text-white text-sm text-center">Leadership roles, strategic planning, and overall club management</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 w-full max-w-xs">
                <div className="flex justify-center mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium text-center">WeOps</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">Operations</h3>
                <p className="text-white text-sm text-center">Training coordination, event management, and operational activities</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 w-full max-w-xs">
                <div className="flex justify-center mb-3">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium text-center">Publicity & Content</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">Marketing</h3>
                <p className="text-white text-sm text-center">Social media management, content creation, and publicity</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400 w-full max-w-xs">
                <div className="flex justify-center mb-3">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium text-center">Design & Media</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">Creative</h3>
                <p className="text-white text-sm text-center">Graphic design, photography, and visual content creation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}