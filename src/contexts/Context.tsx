import { createContext, useReducer } from "react";
import { userInitialState, userReducer } from '../reducers/userReducer';
import { authInitialState, authReducer } from "../reducers/authReducer";
import { userType } from "../types/userType";
import { authType } from "../types/authType";
import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {
    user: userType;
    auth: authType;
}
type contextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>
}

const initialState: initialStateType = {
   user: userInitialState,
   auth: authInitialState
}

export const Context = createContext<contextType>({
    state: initialState,
    dispatch: () => null
});
const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
    auth: authReducer(state.auth, action)
});

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}