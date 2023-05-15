import { AuthState } from "./AuthContext";


type AuthAction = {type: 'signIn'};  //ACA ME CREO LA ACCION DE TYPE: signIn



export const authReducer = ( state: AuthState, action: AuthAction):AuthState => {


    switch (action.type) {

        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }

            default:
                return state
    }


}