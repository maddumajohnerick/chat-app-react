import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Images from '../components/images.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections} = context();

  const testTxt = "testing";
  onData(null, {testTxt});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  uploadImage: actions.images.uploadImage,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Images);
