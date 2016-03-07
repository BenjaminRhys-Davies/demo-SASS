'use strict';

const _ = require('lodash');
const React = require('react');

const Banner = React.createClass({

  displayName: 'Banner',

  render () {
    const title = 'awesome';

    return (
      <p>
        <abbr key={ title } className='banner' title='Syntactically Awesome Style Sheets'>
          { _.each(title.split(''), (letter) => letter) }
        </abbr>
      </p>
      );
  }

});

module.exports = Banner;
