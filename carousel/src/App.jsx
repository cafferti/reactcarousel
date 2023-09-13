import { useState } from 'react'
import CrewCarousel from './carousel'


  const crewmembers = [
    {
      Role: "Commander",
      Name: " Douglas Hurley",
      About:
        "    Douglas Gerald Hurley is an American engineer, former Marine Corps pilotand former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      Role: "  Flight Engineer",
      Name: "Anousheh Ansari",
      About:
        "     Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    },
    {
      Role: " Pilot",
      Name: " Victor Glover",
      About:
        "     Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    {
      Role: " Mission Specialist",
      Name: " Mark Shuttleworth",
      About:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist. ",
    },
  ];

  function App() {
    return (
      <div className="App">
        <h1>Space Crew Members</h1>
        <CrewCarousel crewmembers={crewmembers} />
      </div>
    );
  }

  
  export default App;