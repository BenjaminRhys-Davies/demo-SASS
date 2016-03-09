const React = require('react');
const Banner = require('./components/banner.jsx');
const Header = require('./components/header.jsx');
const Movie = require('./components/movie.jsx');

React.render(
  <section>
    <Banner />
    <Header />
    <Movie />
  </section>,
  document.getElementById('main')
  );
