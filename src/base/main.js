// Polyfills
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, hashHistory } from 'react-router';

import BigCalendar from 'react-big-calendar';

import moment from 'moment';

import routes from './routes';

import 'styles/main.less';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const content = document.getElementById('content');

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, content);
