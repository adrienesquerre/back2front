import React from 'react';

export const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
  return(
    <div id="header">
      <div id="monthDisplay">{dateDisplay}</div>
      <div>
        <button className="cal" onClick={onBack} id="backButton">Back</button>
        <button className="cal" onClick={onNext} id="nextButton">Next</button>
      </div>
    </div>
  );
};

export default CalendarHeader