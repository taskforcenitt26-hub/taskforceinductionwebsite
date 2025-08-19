import React, { useState } from 'react';
import membersData from '../data/members.json';
import coreMembersData from '../data/coremember.json';
import exCoreMembersData from '../data/excore.json';
import heroBg from '../../assests/Websiteopenbg.png';
import DrSreejithMohan from "../../assests/faculty advisor/sreejith mohan.webp";
import NITTLogo from "../../assests/NITT_logo.png";
// Core & Manager photos
import ajayj from "../../assests/core member/Ajay J.webp";
import thilaks from "../../assests/core member/Thilak S.webp";
import steve from "../../assests/core member/Steve.webp";
import asritha from "../../assests/core member/Asritha Dakuri.webp";
import AaqhilAhmed from "../../assests/managers/Aaqhil Ahmed.webp";
import ChinmaiBathula from "../../assests/managers/Chinmai Bathula.webp";
import GauthamS from "../../assests/managers/Gauthum S.webp";
import HarinathSS from "../../assests/managers/Harinath SS.webp";
import ParshanaBaskaran from "../../assests/managers/Parshana Baskaran.webp";
import Priyadharshini from "../../assests/managers/Priyadharshini.webp";
import RoshanBhaskar from "../../assests/managers/Roshan Bhaskar.webp";
import Swathilakshmi from "../../assests/managers/S.Swathilakshmi.webp";
import SivasubramanianP from "../../assests/managers/Siva Subramanian Prabaharan.webp";
import AindrilaAtoshiGopeArthi from "../../assests/managers/Aindrila Gope.webp";
import Anaswara from "../../assests/managers/Anaswara.webp";
import KrishanduttSathish from "../../assests/managers/Krishnadutt Sathish.webp";
import LankeshwarM from "../../assests/managers/Lankeshwar M.webp";
import ManishKumar from "../../assests/managers/Manish Kumar.webp";
import MohanaSomeshKumarP from "../../assests/managers/Mohana Somesh Kumar P.webp";
import rashmi from "../../assests/managers/Rashmi Kumari.webp";
import KarthikeyanN from "../../assests/excore member/Karthikeyan N.webp";
import ShankariRR from "../../assests/excore member/Sankari Ravi.webp";
import VSRathinavelMurugan from "../../assests/excore member/V S Rathinavel Murugan.webp";
import VidyashreeHariniM from "../../assests/excore member/Vidyashree Harini M.webp";
// Basic card rendering without heavy image logic to guarantee compile
const photoMap = {
  'Aaqhil Ahmed': AaqhilAhmed,
  'Chinmai Bathula': ChinmaiBathula,
  'Harinath SS': HarinathSS,
  'Parshana Baskaran': ParshanaBaskaran,
  'Priyadharshini M': Priyadharshini,
  'M. Roshan Bhaskar': RoshanBhaskar,
  'S. Swathilakshmi': Swathilakshmi,
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
  'Rashmi':rashmi,
  'Karthikeyan N': KarthikeyanN,
  'Shankari R R': ShankariRR,
  'V S Rathinavel Murugan': VSRathinavelMurugan,
  'Vidyashree Harini M': VidyashreeHariniM
};

const renderMemberCard = (member) => {
  const imgSrc = member.photo || member.image || photoMap[member.name];
  return (
      <div key={member.name} className="bg-white rounded-lg shadow w-72 p-4 m-2 text-center">
    {imgSrc ? (
      <img 
        src={imgSrc} 
        alt={member.name} 
        className="w-full h-64 object-cover object-top mb-3 rounded" 
        style={
          member.name === 'Vidyashree Harini M'
            ? { objectPosition: '50% 35%' }
            : member.name === 'Parshana Baskaran'
              ? { transform: 'rotate(90deg)' }
              : member.name === 'Rashmi'
                ? { transform: 'rotate(-90deg)' }
                : undefined
        }
      />
    ) : (
      <div className="w-full h-48 flex items-center justify-center bg-gray-200 mb-3 rounded text-white">
        No Image
      </div>
    )}
    <h3 className="font-semibold text-lg text-white">{member.name}</h3>
    {member.position && <p className="text-sm text-yellow-600">{member.position}</p>}
          <p className="text-sm text-white">{member.year || member.department || ''}</p>
      {member.linkedIn && (
        <div className="flex justify-center mt-2">
          {member.position === 'Faculty Advisor' ? (
            <a 
              href="https://www.nitt.edu/home/academics/departments/mech/faculty/sreejith/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-6 h-6"
            >
              <img 
                src={NITTLogo} 
                alt="NITT Logo"
                className="w-full h-full object-contain"
              />
            </a>
          ) : (
            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default function MembersClean() {
  const facultyAdvisors = [
    {
      name: 'Dr. Sreejith Mohan',
      position: 'Faculty Advisor',
      department: 'Department of Mechanical Engineering',
      photo: DrSreejithMohan,
      linkedIn: "https://www.linkedin.com/in/sreejith-mohan/",
    },
  ];

  const coreTeam = Array.isArray(coreMembersData) ? coreMembersData : coreMembersData.members || [];
  const exCoreTeam = Array.isArray(exCoreMembersData) ? exCoreMembersData : exCoreMembersData.members || [];
  const managers = Array.isArray(membersData) ? membersData : membersData.members || [];

  const [activeTab, setActiveTab] = useState('faculty');
  const [activeDivision, setActiveDivision] = useState('all');

  // derive manager divisions
  const managerDivisions = Array.from(new Set(managers.map((m) => m.division))).map((d) => ({ id: d, label: d, members: managers.filter((m) => m.division === d) }));

  const tabs = [
    { id: 'faculty', label: 'Faculty Advisors', count: facultyAdvisors.length },
    { id: 'excore', label: 'Ex-core', count: Math.max(4, exCoreTeam.length) },
    { id: 'core', label: 'Core Team', count: coreTeam.length },
    { id: 'managers', label: 'Managers', count: managers.length },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section style={{backgroundImage:`url(${heroBg})`}} className="bg-cover bg-center text-white">
        <div className="container-max section-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Meet the dedicated individuals who make TaskForce the premier student organization at NIT Trichy
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="bg-gray-50 py-12">
      <div className="container-max mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 m-1 rounded-full font-medium transition-colors duration-200 ${
                activeTab === tab.id ? 'bg-yellow-400 text-black' : 'bg-white text-gray-700 hover:bg-yellow-50'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'faculty' && (
          <div className="flex flex-wrap justify-center">
            {facultyAdvisors.map(renderMemberCard)}
          </div>
        )}

        {activeTab === 'core' && (
           <div className="flex flex-wrap justify-center">
             {coreTeam.map(renderMemberCard)}
           </div>
         )}
 
        {activeTab === 'excore' && (
           <div className="flex flex-wrap justify-center">
             {(() => {
               const placeholdersNeeded = Math.max(0, 4 - exCoreTeam.length);
               const placeholders = Array.from({ length: placeholdersNeeded }, (_, i) => ({
                 name: `Slot ${i + 1} (Coming soon)`,
                 position: '',
                 year: '',
                 linkedIn: ''
               }));
               const displayList = [...exCoreTeam, ...placeholders].slice(0, 4);
               return displayList.map(renderMemberCard);
             })()}
           </div>
         )}
 
         {activeTab === 'managers' && (
            <>
              {/* Division sub-tabs */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
                {managerDivisions.map((div) => (
                  <button
                    key={div.id}
                    onClick={() => setActiveDivision(div.id)}
                    className={`px-4 py-2 m-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                      activeDivision === div.id ? 'bg-yellow-400 text-black' : 'bg-white text-gray-700 hover:bg-yellow-50'
                    }`}
                  >
                    {div.label} ({div.members.length})
                  </button>
                ))}
              </div>
              {/* Division members */}
              <div className="flex flex-wrap justify-center">
                {managerDivisions
                  .filter((d) => activeDivision === d.id)
                  .flatMap((d) => d.members)
                  .map(renderMemberCard)}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
