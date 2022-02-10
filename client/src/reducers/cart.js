const INITIAL_STATE = [
    // {
    //     id:1,
    //     name: "item1",
    //     price: 20.00,
    //     size: "XS",
    //     quantity: 3,
    //     img:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    //   },
    //   {
    //     id:2,
    //     name: "item2",
    //     price: 20.00,
    //     size: "L",
    //     quantity: 1,
    //     img:"https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
    //   },
];


const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ITEM': 
            state.push(action.payload);
            return state;
        case 'REMOVE_ITEM': 
            return state.filter(item => item !== action.payload);
        case "ADD_QUANTITY":
            const index = state.findIndex(obj => obj.id === action.payload.id && obj.size === action.payload.size);
            state[index].quantity += 1;
            return state;
        default:
            return state;
    }
}



export default cartReducer;
