import React,{useEffect} from 'react'
import { View, Text,ImageBackground } from 'react-native'
import { styles } from './style';
import { CustomButton } from '../../../Components/CustomButton/index';
import {Images} from '../../../Utils/AppConstants/ImageConstants';
import { useDispatch, useSelector } from "react-redux";
import { clearServiceData } from '../../../Redux/Action/AuthAction';


export default function QuerySubmit(props) {
    const serviceDetails = useSelector(state => state.AuthReducer.serviceDetails)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("serviceDetails--",serviceDetails)
      }, [serviceDetails])
    
    const submitQuery = () => {
        dispatch(clearServiceData(() => props.navigation.navigate('Home')));
    }
    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={Images.backgroundImage} style={styles.backgroundImage}>
            <View style={styles.messageView}>
            <Text style={styles.messageText}>Your query submitted successfully. We will get back to you soon.</Text>
            </View>
            <CustomButton
                buttonViewStyle={styles.submitButton}
                onPress={() => submitQuery() }
                buttonTextStyle={styles.submitText}
                buttonName="Ask for other services"
            />
            </ImageBackground>
        </View>
    )
}
