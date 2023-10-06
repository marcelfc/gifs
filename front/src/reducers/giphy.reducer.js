const reducer = (state, action) => {
  switch (action.type) {
    case 'LIST_GYPHYS':
      return action.data;

    case 'SEARCH_GYPHYS':
      return action.data;

    default:
      throw new Error('Action not found');
  }
};

export default reducer;
