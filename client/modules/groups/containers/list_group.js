import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ListGroup from '../components/list_group.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe("groups.list").ready()){
    const groups = Collections.Groups.find().fetch();
    onData(null, {groups});
  }
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ListGroup);
