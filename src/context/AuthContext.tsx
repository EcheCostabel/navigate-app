import React, { createContext, useReducer } from 'react'
import { authReducer } from './authReducer';



//Definimos que informacion voy a tener aca
export interface AuthState {
    isLoggedIn: boolean;
    username ?: string;
    favoriteIcon ?: string
};


//Estado inicial
export const authInitialState : AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}


//Usamos esto para decirle a React como se ve y que tiene el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavIcon: (iconName: string) => void;
    logout: () => void;
    setUsername: (username: string) => void;
}

//Creamos el context
export const AuthContext = createContext({} as AuthContextProps);





//Componente proveedor del estado
export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);


    const signIn = () => {
        dispatch({type: 'signIn'})
    };

    
    const changeFavIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', payload: iconName})
    };

    const logout = () => {
        dispatch({type: 'logout'})
    };

    const setUsername = (username: string) => {
        dispatch({type: 'setUsername', payload: username})
    }


    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavIcon,
            logout,
            setUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}