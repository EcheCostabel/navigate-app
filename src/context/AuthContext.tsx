import React, { createContext } from 'react'



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

    return (
        <AuthContext.Provider value={{
            authState: authInitialState,
            signIn: () => {}
        }}>
            {children}
        </AuthContext.Provider>
    )
}