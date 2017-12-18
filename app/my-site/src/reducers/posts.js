import _ from 'lodash';
import {
  createReducer
} from 'redux-create-reducer';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  posts: [
    {
      id: _.uniqueId(),
      title: "Test Post 1",
      content: "## This is my first post!"
    },
    {
      id: _.uniqueId(),
      title: "Test Post 1",
      content: "## This is my first post!"
    }
  ],
  nav: {
    isOpen: false
  },
  name: "Test Subject 01"
});

/**
 * @param {Immutable.Map} domain
 * @param {Object} action
 * @param {string} action.data.title
 * @param {string} action.data.content
 * @returns {Immutable.Map}
 */
const POST_ADD = (domain, action) => {
  return domain.update('posts', posts => posts.push(Immutable.Map({
    id: _.uniqueId(),
    title: action.data.title,
    content: action.data.content
  })));

};

/**
 * @param {bool} domain
 * @param {Object} action
 * @param {string} action.data.isOpen
 * @returns {bool}
 */
const NAV_TOGGLE = (domain) => {
  return domain.updateIn(['nav', 'isOpen'], isOpen => !isOpen);
}

//
// /**
//  * @param {Immutable.List} domain
//  * @param {Object} action
//  * @param {number} action.data.id
//  * @returns {Immutable.List}
//  */
// const TASK_DONE = (domain, action) => {
//   const index = domain.findIndex((item) => {
//     return item.get('id') === action.data.id;
//   });
//
//   return domain
//     .update(index, (task) => {
//       return task.set('done', true);
//     });
// };
//
// /**
//  * @param {Immutable.List} domain
//  * @param {Object} action
//  * @param {number} action.data.id
//  * @returns {Immutable.List}
//  */
// const TASK_UNDONE = (domain, action) => {
//   const index = domain
//     .findIndex((item) => {
//       return item.get('id') === action.data.id;
//     });
//
//   return domain
//     .update(index, (task) => {
//       return task.set('done', false);
//     });
// };

export default createReducer(initialState, {
  POST_ADD,
  NAV_TOGGLE
});
