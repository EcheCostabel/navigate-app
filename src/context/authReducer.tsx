import { AuthState } from "./AuthContext";


type AuthAction = 
| {type: 'signIn'}  //ACA ME CREO LA ACCION DE TYPE: signIn
| {type: 'changeFavIcon', payload: string }
| {type: 'logout'}
| {type: 'setUsername', payload: string}


export const authReducer = ( state: AuthState, action: AuthAction):AuthState => {


    switch (action.type) {

        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }

        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }    

        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }

        case 'setUsername': 
            return {
                ...state,
                username: action.payload
            }
          


            default:
                return state
    }


}