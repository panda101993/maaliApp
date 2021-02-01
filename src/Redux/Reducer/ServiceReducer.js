import { SERVICE_ACTION } from '../Action/ActionTypes';

const initialState = {
    userServicesData: {}
}

export const ServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE_ACTION:
            return {
                ...state,
                userServicesData:action.payload,

            }
        // case LOGOUT_ACTION:{
        //     return {
        //         ...state,
        //         isLoggedIn:false,
        //         completeSignupData:{},
        //         verifyOtpData:{},
        //         partialSignupData:{},
        //         AuthReducer:{},
        //         userData:{}
        //     }
        // }
        // case LOGIN_OTP_ACTION: {
        //     return {
        //         ...state,
        //         isLoggedIn: false,
        //         loginOtpData: action.payload

        //     }
        // }
        // case PARTIAL_SIGNUP_ACTION: {
        //     return {
        //         ...state,
        //         isLoggedIn: false,
        //         partialSignupData: action.payload

        //     }
        // }
        // case VERIFY_OTP_ACTION:{
        //     return{...state,
        //         isLoggedIn: false,
        //         verifyOtpData:action.payload
        //     }
        // }
        // case COMPLETE_SIGNUP_ACTION:{
        //     return{...state,
        //         isLoggedIn: true,
        //         completeSignupData:action.payload
        //     }
        // }
        case ("persist/REHYDRATE"):
            if (action.payload != undefined) {
                return {
                    ...state,
                    ...action.payload.ServiceReducer
                }
            }
            else {
                return {
                    ...state
                }
            }
        default: return {
            ...state
        }
    }
}