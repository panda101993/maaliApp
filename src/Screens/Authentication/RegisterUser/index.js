import React, { useState, useEffect } from 'react'
import { View, Text, TextInput,ImageBackground, TouchableOpacity, ScrollView, Modal, FlatList,KeyboardAvoidingView } from 'react-native'
import { styles } from './style';
import { CustomHeader } from '../../../Components/Header/index';
import ProvinceJSON from '../../../Utils/JSON/province.json';
import { TextInputComponent, DropdownInput } from '../../../Components/CustomTextInput/index';
import { CustomButton } from '../../../Components/CustomButton/index';
import { handleValidations } from './validate';
import { useDispatch, useSelector } from "react-redux";
import { completeSignupAction } from '../../../Redux/Action/AuthAction'
import {Images} from '../../../Utils/AppConstants/ImageConstants';


export default function RegisterUser(props) {
    const otpVerifyData = useSelector(state => state.AuthReducer)
    const userMobileNo = useSelector(state => state.AuthReducer.verifyOtpData.mobileNumber)
    const dispatch = useDispatch()
    let [inbuiltstate, setState] =
        useState({
            name: "",
            nameStatus: false,
            nameError: "",

            email: "",
            emailStatus: false,
            emailError: "",

            province: "Select State",
            provinceStatus: false,
            provinceError: "",

            city: "Select City",
            cityStatus: false,
            cityError: "",

            block: "",
            blockStatus: false,
            blockError: "",

            locality: "",
            localityStatus: false,
            localityError: "",

            landmark: "",
            landmarkStatus: false,
            landmarkError: "",

            pincode: "",
            pincodeStatus: false,
            pincodeError: "",


        });

    const [modalVisibleCountry, setModalVisibleState] = useState(false)
    const [modalVisibleCity, setModalVisibleCity] = useState(false)
    const [cityArray, setCityArray] = useState('')

    useEffect(() => {
        console.log("otpVerifyData--", otpVerifyData)
    }, otpVerifyData)

    useEffect(() => {
        console.log("userMobileNo--", userMobileNo)
    }, userMobileNo)

    const StateList = ProvinceJSON.states
    console.log("StateList===", StateList)

    const setStateCode = (item, index) => {
        console.log("item---", item, index)
        setModalVisibleState(false)
        setCityArray(item.districts)
        setState({
            ...inbuiltstate,
            province: item.state,
            provinceStatus: true,
            provinceError: ""
        })
    }

    const setCityCode = (item, index) => {
        console.log("item---", item, index)
        setModalVisibleCity(false)
        setState({
            ...inbuiltstate,
            city: item,
            cityStatus: true,
            cityError: ""
        })

    }

    useEffect(() => {
        console.log("cityArray---", cityArray)
    }, [cityArray])

    const handleValidate = async (text, type) => {
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

    const SignupValidation = () => {
        if (inbuiltstate.nameStatus) {
            if (inbuiltstate.provinceStatus) {
                if (inbuiltstate.cityStatus) {
                    if (inbuiltstate.blockStatus) {
                        if (inbuiltstate.localityStatus) {
                            if (inbuiltstate.pincodeStatus) {
                                let requestData = {
                                    "mobileNumber": userMobileNo,
                                    "name": inbuiltstate.name,
                                    "email": inbuiltstate.email,
                                    "state": inbuiltstate.province,
                                    "city": inbuiltstate.city,
                                    "block": inbuiltstate.block,
                                    "locality": inbuiltstate.locality,
                                    "landmark": inbuiltstate.landmark,
                                    "pincode": inbuiltstate.pincode,
                                }
                                // SignupApi()
                                dispatch(completeSignupAction(requestData, () => props.navigation.navigate('Home')));
                            }
                            else {
                                setState({ ...inbuiltstate, pincodeStatus: false, pincodeError: "Please enter pin Code." })
                            }
                        }
                        else {
                            setState({ ...inbuiltstate, localityStatus: false, localityError: "Please enter locality/village" })
                        }
                    }
                    else {
                        setState({ ...inbuiltstate, blockStatus: false, blockError: "Please enter block." })
                    }
                }
                else {
                    setState({ ...inbuiltstate, cityStatus: false, cityError: "Please select city." })
                }
            }
            else {
                setState({ ...inbuiltstate, provinceStatus: false, provinceError: "Please select state." })
            }
        }
        else { setState({ ...inbuiltstate, nameStatus: false, nameError: "Please enter name." }) }
    }



    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={Images.backgroundImage} style={styles.backgroundImage}>
            <CustomHeader
                headerTitle="Sign Up"
                headingTextStyle={{color:"white"}}
            />
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
            <ScrollView>
                <View>
                    <TextInputComponent
                        InputTitle="Name"
                        placeholder='Enter Name*'
                        maxLength={56}
                        value={inbuiltstate.name}
                        onChangeText={(text) => handleValidate(text, "name")}
                        ErrorText={inbuiltstate.nameError}
                    // returnKeyType="next"
                    // InputRef={(input) => name = input}
                    // onSubmitEditing={() => {phoneNumber.focus(); }}
                    // keyboardType="number-pad"
                    // secureTextEntry={true}
                    />
                    <TextInputComponent
                        InputTitle="Email"
                        placeholder='Enter Email Id (Optional)'
                        value={inbuiltstate.email}
                        onChangeText={(text) => handleValidate(text, "email")}
                        ErrorText={inbuiltstate.emailError}
                        maxLength={56}
                    />
                    <DropdownInput
                        dropdownTitle="State"
                        renderList={inbuiltstate.province}
                        onPress={() => setModalVisibleState(true)}
                        ErrorText={inbuiltstate.provinceError}
                    />
                    <DropdownInput
                        dropdownTitle="City"
                        renderList={inbuiltstate.city}
                        onPress={() => setModalVisibleCity(true)}
                        ErrorText={inbuiltstate.cityError}

                    />
                    <TextInputComponent
                        InputTitle="Block"
                        placeholder='Enter Block*'
                        value={inbuiltstate.block}
                        onChangeText={(text) => handleValidate(text, "block")}
                        ErrorText={inbuiltstate.blockError}
                        maxLength={56}
                    />
                    <TextInputComponent
                        InputTitle="Locality/Village"
                        placeholder='Enter Locality/Village*'
                        value={inbuiltstate.locality}
                        onChangeText={(text) => handleValidate(text, "locality")}
                        ErrorText={inbuiltstate.localityError}
                        maxLength={56}
                    />
                    <TextInputComponent
                        InputTitle="Land Mark"
                        placeholder='Enter Landmark (Optional)'
                        value={inbuiltstate.landmark}
                        onChangeText={(text) => handleValidate(text, "landmark")}
                        ErrorText={inbuiltstate.landmarkError}
                        maxLength={56}
                    />
                    <TextInputComponent
                        InputTitle="PIN"
                        placeholder='Enter Pincode*'
                        value={inbuiltstate.pincode}
                        onChangeText={(text) => handleValidate(text, "pincode")}
                        ErrorText={inbuiltstate.pincodeError}
                        maxLength={6}
                        keyboardType="number-pad"
                    />
                    < CustomButton
                        buttonViewStyle={styles.signupButtonView}
                        onPress={() => SignupValidation()}
                        buttonTextStyle={styles.signupButtonText}
                        buttonName="Sign Up"
                    />
                </View>

                <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalVisibleCountry}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.flatListStyle}>
                            <FlatList
                                data={StateList}
                                renderItem={({ item, index }) =>
                                    <View>
                                        <TouchableOpacity
                                            onPress={() => setStateCode(item, index)}
                                            style={{ alignItems: "center" }}
                                        >
                                            <View style={styles.renderItemView}>
                                                <Text style={styles.renderItem}>{item.state}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                }
                                keyExtractor={(item, index) => index.toString()}
                                ItemSeparatorComponent={() => {
                                    return <View style={styles.itemSeperatorStyle} />
                                }}
                            />
                            <TouchableOpacity onPress={() => setModalVisibleState(false)}
                                style={styles.modalCancelView}>
                                <Text style={styles.modalCancelText}>{"Cancel"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalVisibleCity}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.flatListStyle}>
                            <FlatList
                                data={cityArray}
                                renderItem={({ item, index }) => {
                                    console.log("item55--", item)
                                    return (
                                        <View>
                                            <TouchableOpacity
                                                onPress={() => setCityCode(item, index)}
                                                style={{ alignItems: "center" }}
                                            >
                                                <View style={styles.renderItemView}>
                                                    <Text style={styles.renderItem}>{item}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )

                                }
                                }
                                keyExtractor={(item, index) => index.toString()}
                                ItemSeparatorComponent={() => {
                                    return <View style={styles.itemSeperatorStyle} />
                                }}
                            />
                            <TouchableOpacity onPress={() => setModalVisibleCity(false)}
                                style={styles.modalCancelView}>
                                <Text style={styles.modalCancelText}>{"Cancel"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
            </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    )
}
