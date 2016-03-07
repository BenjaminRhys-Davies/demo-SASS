const React = require('react');
const Banner = require('./components/banner.jsx');
const Header = require('./components/header.jsx');
const Cover = require('./components/cover.jsx');
const Background = require('./components/background.jsx');

React.render(<section>
  <Banner />
  <Header />
  <main className='main'>
    <Background />
    <Cover />
  </main>
  </section>,
  document.getElementById('main')
  );
