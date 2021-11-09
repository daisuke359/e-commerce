
const cartReducer = (state = ["item1"], action) => {
    switch (action.type) {
        case 'ADD_ITEM': 
            return state.push(action.payload);
        case 'REMOVE_ITEM': 
            return state.filter(item => item != action.payload);
        default:
            return state;
    }
}



export default cartReducer;
