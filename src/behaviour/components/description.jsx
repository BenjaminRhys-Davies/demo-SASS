'use strict';

const React = require('react');
const Actors = require('./actors.jsx');

const Description = React.createClass({

  displayName: 'Description',

  render () {
    return (
      <div className='description'>
        <div className='description__fade'>
          <h3 id='description' className='description__title'>Description</h3>
          <p>It’s the story about a lazy, irreverent slacker panda, named Po, who is the biggest fan of Kung Fu around… which doesn’t exactly come in handy while working every day in his family’s noodle shop.</p>
          <p>Unexpectedly chosen to fulfill an ancient prophecy, Po’s dreams become reality when he joins the world of Kung Fu and studies alongside his idols, the legendary Furious Five -- Tigress, Crane, Mantis, Viper and Monkey -- under the leadership of their guru, Master Shifu.</p>
          <p>But before they know it, the vengeful and treacherous snow leopard Tai Lung is headed their way, and it’s up to Po to defend everyone from the oncoming threat.</p>
          <p>Can he turn his dreams of becoming a Kung Fu master into reality? Po puts his heart - and his girth - into the task, and the unlikely hero ultimately finds that his greatest weaknesses turn out to be his greatest strengths.</p>

          <Actors />
        </div>
      </div>
      );
  }

});

module.exports = Description;
