import React from 'react';

export const DeleteEventModal = ({ onDelete, eventText, onClose }) => {
  return(
    <>
      <div id="deleteEventModal">
        <h5>Event</h5>

        <p id="eventText">{eventText}</p>

        <button onClick={onDelete} id="deleteButton">Delete</button>
        <button onClick={onClose} id="closeButton">Close</button>
      </div>

      <div id="modalBackDrop"></div>
    </>
  );
};

export default DeleteEventModal;