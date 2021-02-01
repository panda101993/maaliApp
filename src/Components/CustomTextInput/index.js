import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './style';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export const TextInputComponent = (props) => {
    return (

        <View>
            <View style={styles.inputBoxView}>
                <View style={styles.nameTitleView}>
                    <Text style={{ fontSize: 24, color:"white" }}>
                        {props.InputTitle}
                    </Text>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={[styles.textInputStyle, props.textInputStyle]}
                        placeholder={props.placeholder}
                        placeholderTextColor="#A9A9A9"
                        value={props.value}
                        onChangeText={props.onChangeText}
                        secureTextEntry={props.secureTextEntry}
                        keyboardType={props.keyboardType}
                        ref={props.InputRef}
                        onSubmitEditing={props.onSubmitEditing}
                        maxLength={props.maxLength}
                        editable={props.editable}
                        returnKeyType={props.returnKeyType}
                        multiline={props.multiline}
                    />

                </View>
            </View>
            <View
                style={[styles.ErrorView, props.ErrorView]}
            >
                <Text
                    numberOfLines={2}
                    style={[styles.ErrorText, props.ErrorTextStyle]}
                >
                    {props.ErrorText}
                </Text>

            </View>
        </View>

    )
}


export const DropdownInput = (props) => {
    return (
    <View>
            <View style={styles.inputBoxView1}>
            <View style={styles.nameTitleView}>
                <Text style={{ fontSize: 24, color:"white" }}>
                    {props.dropdownTitle}
                </Text>
            </View>
            <View style={styles.selectionView}>
                <View style={styles.inputView1}>
                    <Text style={styles.provinceText}>
                        {props.renderList}
                    </Text>
                </View>
                <View style={styles.dropDownView}>
                    <TouchableOpacity onPress={props.onPress}>
                        <IconAntDesign name="caretdown" size={18} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
         <View
         style={[styles.ErrorView, props.ErrorView]}
     >
         <Text
             numberOfLines={2}
             style={[styles.ErrorText, props.ErrorTextStyle]}
         >
             {props.ErrorText}
         </Text>

     </View>
    </View>
    )
}


export const CustomTextInput = (props) => {
    return (
        <View>
            <View style={props.titleViewStyle}>
            <Text style={props.titleTextStyle}>{props.title}</Text>
            </View>
            <View style={props.inputViewStyle}>
                <TextInput 
                    style={props.textInputStyle}
                    placeholder={props.placeholder}
                    placeholderTextColor="#A9A9A9"
                    value={props.value}
                    onChangeText={props.onChangeText}
                    secureTextEntry={props.secureTextEntry}
                    keyboardType={props.keyboardType}
                    ref={props.InputRef}
                    onSubmitEditing={props.onSubmitEditing}
                    maxLength={props.maxLength}
                    editable={props.editable}
                    returnKeyType={props.returnKeyType}
                    multiline={props.multiline}
                 />
            </View>
            <View
                style={[styles.ErrorView, props.ErrorView]}
            >
                <Text
                    numberOfLines={2}
                    style={[styles.ErrorText, props.ErrorTextStyle]}
                >
                    {props.ErrorText}
                </Text>

            </View>
        </View>
    )
}

export const TextInputBox = (props) => {
    return (
        <View>
                  <View style={[styles.textInputBox, props.inputBoxStyle]}>
                    <TextInput 
                    style={[styles.textInputStyle2, props.textStyle]}
                    placeholder={props.placeholder}
                    placeholderTextColor="#A9A9A9"
                    value={props.value}
                    onChangeText={props.onChangeText}
                    keyboardType={props.keyboardType}
                     />
                </View>
        </View>
    )
}
