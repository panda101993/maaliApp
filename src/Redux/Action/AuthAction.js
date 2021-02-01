import { LOGIN_ACTION,LOGIN_OTP_ACTION, PARTIAL_SIGNUP_ACTION, VERIFY_OTP_ACTION, 
    COMPLETE_SIGNUP_ACTION,LOGOUT_ACTION, EDIT_PROFILE_ACTION, SERVICE_DATA_ACTION, CLEAR_SERVICE_DATA } from './ActionTypes';
import Apirequest from "../../Services/Apirequest";


export const logoutAction = (navigationFunction) => dispatch => {

    console.log('navigationFunction=>', navigationFunction);
    dispatch({ type: LOGOUT_ACTION, payload:false })
    navigationFunction()


}

export const serviceDataAction = (serviceDetails, navigationFunction) => dispatch => {

    console.log('navigationFunction=>', navigationFunction);
    console.log('serviceDetails=>', serviceDetails);
    dispatch({ type: SERVICE_DATA_ACTION, payload:serviceDetails })
    navigationFunction()
}

export const clearServiceData = (navigationFunction) => dispatch => {

    console.log('navigationFunction=>', navigationFunction);
    dispatch({ type: CLEAR_SERVICE_DATA, payload:false })
    navigationFunction()


}

export const loginAction = (credential, navigationFunction) => dispatch => {
    console.log('SHOW_BIG_MARKER=>Signup', credential);
    console.log('navigationFunction--', navigationFunction);

    Apirequest(credential, "/user/login", "POST")
        .then((resp) => {
            console.log('respSSrespLoginn===>', resp);
            dispatch({ type: LOGIN_ACTION, payload: resp.data.result })

            switch (resp.status) {

                case (200): {
                    if (resp.data.response_code == 200) {
                        dispatch({ type: LOGIN_ACTION, payload: resp.data.result })
                        navigationFunction()
                    }
                    else if (resp.data.response_code == 404) {
                        console.log("Invalid credentials")
                        alert(resp.data.response_message)
                    }
                    else if (resp.data.response_code == 500) {
                        alert(resp.data.response_message)
                        console.log("Invalid credentials")
                    }
                }
                    break
                default: {
                    alert(resp.data)
                }
            }
        }
        )

}

export const loginOtpAction = (credential, navigationFunction) => dispatch => {
    console.log('SHOW_BIG_MARKER=>Signup', credential);
    console.log('navigationFunction--', navigationFunction);

    Apirequest(credential, "/user/otpSent", "POST")
        .then((resp) => {
            console.log('respSSresp===>', resp);
            dispatch({ type: LOGIN_OTP_ACTION, payload: resp.data.result })

            switch (resp.status) {

                case (200): {
                    if (resp.data.response_code == 200) {
                        dispatch({ type: LOGIN_OTP_ACTION, payload: resp.data.result })
                        navigationFunction()
                    }
                    else if (resp.data.response_code == 404) {
                        console.log("Invalid credentials")
                        alert(resp.data.response_message)
                    }
                    else if (resp.data.response_code == 500) {
                        alert(resp.data.response_message)
                        console.log("Invalid credentials")
                    }
                }
                    break
                default: {
                    alert(resp.data)
                }
            }
        }
        )

}

export const partialSignupAction = (credential, navigationFunction) => dispatch => {
    console.log('SHOW_BIG_MARKER=>Signup', credential);
    console.log('navigationFunction--', navigationFunction);

    Apirequest(credential, "/user/signupFirst", "POST")
        .then((resp) => {
            console.log('respSSresp===>', resp);
            dispatch({ type: PARTIAL_SIGNUP_ACTION, payload: resp.data.result })

            switch (resp.status) {

                case (200): {
                    if (resp.data.response_code == 200) {
                        dispatch({ type: PARTIAL_SIGNUP_ACTION, payload: resp.data.result })
                        navigationFunction()
                    }
                    else if (resp.data.response_code == 404) {
                        console.log("Invalid credentials")
                        alert(resp.data.response_message)
                    }
                    else if (resp.data.response_code == 500) {
                        alert(resp.data.response_message)
                        console.log("Invalid credentials")
                    }
                }
                    break
                default: {
                    alert(resp.data)
                }
            }
        }
        )

}

export const verifyOtpAction = (credential, navigationFunction) => dispatch => {
    console.log('credential--', credential);
    console.log('navigationFunction--', navigationFunction);

    Apirequest(credential, "/user/verifyOtp", "POST")
        .then((resp) => {
            console.log('respSSrespverifyOtp===>', resp);
            dispatch({ type: VERIFY_OTP_ACTION, payload: resp.data.result })

            switch (resp.status) {

                case (200): {
                    if (resp.data.response_code == 200) {
                        dispatch({ type: VERIFY_OTP_ACTION, payload: resp.data.result })
                        navigationFunction()
                    }
                    else if (resp.data.response_code == 402) {
                        console.log("Invalid credentials")
                        alert(resp.data.response_message)
                    }
                    else if (resp.data.response_code == 500) {
                        alert(resp.data.response_message)
                        console.log("Invalid credentials")
                    }
                }
                    break
                default: {
                    alert(resp.data)
                }
            }
        }
        )

}

export const completeSignupAction = (credential, navigationFunction) => dispatch => {
    console.log('SHOW_BIG_MARKER=>Signup', credential);
    console.log('navigationFunction--', navigationFunction);

    Apirequest(credential, "/user/signUp", "POST")
        .then((resp) => {
            console.log('respcompleteSignupAction===>', resp);
            dispatch({ type: COMPLETE_SIGNUP_ACTION, payload: resp.data.result })

            switch (resp.status) {

                case (200): {
                    if (resp.data.response_code == 200) {
                        dispatch({ type: COMPLETE_SIGNUP_ACTION, payload: resp.data.result })
                        navigationFunction()
                    }
                    else if (resp.data.response_code == 404) {
                        console.log("Invalid credentials")
                        alert(resp.data.response_message)

                    }
                    else if (resp.data.response_code == 500) {
                        alert(resp.data.response_message)
                        console.log("Invalid credentials")
                    }
                }
                    break
                default: {
                    alert(resp.data)
                }
            }
        }
        )

}


export const editProfileAction = (credential, navigationFunction) => dispatch => {
    console.log('cridential---', credential);
    console.log('navigationFunction--', navigationFunction);

    Apirequest(credential, "/user/updateProfile", "POST")
        .then((resp) => {
            console.log('EDIT_PROFILE_ACTION_Resp===>', resp);
            dispatch({ type: EDIT_PROFILE_ACTION, payload: resp.data.result })

            switch (resp.status) {

                case (200): {
                    if (resp.data.response_code == 200) {
                        dispatch({ type: EDIT_PROFILE_ACTION, payload: resp.data.result })
                        navigationFunction()
                        alert(resp.data.response_message)
                    }
                    else if (resp.data.response_code == 404) {
                        console.log("Invalid credentials")
                        alert(resp.data.response_message)
                    }
                    else if (resp.data.response_code == 500) {
                        alert(resp.data.response_message)
                        console.log("Invalid credentials")
                    }
                }
                    break
                default: {
                    alert(resp.data)
                }
            }
        }
        )

}
