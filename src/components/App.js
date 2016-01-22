require('normalize.css');
require('styles/App.css');
require('react-big-calendar/lib/css/react-big-calendar.css');

import React from 'react';

import { yeoman } from 'images';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

const events = [{
  'title': 'All Day Event',
  'allDay': true,
  'start': new Date(2015, 3, 0),
  'end': new Date(2015, 3, 0),
}, {
  'title': 'Long Event',
  'start': new Date(2015, 3, 7),
  'end': new Date(2015, 3, 10),
}];

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div style={{ width: 500, height: 300 }}>
          <BigCalendar
            events={events}
            views={['month']}
          />
        </div>

        <img src={yeoman} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

export default AppComponent;
