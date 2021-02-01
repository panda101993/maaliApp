import React from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import { styles } from './style';

export const CustomButton = (props) =>{
    return(
        <View style={[styles.loginButtonView, props.buttonViewStyle]}>
        <TouchableOpacity onPress ={props.onPress}>
        <Text style={[styles.buttonTextStyle, props.buttonTextStyle]}>{props.buttonName}</Text>
         </TouchableOpacity>
        </View> 
    )
    }