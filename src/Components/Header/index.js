import React from 'react';
import { Text, View } from 'react-native';
import {styles} from './style';

export const CustomHeader = (props) => {
    return (
        <View>
             <View style={[styles.headerView, props.headerView]}>
                <Text style={[styles.headingText, props.headingTextStyle]}>{props.headerTitle}</Text>
            </View>
            <View style={[styles.containerView, props.textViewStyle]}>
            <Text style={[styles.containerViewText, props.textStyle]}>{props.headingText}</Text>
            </View>
        </View>
    )
}