const postAdd = (title, content) => {
  return {
    data: {
      title,
      content
    },
    type: 'POST_ADD'
  };
};

const navToggle = () => {
  return {
    data: {},
    type: 'NAV_TOGGLE'
  };
};
//
// const taskUndone = (id) => {
//   return {
//     data: {
//       id
//     },
//     type: 'TASK_UNDONE'
//   };
// };

export {
  postAdd,
  navToggle
};
