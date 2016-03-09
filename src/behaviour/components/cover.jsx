'use strict';

const React = require('react');

const Cover = React.createClass({

  displayName: 'Cover',

  render () {
    return (
      <div className='cover'>
        <p className='cover__image'><img src='movie/kungfupanda/cover.jpg' alt='' /></p>
        <h2 id='title' className='cover__title'>Kung Foo Panda</h2>
        <p className='cover__details'>
          PG
          <span className='cover__detailseperator'>|</span>
          1h 32min
          <span className='cover__detailseperator'>|</span>
          Animation, Adventure
        </p>
      </div>
      );
  }

});

module.exports = Cover;
