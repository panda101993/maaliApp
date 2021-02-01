import { LOGIN_ACTION, LOGIN_OTP_ACTION, PARTIAL_SIGNUP_ACTION, VERIFY_OTP_ACTION, 
    COMPLETE_SIGNUP_ACTION, LOGOUT_ACTION, EDIT_PROFILE_ACTION, SERVICE_DATA_ACTION, CLEAR_SERVICE_DATA } from '../Action/ActionTypes';


const initialState = {
    isLoggedIn: false
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return {
                ...state,
                isLoggedIn:true,
                userData:action.payload,

            }
        case LOGOUT_ACTION:{
            return {
                ...state,
                isLoggedIn:false,
                completeSignupData:{},
                verifyOtpData:{},
                partialSignupData:{},
                AuthReducer:{},
                userData:{}
            }
        }
        case LOGIN_OTP_ACTION: {
            return {
                ...state,
                isLoggedIn: false,
                loginOtpData: action.payload

            }
        }
        case PARTIAL_SIGNUP_ACTION: {
            return {
                ...state,
                isLoggedIn: false,
                partialSignupData: action.payload

            }
        }
        case VERIFY_OTP_ACTION:{
            return{...state,
                isLoggedIn: false,
                verifyOtpData:action.payload
            }
        }
        case COMPLETE_SIGNUP_ACTION:{
            return{...state,
                isLoggedIn: true,
                completeSignupData:action.payload
            }
        }
        case EDIT_PROFILE_ACTION:{
            return{...state,
                isLoggedIn: true,
                userData:action.payload,
                completeSignupData:action.payload
            }
        }
        case SERVICE_DATA_ACTION:{
            return{...state,
                isLoggedIn: true,
                serviceDetails:action.payload,
            }
        }
        case CLEAR_SERVICE_DATA:{
            return{...state,
                isLoggedIn: true,
                serviceDetails:{},
            }
        }
        case ("persist/REHYDRATE"):
            if (action.payload != undefined) {
                return {
                    ...state,
                    ...action.payload.AuthReducer
                }
            }
            else {
                return {
                    ...state
                }
            }
        default: 
        return {
            ...state
        }
    }
}
