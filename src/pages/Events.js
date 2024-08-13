import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const EventsHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
`;

const EventCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const EventBody = styled.div`
  padding: 1rem;
`;

const EventTitle = styled.h5`
  margin: 0;
  font-size: 1.25rem;
  color: #007bff;
`;

const EventDescription = styled.p`
  margin: 0.5rem 0;
  color: #666;
`;

const EventDetails = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.875rem;
`;

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://api.example.com/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <EventsContainer>
      <EventsHeader>Upcoming Events</EventsHeader>
      <EventsGrid>
        {events.map((event) => (
          <EventCard key={event.id}>
            <EventImage src={event.image} alt={event.title} />
            <EventBody>
              <EventTitle>{event.title}</EventTitle>
              <EventDescription>{event.description}</EventDescription>
              <EventDetails>
                <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
              </EventDetails>
              <EventDetails>
                <strong>Location:</strong> {event.location}
              </EventDetails>
            </EventBody>
          </EventCard>
        ))}
      </EventsGrid>
    </EventsContainer>
  );
};

export default Events;
