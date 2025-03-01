import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Pages.css';
import { Header } from '../ui/Header';
import { Navbar } from '../ui/NavBar';



export const CalendarWTM = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [eventText, setEventText] = useState('');
    const [editEvent, setEditEvent]= useState('')
  
    const handleDateChange = date => {
      setSelectedDate(date);
    };
  
    const handleAddEvent = () => {
      setShowModal(true);
    };
  
    const handleSaveEvent = () => {
      if (selectedDate && eventText.trim() !== '') {
        const newEvent = {
          date: selectedDate,
          description: eventText
        };
  
        setEvents([...events, newEvent]);
        setSelectedDate(null);
        setEventText('');
        setShowModal(false);
      }
    };
  
    
  const handleEditEvent =() =>{
    if (selectedDate && eventText.trim() !== '') {
        const updatedEvent = {
          date: selectedDate,
          description: eventText
        };
        
        /*const eventIndex = updatedEvent.findIndex(event => event.date === selectedDate);
        if(eventIndex !== -1){
            updatedEvent[eventIndex] ={
           date: selectedDate,
           description: eventText 
            }
        }*/
        const updatedEvents = events.map(event => {
            if (event.date === selectedDate) {
              return updatedEvent;
            }
            return event;
          });
  
        setEvents([updatedEvent]);
        setSelectedDate(null);
        setEventText('');
        setShowModal(false);
      } else{
        console.log('Event not found')
      }

  }

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="calendar">
    <Navbar/>
    <Header/>
    
    <h2 className='amount'>Amount</h2>
     <div className="container">
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        calendarType="ISO 8601"
      />
      <button className="save-button" onClick={handleAddEvent}>Add</button>

      

      {events.map(event => (
        <div key={event.date.toString()} className="event">
          <p className="event-date">Date: {event.date.toLocaleDateString()}</p>
          <p className="event-description">description: {event.description}</p>
        </div>
      ))}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add</h3>
            <input
              type="text"
              placeholder="Description"
              value={eventText}
              onChange={e => setEventText(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handleSaveEvent} className="save-button">Save</button>
              <button onClick={handleEditEvent} className="edit-button">Edit</button>
              <button onClick={handleModalClose} className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
   
  );
};

export default Calendar