import React, { useState } from 'react'
import { View, Text,ImageBackground } from 'react-native'
import { styles } from './style';
import { CustomButton } from '../../../Components/CustomButton/index';
import { CustomTextInput } from '../../../Components/CustomTextInput/index';
import { partialSignupAction } from '../../../Redux/Action/AuthAction';
import { useDispatch, useSelector } from "react-redux";
import { handleValidations } from './validate';
import {Images} from '../../../Utils/AppConstants/ImageConstants';

export default function RegisterMobileNo(props) {
  let [inbuiltstate, setState] =
    useState({
      phoneNo: "",
      phoneNoError: "",
      phoneNoStatus: false,

    });
  const dispatch = useDispatch()

  const handlevalidate = async (text, type) => {
    console.log("type====", text, type)
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

  const registerMobValidation = () => {
    if (inbuiltstate.phoneNoStatus) {
      if (inbuiltstate.phoneNoStatus == true) {
        let requestData = {
          "mobileNumber": inbuiltstate.phoneNo
        }
        dispatch(partialSignupAction(requestData, () => props.navigation.navigate('RegisterOtp')));
      }
    }
    else { setState({ ...inbuiltstate, phoneNoStatus: false, phoneNoError: "Please enter phone number", }) }
  }



  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={Images.backgroundImage} style={styles.backgroundImage}>
      <View style={styles.headerView}>
        <Text style={styles.headingText}>Maali App</Text>
      </View>
      <CustomTextInput
        titleViewStyle={styles.containerView}
        titleTextStyle={styles.containerViewText}
        ErrorView={styles.ErrorView}
        ErrorTextStyle={styles.errorTextStyle}
        title="Enter your Mobile No"
        inputViewStyle={styles.inputView}
        textInputStyle={styles.textInputStyle}
        placeholder="Enter Mobile Number*"
        value={inbuiltstate.phoneNo.trim()}
        onChangeText={(text) => handlevalidate(text, "phoneNo")}
        ErrorText={inbuiltstate.phoneNoError}
        maxLength={10}
        keyboardType="number-pad"
      />
      <CustomButton
        buttonViewStyle={styles.RegisterButtonView}
        onPress={() => registerMobValidation()}
        buttonTextStyle={styles.buttonTextStyle}
        buttonName="Register Here"
      />
      </ImageBackground>
    </View>
  )
}

