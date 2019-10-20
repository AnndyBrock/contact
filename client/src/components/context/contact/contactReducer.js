import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types'

export default (state, action)=>{
    switch (action.type) {
        case ADD_CONTACT:
            return {
              ...state
            };
        case DELETE_CONTACT:
            return {
                ...state
            };
        case CLEAR_CURRENT:
            return {
                ...state
            };
        case SET_CURRENT:
            return {
                ...state
            };
        case FILTER_CONTACT:
            return {
                ...state
            };
        case CLEAR_FILTER:
            return {
                ...state
            };
        default:
            return state;
    }
}