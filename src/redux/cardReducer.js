import { ADD_TO_CARD, DELETE_TO_CARD } from "./type";
import { useSelector } from 'react-redux';
const initialState = {
    card: [],
    cardIndex: 0
};





export function cardReducer(state = initialState, action)  {
    // console.log(action);
    // const lis_item = useSelector(e => e.initReducer);
    let index = 0;

    
    // console.log(action.data);
    // console.log(state);
    switch (action.type) {
        case ADD_TO_CARD:   
        
        const data = [{...action.data, index: state.cardIndex}];   
            return {
                ...state,
                card: [...state.card, ...data],
                cardIndex: state.cardIndex + 1 
            }

            case DELETE_TO_CARD:      
            return {
                ...state,
                card: [...state.card.filter((item) => item.index !== action.data), ] 
            }
        default: {
            return state;
        }

    }
}
