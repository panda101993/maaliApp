import { SERVICE_ACTION } from './ActionTypes';
import Apirequest from "../../Services/Apirequest";

export const serviceAction = (credential) => dispatch => {

    Apirequest({}, "/user/staticPageList", "GET")
        .then((resp) => {
            console.log('respStaticPage===>', resp);
            dispatch({ type: SERVICE_ACTION, payload: resp.data.result })

            switch (resp.status) {

                case (200): {
                    if (resp.data.response_code == 200) {
                        dispatch({ type: SERVICE_ACTION, payload: resp.data.result })
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