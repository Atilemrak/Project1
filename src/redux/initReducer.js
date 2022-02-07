import { INIT_ITEM } from "./type";

// const initialState = {
    // list_item: []
// };

const initialState = {
    list_item: ['']
};

export function initReducer(state = initialState, action) {
    // console.log(action);
    // console.log(action.data);
    // console.log(state);
    switch (action.type) {
        case INIT_ITEM:
        const {data} = action.data;
        console.log(data);

            return {
                ...state,
                list_item: data
               
            }
            
        default: {
            return state;
        }

    }
}
