export default function(state = [], action) {
    switch(action.type) {
        case 'ADD_EMPLOYEE':
            return state.concat(action.payload);
        default:
            return state;
    }
}