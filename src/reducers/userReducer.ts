import { userType } from "../types/userType";
import { reducerActionType } from "../types/reducerActionType";


export const userInitialState: userType = {
    name: 'Lucas',
    lastname: 'Martins',
    email: 'lucas@lucas.com',
    password: '123'
}

export const userReducer = (state: userType, action: reducerActionType) => {
    switch (action.type) {
        case 'CREATE_USER':
            return { ...state, name: action.payload.name, lastname: action.payload.lastname, email: action.payload.email, password: action.payload.password }
            break;
    }

    return state;

}