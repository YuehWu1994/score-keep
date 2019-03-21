import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calculateplayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    // the first parenthesis specify 'all'
    let players = Players.find({}, { sort: { score : -1} }).fetch();
    let positionedPlayer = calculateplayerPositions(players);
    let title = 'Score Keep';
    ReactDOM.render(<App title={title} players={positionedPlayer}/>, document.getElementById('app'));
  });
});
