export const add_to_cart = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item,
    }
}

export const remove_from_cart = (item) => {
    return {
        type: "REMOVE_ITEM",
        payload: item,
    }
}

export const add_quantity = (item) => {
    return {
        type: "ADD_QUANTITY",
        payload: item,
    }
}