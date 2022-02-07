import { ADD_TO_FAVORITE } from "./type";


const initialState = {
    favoriteId: []
};





export function favoriteReducer(state = initialState, action) {
    // console.log(action);
    // const lis_item = useSelector(e => e.initReducer);
    // let index = 0;



    // console.log(state.favorite.some((e) => e.favorite === action.data));

    //   console.log(id);
    //   console.log(action.data.id);

    // if (state.favorite)

    switch (action.type) {
        case ADD_TO_FAVORITE:

            const { favorite } = action.data;
            const { id } = action.data;
            console.log(action.data);
            // тупо делать условие

            // console.log(state.favoriteId);
            // console.log(state.favoriteId);
            // const add_favorite = (state.favoriteId.find((e) => e === action.data));

            // если есть, то удаляет, нету? значит добавляет
            if (favorite) {
                 return {
                    ...state,
                    favoriteId: [...state.favoriteId.filter((item) => item !== id)]
                }
            }
            

            else { 
               
                return {
                    ...state,
                    favoriteId: [...state.favoriteId, id]
                }
               
               
            }


        default: {
            return state;
        }


    }
}
