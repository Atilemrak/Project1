import { ADD_TO_CARD, ADD_TO_FAVORITE, DELETE_TO_CARD, INIT_ITEM } from "./type";

export function initItem(post) {
    return {
        type: INIT_ITEM,
        data: post
    }
}

export function add_To_Card(post) {
    return {
        type: ADD_TO_CARD,
        data: post
    }
}

export function delete_To_Card(post) {
    return {
        type: DELETE_TO_CARD,
        data: post
    }
}

export function add_To_Favorite(id, favorite) {
    return {
        type: ADD_TO_FAVORITE,
        data: {id, favorite}
    }
}