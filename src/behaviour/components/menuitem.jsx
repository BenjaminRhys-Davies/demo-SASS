'use strict';

const React = require('react');

const MenuItem = React.createClass({

  displayName: 'MenuItem',

  propTypes: {
    name: React.PropTypes.string,
    symbol: React.PropTypes.string
  },

  render () {
    const { name, symbol } = this.props;
    return (
      <li className='menuitem'>
        <a href={ `#${ name }` }
          title={ name }
          className={ `menuitem__${ name }` }>
          { symbol }
        </a>
      </li>
      );
  }

});

module.exports = MenuItem;
