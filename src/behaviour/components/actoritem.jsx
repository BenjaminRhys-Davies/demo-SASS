'use strict';

const React = require('react');

const ActorTile = React.createClass({

  displayName: 'ActorTile',

  propTypes: {
    name: React.PropTypes.string
  },

  render () {
    const { name } = this.props;
    return (
      <li className='actortile'>
        <a className='actortile__link' href='#' style={{ 'backgroundColor': `#f0${name}f00` }}>
          { name }
        </a>
      </li>
      );
  }

});

module.exports = ActorTile;
