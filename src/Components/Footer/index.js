import React from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import { styles } from './style';

export const FooterButton = (props) =>{
    return(
        <View style={[styles.buttonview,props.mainbuttonView]}>
        <View style={[styles.signInButtonView, props.buttonStyle1]}>
        <TouchableOpacity onPress={props.onPressButton1}>
        <Text style={styles.buttonText}>{props.buttonTitle1}</Text>
        </TouchableOpacity>
        </View>
        <View style={[styles.registerButtonView, props.buttonStyle2]}>
        <TouchableOpacity onPress ={props.onPressButton2}>
        <Text style={styles.buttonText}>{props.buttonTitle2}</Text>
        </TouchableOpacity>
        </View>
    </View> 
    )
    }