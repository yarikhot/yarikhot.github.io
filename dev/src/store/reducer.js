import * as actions from './aciton';

export default function reducer(state, action) {
    switch (action.type) {
        case actions.GET_USER:
            return {
                ...state,
                user: action.user
            };
        case actions.GET_TOKEN:
            return {
                ...state,
                token: action.token
            };
        case actions.SET_COUNT:
            return {
                ...state,
                count: action.count,
                isLoadingUsers: true,
            };
        case actions.GET_OUR_USERS:
            return {
                ...state,
                colleagues: action.colleagues,
                isLoadingUsers: false
            };

        case actions.GET_POSITION:
            return {
                ...state,
                position: action.position
            };
        default:
            return state;
    }
}