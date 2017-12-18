import {
  createSelector
} from 'reselect';

const postsSelector = (state) => {
  return state.get('posts');
};

const nameSelector = (state) => {
  return state.get('name');
}

const navOpenSelector = (state) => {
  return state.getIn(['nav', 'isOpen']);
}

export default (state) => {
  return {
    posts: postsSelector(state),
    name: nameSelector(state),
    navOpen: navOpenSelector(state)
  };
};
