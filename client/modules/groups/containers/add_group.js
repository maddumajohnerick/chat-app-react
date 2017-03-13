import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import AddGroup from '../components/add_group.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();

  const error = LocalState.get('GROUP_ERROR');
  onData(null, {error});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  addGroup: actions.groups.addGroup,
  clearErrors: actions.groups.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AddGroup);
