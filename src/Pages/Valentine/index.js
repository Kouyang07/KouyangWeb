import React, { useState } from 'react';
import './index.css';

// Example event data
const events = [
  {
    name: "Meeting Samantha",
    time: "February 2023",
    description: "When my life changed forever.",
    pictures: require("./febuary.jpg")
  },
  {
    name: "Why do I love this troll so much?",
    time: "March 2023",
    description: "What did I get myself into?...",
    pictures: require("./march.jpg")
  },
  {
    name: "Endless badminton and love :)",
    time: "April 2023",
    description: "Rip my legs, knees, foot, and back... but it's worth it!",
    pictures: require("./april.jpg")
  },
  {
    name: "Chicago!",
    time: "May 2023",
    description: "I got in bed with her! :O",
    pictures: require("./may.jpg")
  },
  {
    name: "Bye... :(",
    time: "June 2023",
    description: "Where did my bao bei go?",
    pictures: require("./june.jpg")
  },
  {
    name: "Wait... she's back?!?",
    time: "July 2023",
    description: "Rizzed up by her boba and math skills...",
    pictures: require("./july.jpg")
  },
  {
    name: "The beginning of my sleep deprivation",
    time: "August 2023",
    description: "She became my bao bei again and now I'm sleep deprived every day...",
    pictures: require("./august.jpg")
  },
  {
    name: "Rip she's gone again... to college :(",
    time: "September 2023",
    description: "No more badminton, McDonald's, and boba with her :( Also ditched for Tressa :/",
    pictures: require("./september.jpg")
  },
  {
    name: "Rise of the Marshmellow Game",
    time: "October 2023",
    description: "\"Shut it down :<\" - Tournament director",
    pictures: require("./october.jpg")
  },
  {
    name: "Club28",
    time: "November 2023",
    description: "Next year you're mine for XD or else... :>",
    pictures: require("./november.jpg")
  },
  {
    name: "Start of my Gambling Addiction :)",
    time: "December 2023",
    description: "I hereby declare Samantha and Kaicheng Ouyang as Texas Hold'em champions!",
    pictures: require("./december.jpg")
  }
];

const EventsList = () => {
  const [password, setPassword] = useState('');
  const [showContent, setShowContent] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (password === 'Valentine2024') {
      setShowContent(true);
    }
  };

 return (
    <div>
    <div className={showContent ? 'background-image' : ''}>
      {showContent && (
        <h1 style={{ textAlign: 'center', color: 'red' }}>2023 Samantha & Petah recap</h1>
      )}
      {!showContent ? (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '80vh' }}>
          <div style={{ marginBottom: '100px' }}>
            <h1 style={{ color: '#AF1212' }}>Enter the password to see the content :)</h1>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <div>
              <h4 style={{ color: 'white' }}>Password:</h4>
            </div>
            <div>
              <form onSubmit={handlePasswordSubmit} className="text-center">
                <label>
                  <input type="password" value={password} onChange={handlePasswordChange} className="password-input" style={{ backgroundColor: 'white', color: 'black' }} />
                </label>
                <button type="submit" className="rounded">Submit</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        events.map((event, index) => (
          <div key={index} className="event-link">
            <div className="border border-primary border-3 p-4 mb-4 rounded">
              <div className="row">
                <div className="col-md-8 d-flex flex-column align-items-center justify-content-center">
                  <h2 style={{ color: 'black' }}>{event.name}</h2>
                  <p style={{ color: 'black' }}>Time: {event.time}</p>
                  <p style={{ color: 'black' }}>{event.description}</p>
                </div>
                {event.pictures && (
                  <div className="col-md-4">
                    <img src={event.pictures} alt={event.name} className="img-fluid" />
                  </div>
                )}
              </div>
            </div>
          </div>
          
        ))
      )}
    </div>
    {showContent && (
      <h1 style={{ textAlign: 'center', color: 'red' }}>Happy Valentine's Day Samantha, I love you a lot 💘</h1>
    )}
    </div>
  );
};

export default EventsList;
