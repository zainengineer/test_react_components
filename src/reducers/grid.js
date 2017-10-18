//reducers don't get to define structure of state, components do.
export default (state, action) => {
    switch (action.type) {
        case 'SET':
            return {...state, current: action.payload.page};
        default:
            return state
    }
}
