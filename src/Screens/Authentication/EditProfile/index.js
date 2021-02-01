import React, { useState, useEffect } from 'react'
import { View, Text, TextInput,ImageBackground, TouchableOpacity, ScrollView, Modal, FlatList,KeyboardAvoidingView } from 'react-native'
import { styles } from './style';
import { CustomHeader } from '../../../Components/Header/index';
import ProvinceJSON from '../../../Utils/JSON/province.json';
import { TextInputComponent, DropdownInput } from '../../../Components/CustomTextInput/index';
import { CustomButton } from '../../../Components/CustomButton/index';
import { handleValidations } from './validate';
import { useDispatch, useSelector } from "react-redux";
import { editProfileAction } from '../../../Redux/Action/AuthAction';
import {Images} from '../../../Utils/AppConstants/ImageConstants';


export default function RegisterUser(props) {
    const userData = useSelector(state => state && state.AuthReducer && state.AuthReducer.completeSignupData)
    const userData1 = useSelector(state => state && state.AuthReducer && state.AuthReducer.userData)
    // _id: "5fdc3d457f8de30d310d3757"
    const userId = useSelector(state => state && state.AuthReducer && state.AuthReducer.completeSignupData && state.AuthReducer.completeSignupData._id || state && state.AuthReducer && state.AuthReducer.userData && state.AuthReducer.userData._id)
    const userState= useSelector(state => state)
    const dispatch = useDispatch()
    let [inbuiltstate, setState] =
        useState({
            name: userData1 && userData1.name || userData && userData.name,
            nameStatus: false,
            nameError: "",

            email: userData && userData.email || userData1 && userData1.email,
            emailStatus: false,
            emailError: "",

            province: userData && userData.state || userData1 && userData1.state,
            provinceStatus: false,
            provinceError: "",

            city: userData1 && userData1.city || userData && userData.city,
            cityStatus: false,
            cityError: "",

            block: userData1 && userData1.block || userData && userData.block,
            blockStatus: false,
            blockError: "",

            locality: userData1 && userData1.locality || userData && userData.locality,
            localityStatus: false,
            localityError: "",

            landmark: userData1 && userData1.landmark || userData && userData.landmark,
            landmarkStatus: false,
            landmarkError: "",

            pincode: userData && userData.pincode || userData1 && userData1.pincode,
            pincodeStatus: false,
            pincodeError: "",


        });

    const [modalVisibleCountry, setModalVisibleState] = useState(false)
    const [modalVisibleCity, setModalVisibleCity] = useState(false)
    const [cityArray, setCityArray] = useState('')

    useEffect(() => {
        console.log("userData--", userData)
    }, userData)

    useEffect(() => {
        console.log("userId--", userId)
    }, userId)

    useEffect(() => {
        console.log("userState--", userState)
    }, userState)

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
        // if (inbuiltstate.nameStatus) {
        //     if (inbuiltstate.provinceStatus) {
        //         if (inbuiltstate.cityStatus) {
        //             if (inbuiltstate.blockStatus) {
        //                 if (inbuiltstate.localityStatus) {
        //                     if (inbuiltstate.pincodeStatus) {
                                let requestData = {
                                    "userId":userId,
                                    "name": inbuiltstate.name,
                                    "email": inbuiltstate.email,
                                    "state": inbuiltstate.province,
                                    "city": inbuiltstate.city,
                                    "block": inbuiltstate.block,
                                    "locality": inbuiltstate.locality,
                                    "landmark": inbuiltstate.landmark,
                                    "pincode": inbuiltstate.pincode,
                                    
                                }
                                dispatch(editProfileAction(requestData, () => props.navigation.navigate('Home')));
        //                     }
        //                     else {
        //                         setState({ ...inbuiltstate, pincodeStatus: false, pincodeError: "Please enter pin Code." })
        //                     }
        //                 }
        //                 else {
        //                     setState({ ...inbuiltstate, localityStatus: false, localityError: "Please enter locality/village" })
        //                 }
        //             }
        //             else {
        //                 setState({ ...inbuiltstate, blockStatus: false, blockError: "Please enter block." })
        //             }
        //         }
        //         else {
        //             setState({ ...inbuiltstate, cityStatus: false, cityError: "Please select city." })
        //         }
        //     }
        //     else {
        //         setState({ ...inbuiltstate, provinceStatus: false, provinceError: "Please select state." })
        //     }
        // }
        // else { setState({ ...inbuiltstate, nameStatus: false, nameError: "Please enter name." }) }
    }



    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={Images.backgroundImage} style={styles.backgroundImage}>
            <CustomHeader
                headerTitle="Edit Profile"
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
                        buttonName="Submit"
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
