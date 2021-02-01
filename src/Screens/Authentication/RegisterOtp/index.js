import React,{useState, useEffect} from 'react'
import { View, ImageBackground} from 'react-native'
import { styles } from './style';
import { CustomButton } from '../../../Components/CustomButton/index';
import { CustomTextInput } from '../../../Components/CustomTextInput/index';
import { useDispatch,useSelector} from "react-redux";
import { handleValidations } from './validate';
import { verifyOtpAction } from '../../../Redux/Action/AuthAction';
import {Images} from '../../../Utils/AppConstants/ImageConstants';


export default function RegisterOtp(props) {
    const userData = useSelector(state => state.AuthReducer)
    const otpData = useSelector(state => state.AuthReducer.partialSignupData.otp)
    const userMobileNo = useSelector(state => state.AuthReducer.partialSignupData.mobileNumber)
    const userId = useSelector(state => state.AuthReducer.partialSignupData._id)
    const dispatch = useDispatch()
    let [inbuiltstate, setState] =
    useState({
      otp: "",
      otpError: "",
      otpStatus: false,

    });

    useEffect(() => {
      console.log("otpData--",otpData)
    }, [otpData])

    useEffect(() => {
        console.log("userData--",userData)
      }, [userData])

      const handlevalidate = async (text, type) => {
        console.log("type====",text,type)
        let status = `${type}Status`;
        let errorText = `${type}Error`;
        let resp = handleValidations(text, type)
        await setState({
          ...inbuiltstate,
          [type]: resp.value,
          [errorText]: resp.errorText,
          [status]: resp.status,
        })
    
      }

      const submitOtp = () => {
        if (inbuiltstate.otpStatus) {
          if (inbuiltstate.otpStatus==true) {
            let requestData = {
              "mobileNumber":userMobileNo,
              "userId":userId,
              "otp":inbuiltstate.otp
            }
                // LoginApi()
                dispatch(verifyOtpAction(requestData,()=>  props.navigation.navigate('RegisterUser')));
          }
        }
        else { setState({ ...inbuiltstate, otpStatus: false, otpError: "Please enter 4 digit otp", }) }
      }



    return (
        <View style={styles.mainContainer}>
          <ImageBackground source={Images.backgroundImage} style={styles.backgroundImage}>
            <CustomTextInput 
            titleViewStyle={styles.headerView}
            titleTextStyle={styles.headingText}
            title="Enter OTP"
            inputViewStyle={styles.inputView}
            textInputStyle={styles.textInputStyle}
            placeholder="Enter OTP*"
            value={inbuiltstate.otp.trim()}
            onChangeText={(text) => handlevalidate(text, "otp")}
            maxLength={4}
            keyboardType="number-pad"
            ErrorView={styles.ErrorView}
            ErrorText={inbuiltstate.otpError}
            />
            <CustomButton 
            buttonViewStyle = {styles.submitButton}
            onPress = {() => submitOtp()}
            buttonTextStyle ={styles.submitText}
            buttonName ="Submit"
            />  
         </ImageBackground>   
        </View>
    )
}
