import { BUY_ICECREAM } from "./IceCreamTypes";

const initialState = {
    numberOfIcecreams : 20
}

const IceCreamReducer = (state = initialState, action) =>{
    switch(action.type)
    {
        case BUY_ICECREAM:
            return{
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - 1
            }

        default:
            return state;
    }
}

export default IceCreamReducer;