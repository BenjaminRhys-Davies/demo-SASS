'use strict';

const React = require('react');

const NavigationToggle = React.createClass({

  displayName: 'NavigationToggle',

  render () {
    return (
      <button className='navigationtoggle'>&#9776;</button>
      );
  }

});

module.exports = NavigationToggle;
