import React, { createContext, useReducer } from 'react'
import { authReducer } from './AuthReducer';



//Definimos que informacion voy a tener aca

export interface AuthState {
    isLoggedIn: boolean;
    username ?: string;
    favoriteColor ?: string
};


//Estado inicial
export const authInitialState : AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteColor: undefined
}


//Usamos esto para decirle a React como se ve y que tiene el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

//Creamos el context
export const AuthContext = createContext({} as AuthContextProps);





//Componente proveedor del estado
export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);


    const signIn = () => {
        dispatch({type: 'signIn'})
    }



    return (
        <AuthContext.Provider value={{
            authState,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}