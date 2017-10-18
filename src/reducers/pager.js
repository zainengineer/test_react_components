//reducers don't get to define structure of state, components do.
export default (state, action) => {
    switch (action.type) {
        case 'NEXT':
            if (state.current>=state.total){
                return state;
            }
            let newstate =  {...state, current: state.current + 1};
            return newstate;
        case 'PREV':
            return {...state, current: state.current - 1};
        case 'SET':
            return {...state, current: action.payload.page};
        default:
            return state
    }
}
