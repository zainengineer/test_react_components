const initialState = {
      name:'zain',
      page: 10,
};
const button = (state = initialState , action) => {
    switch (action.type) {
        case 'HACK_GRID_ROW':
            return {...state,page:5};
        default:
            return state
    }
};

export default button
