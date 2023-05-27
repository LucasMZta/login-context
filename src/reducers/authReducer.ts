import { authType } from "../types/authType";
import { reducerActionType } from "../types/reducerActionType";


export const authInitialState: authType = {
   auth: false
}

export const authReducer = (state: authType, action: reducerActionType) => {
    switch (action.type) {
        case 'LOGIN_STATUS':
            return { ...state, auth: action.payload.auth}
            break;
    }
    return state;

}