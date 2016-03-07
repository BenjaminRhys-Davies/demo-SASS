'use strict';

const React = require('react');
const Menu = require('./menu.jsx');
const NavigationToggle = require('./navigationtoggle.jsx');

const Header = React.createClass({

  displayName: 'Header',

  render () {
    return (
      <header className='header'>
        <NavigationToggle />
        <h1>Demo</h1>
        <Menu />
      </header>
      );
  }

});

module.exports = Header;
