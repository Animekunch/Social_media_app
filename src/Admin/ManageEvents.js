import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ManageEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const EventForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EventCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    image: '',
  });
  const [editEvent, setEditEvent] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editEvent) {
        await axios.put(`https://api.example.com/events/${editEvent.id}`, newEvent);
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event.id === editEvent.id ? { ...event, ...newEvent } : event
          )
        );
      } else {
        const response = await axios.post('https://api.example.com/events', newEvent);
        setEvents((prevEvents) => [...prevEvents, response.data]);
      }
      setNewEvent({
        title: '',
        description: '',
        date: '',
        location: '',
        image: '',
      });
      setEditEvent(null);
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  const handleEdit = (event) => {
    setNewEvent(event);
    setEditEvent(event);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api.example.com/events/${id}`);
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <ManageEventsContainer>
      <EventForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          value={newEvent.title}
          onChange={handleInputChange}
          placeholder="Event Title"
          required
        />
        <TextArea
          name="description"
          value={newEvent.description}
          onChange={handleInputChange}
          placeholder="Event Description"
          rows="4"
          required
        />
        <Input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="location"
          value={newEvent.location}
          onChange={handleInputChange}
          placeholder="Event Location"
          required
        />
        <Input
          type="text"
          name="image"
          value={newEvent.image}
          onChange={handleInputChange}
          placeholder="Event Image URL"
          required
        />
        <Button type="submit">{editEvent ? 'Update Event' : 'Add Event'}</Button>
      </EventForm>
      <EventList>
        {events.map((event) => (
          <EventCard key={event.id}>
            <h5>{event.title}</h5>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Image:</strong> <img src={event.image} alt={event.title} width="100" /></p>
            <Button onClick={() => handleEdit(event)}>Edit</Button>
            <Button onClick={() => handleDelete(event.id)}>Delete</Button>
          </EventCard>
        ))}
      </EventList>
    </ManageEventsContainer>
  );
};

export default ManageEvents;
