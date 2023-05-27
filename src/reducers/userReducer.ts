import { userType } from "../types/userType";
import { reducerActionType } from "../types/reducerActionType";


export const userInitialState: userType = {
    name: '',
    lastname: '',
    email: '',
    password: ''
}

export const userReducer = (state: userType, action: reducerActionType) => {
    switch (action.type) {
        case 'CREATE_USER':
            return { ...state, name: action.payload.name, lastname: action.payload.lastname, email: action.payload.email, password: action.payload.password }
            break;
    }

    return state;

}