import { CHANGE_PRIMARY_COLOR } from '../actions/themes';

const initialState = {
    primaryColor: '#4F6D7A'
};

// off blue - 4F6DFA

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PRIMARY_COLOR:
            return {
                ...state,
                primaryColor: action.color
            };
        default: 
            return state;
    }
}