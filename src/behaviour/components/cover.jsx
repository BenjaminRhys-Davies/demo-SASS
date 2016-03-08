'use strict';

const React = require('react');

const ActorTile = require('./actortile.jsx');

const Cover = React.createClass({

  displayName: 'Cover',

  actors: [
    <ActorTile key='A' name='A' />,
    <ActorTile key='B' name='B' />,
    <ActorTile key='C' name='C' />,
    <ActorTile key='D' name='D' />,
    <ActorTile key='E' name='E' />,
    <ActorTile key='F' name='F' />
  ],

  render () {
    return (
        <section className='cover'>
          <div className='cover__background'>
            <div className='cover__margin'>
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
          </div>

          <div className='cover__description'>
            <div className='cover__descriptionimage'>
              <div className='cover__margin'>
                <h3 id='description' className='cover__descriptiontitle'>Description</h3>
                <p>It’s the story about a lazy, irreverent slacker panda, named Po, who is the biggest fan of Kung Fu around… which doesn’t exactly come in handy while working every day in his family’s noodle shop.</p>
                <p>Unexpectedly chosen to fulfill an ancient prophecy, Po’s dreams become reality when he joins the world of Kung Fu and studies alongside his idols, the legendary Furious Five -- Tigress, Crane, Mantis, Viper and Monkey -- under the leadership of their guru, Master Shifu.</p>
                <p>But before they know it, the vengeful and treacherous snow leopard Tai Lung is headed their way, and it’s up to Po to defend everyone from the oncoming threat.</p>
                <p>Can he turn his dreams of becoming a Kung Fu master into reality? Po puts his heart - and his girth - into the task, and the unlikely hero ultimately finds that his greatest weaknesses turn out to be his greatest strengths.</p>
                <p>Written by Anthony Pereyra hypersonic91@yahoo.com</p>

                <div className='cover__actors'>
                  <h3 id='actors' className='cover__actorstitle'>Accredited</h3>
                  <ol className='cover__actortiles'>
                    { this.actors }
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
  }

});

module.exports = Cover;
