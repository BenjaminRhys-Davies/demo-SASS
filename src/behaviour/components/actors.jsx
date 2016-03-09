'use strict';

const React = require('react');
const ActorItem = require('./actoritem.jsx');

const Actors = React.createClass({

  displayName: 'Actors',

  actors: [
    <ActorItem key='A' name='A' />,
    <ActorItem key='B' name='B' />,
    <ActorItem key='C' name='C' />,
    <ActorItem key='D' name='D' />,
    <ActorItem key='E' name='E' />,
    <ActorItem key='F' name='F' />
  ],

  render () {
    return (
      <div className='actors'>
        <h3 id='actors' className='actors__title'>Accredited</h3>
        <ol className='actors__tiles'>
          { this.actors }
        </ol>
      </div>
      );
  }

});

module.exports = Actors;
