import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ListUser from '../components/list_user.jsx';

export const composer = ({context}, onData) => {
  const {Meteor} = context();
  if(Meteor.subscribe("users.list").ready()){
    const users = Meteor.users.find({_id: {$ne: Meteor.userId()}}).fetch();
    onData(null, {users});
  }
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ListUser);
