require('normalize.css');
require('styles/App.css');

import React from 'react';

import { yeoman } from 'images';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeoman} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

export default AppComponent;
