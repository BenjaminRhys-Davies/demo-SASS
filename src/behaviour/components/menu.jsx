'use strict';

const React = require('react');
const MenuItem = require('./menuitem.jsx');

const Menu = React.createClass({

  displayName: 'Menu',

  _menuItems: [
    <MenuItem key='settings' name='settings' symbol='&#x2699;' />,
    <MenuItem key='extended' name='extended' symbol='&#x22ee;' />
  ],

  render () {
    return (
      <ol className='menu'>
        { this._menuItems }
      </ol>
      );
  }

});

module.exports = Menu;
