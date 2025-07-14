import React, { useState } from 'react';
import './Events.css';

const Events = () => {
  const [activeSection, setActiveSection] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const pastEvents = [
    {
      id: 1,
      title: "Cloud 101 – Kickstart Your AWS Journey",
      date: "6th April 2025",
      platform: "Google Meet",
      speaker: "Indranil Bhattacharyya (Data Scientist, RNTBCI)",
      hostedBy: "Sujit L.",
      overview: "An introductory session covering AWS core services, pricing models, and architecture basics. Participants explored real-world applications and AWS career opportunities.",
      image: "https://secure.meetupstatic.com/photos/event/2/8/6/e/highres_527170350.webp?w=384",
      tags: ["Beginner", "Workshop"]
    },
    {
      id: 2,
      title: "AWS DeepRacer Virtual Race – March'25 Edition",
      date: "8th – 15th March 2025",
      platform: "Online Event",
      speaker: "Indranil Bhattacharyya",
      hostedBy: "Sujit L.",
      overview: "A machine learning race event using AWS DeepRacer. Participants trained and raced autonomous model cars using reinforcement learning. Hands-on learning opportunity.",
      image: "https://secure.meetupstatic.com/photos/event/7/7/8/c/highres_526650604.webp?w=384",
      tags: ["Intermediate", "Competition"]
    },
    {
      id: 3,
      title: "AWS Exam Slam – AWS Cloud Practitioner Bootcamp",
      date: "Not specified",
      platform: "Online",
      speaker: "Indranil Bhattacharyya",
      hostedBy: "Indranil B.",
      overview: "A deep dive into AWS Cloud fundamentals and certification prep. Included exam tips and a special challenge event with AWS certification vouchers for top participants.",
      image: "https://secure.meetupstatic.com/photos/event/6/7/c/3/highres_516506563.jpeg?w=384",
      tags: ["Certification", "Workshop"]
    },
    {
      id: 4,
      title: "AWS DeepRacer Virtual Race – Sep'24 Edition",
      date: "22nd – 29th September 2024",
      platform: "Online",
      speaker: "Not listed",
      hostedBy: "Indranil B.",
      overview: "An extension of the successful AWS DeepRacer competitions, this edition highlighted autonomous racing and model training through Deep Reinforcement Learning.",
      image: "https://secure.meetupstatic.com/photos/event/8/a/b/highres_523562219.webp?w=384",
      tags: ["Machine Learning", "Competition"]
    },
    {
      id: 5,
      title: "AWS DeepRacer Virtual Race – May'24 Edition",
      date: "5th – 14th May 2024",
      platform: "Online",
      speaker: "Not listed",
      hostedBy: "Indranil B.",
      overview: "A recurring event focused on AWS DeepRacer, including model design and training. Provided exposure to new technologies and hands-on ML experience.",
      image: "https://secure.meetupstatic.com/photos/event/6/7/c/3/highres_516506563.jpeg?w=384",
      tags: ["Hands-on", "Workshop"]
    },
    {
      id: 6,
      title: "AWS Cloud Club Orientation – Welcome to the Cloud",
      date: "Not specified",
      platform: "Not specified",
      speaker: "Stephen Howell (AWS Academic Developer Advocate)",
      hostedBy: "Indranil B.",
      overview: "The club's orientation session introduced its vision and mission, followed by an insightful keynote by AWS expert Stephen Howell. Included networking and Q&A.",
      image: "https://secure.meetupstatic.com/photos/event/6/7/c/3/highres_516506563.jpeg?w=384",
      tags: ["Orientation", "Networking"]
    }
  ];

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>Events</h1>
        <div className="events-navigation">
          <button
            className={`nav-button ${activeSection === 'all' ? 'active' : ''}`}
            onClick={() => setActiveSection('all')}
          >
            All Events
          </button>
          <button
            className={`nav-button ${activeSection === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveSection('upcoming')}
          >
            Upcoming Events
          </button>
          <button
            className={`nav-button ${activeSection === 'past' ? 'active' : ''}`}
            onClick={() => setActiveSection('past')}
          >
            Past Events
          </button>
        </div>
      </div>

      <div className="events-content">
        {activeSection === 'all' && (
          <div className="events-section">
            <h2>All Events</h2>
            <div className="events-grid">
              {pastEvents.map(event => (
                <div key={event.id} className="event-card" onClick={() => handleEventClick(event)}>
                  <div className="event-image-container">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="event-image"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/event-default.jpg';
                      }}
                    />
                  </div>
                  <div className="event-card-content">
                    <h3>{event.title}</h3>
                    <div className="event-meta">
                      {event.date && <span>📅 {event.date}</span>}
                      <div className="event-tags">
                        {event.tags.map((tag, index) => (
                          <span key={index} className="event-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <p className="event-overview">{event.overview.substring(0, 100)}...</p>
                    <button
                      className="learn-more-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEventClick(event);
                      }}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'upcoming' && (
          <div className="events-section">
            <h2>Upcoming Events</h2>
            <div className="coming-soon">
              <p>Coming Soon...</p>
            </div>
          </div>
        )}

        {activeSection === 'past' && (
          <div className="events-section">
            <h2>Past Events</h2>
            <div className="events-grid">
              {pastEvents.map(event => (
                <div key={event.id} className="event-card" onClick={() => handleEventClick(event)}>
                  <div className="event-image-container">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="event-image"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/event-default.jpg';
                      }}
                    />
                  </div>
                  <div className="event-card-content">
                    <h3>{event.title}</h3>
                    <div className="event-meta">
                      {event.date && <span>📅 {event.date}</span>}
                      <div className="event-tags">
                        {event.tags.map((tag, index) => (
                          <span key={index} className="event-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <p className="event-overview">{event.overview.substring(0, 100)}...</p>
                    <button
                      className="learn-more-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEventClick(event);
                      }}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {showModal && selectedEvent && (
        <div className="event-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <div className="modal-image-container">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="modal-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/event-default.jpg';
                }}
              />
            </div>
            <h3>{selectedEvent.title}</h3>
            <div className="modal-details">
              {selectedEvent.date && <p><span>📅 Date:</span> {selectedEvent.date}</p>}
              {selectedEvent.platform && <p><span>📍 Platform:</span> {selectedEvent.platform}</p>}
              {selectedEvent.speaker && <p><span>🎙 Speaker:</span> {selectedEvent.speaker}</p>}
              {selectedEvent.hostedBy && <p><span>👤 Hosted by:</span> {selectedEvent.hostedBy}</p>}
              {selectedEvent.tags && (
                <div className="modal-tags">
                  {selectedEvent.tags.map((tag, index) => (
                    <span key={index} className="modal-tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="modal-overview">
              <h4>Overview:</h4>
              <p>{selectedEvent.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;