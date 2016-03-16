import React from 'react';
import BigCalendar from 'react-big-calendar';

const events = [{
  title: 'All day event',
  allDay: true,
  start: new Date(2015, 3, 0),
  end: new Date(2015, 3, 0),
}];

const Home = () => (
  <div>
    <BigCalendar events={events} defaultDate={new Date(2015, 3, 0)} />
  </div>
);

export default Home;
