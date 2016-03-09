'use strict';

const React = require('react');
const Background = require('./background.jsx');
const Cover = require('./cover.jsx');
const Description = require('./description.jsx');

const Movie = React.createClass({

  displayName: 'Movie',

  render () {
    return (
      <main className='movie'>
        <Background />
        <section className='movie__details'>
          <Cover />
          <Description />
        </section>
      </main>
      );
  }

});

module.exports = Movie;
