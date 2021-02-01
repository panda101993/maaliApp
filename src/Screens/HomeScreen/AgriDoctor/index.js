import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, FlatList, TextInput, TouchableOpacity, ScrollView, Keyboard, Image } from 'react-native';
import { styles } from './style';
import { CustomHeader } from '../../../Components/Header/index';
import { TextInputBox } from '../../../Components/CustomTextInput/index';
import { Images } from '../../../Utils/AppConstants/ImageConstants';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { CustomButton } from '../../../Components/CustomButton/index';
import { FooterButton } from '../../../Components/Footer/index';
import ImagePicker from 'react-native-image-crop-picker';
import { ActionSheet, Root } from 'native-base';
import { useDispatch, useSelector } from "react-redux";
import {serviceDataAction} from '../../../Redux/Action/AuthAction';

export default function AgriDoctor(props) {
    const isLoggedIn = useSelector(state => state.AuthReducer.isLoggedIn)
    const [message, setMassage] = useState("")
    const [fieldArea, setFieldArea] = useState("")
    const [trees, setTrees] = useState("")
    const [pic, setPic] = useState(null)
    const [sendImageData, setSendImageData] = useState("")
    const [servicedata, setServiceData] = useState([])
    const [apiData, setApiData] = useState([])
    const [serviceType, setServiceType] = useState("Agri-Doctor")
    const dispatch = useDispatch()

    useEffect(() => {
        let apiData = [
            {
                serviceType: "Need medicine, insecticide, pesticide?",
                id: "1",
                type: "Yes",
                icon: <IconFontAwesome name="bug" size={35} color="#fff" />,
                select: false
    
            },
            {
                serviceType: "Need sprayer machine?",
                id: "2",
                type: "Yes",
                icon: <IconFontAwesome name="asterisk" size={35} color="#fff" />,
                select: false
            },
            {
                serviceType: "With worker",
                id: "3",
                icon: <IconFontAwesome name="user" size={35} color="#fff" />,
                select: false
            },
            {
                serviceType: "Without worker",
                id: "4",
                icon: <IconFontAwesome name="user" size={35} color="#fff" />,
                select: false
            },
        ]
    setApiData(apiData
        // apiData.map(d =>{
        //     return {
        //         select: false,
        //         serviceType: d.serviceType,
        //         id: d.id,
        //         type: d.type,
        //         icon: d.icon
        //     }
        // })
        )
    }, [])

    const selectService = (itemDetails, select,itemId ) => {
        console.log("select--", select)
        console.log("itemId--",itemId)
        console.log("itemDetails--", itemDetails)
        setApiData(
            apiData.map(data => {
                if (itemId === data.id) {
                    data.select = !select;
                }
                return data;
            }
        )
        );
        const itemData = apiData
        const index = itemData.findIndex(x => x.id === itemId);
        console.log("index---", index) 
        if (itemData[index].select == true) {
            servicedata.push(itemData[index].serviceType)
        }else {
            servicedata.pop(itemData[index].serviceType)
        }
        setServiceData(servicedata)   
        console.log("servicedata--",servicedata) 
    }

    const onSelectedImage = (image) => {
        console.log("image---", image)
        // let newDataImg = pic;
        const source = { uri: image.path };
        let item = {
            id: Date.now(),
            url: source,
            content: image.data
        };
        console.log("item9999---", item)
        // newDataImg.push(item);
        setSendImageData(item)
        setPic(item.url)
    }

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
            includeBase64: true,
            includeExif: true,
        }).then(image => {
            console.log("camerapic--", image);
            // setPic({uri:image.path})
            onSelectedImage(image)

        });

    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            includeBase64: true,
            includeExif: true,
        }).then(image => {
            console.log("librarypic--", image);
            // setPic({uri:image.path})
            onSelectedImage(image)
        });
    }

    const onClickUploadImage = () => {
        const BUTTONS = ['Take Photo', 'Choose Photo Library', 'Cancel'];
        ActionSheet.show(
            {
                options: BUTTONS,
                cancelButtonIndex: 2,
                title: 'Select a photo'
            },
            buttonIndex => {
                switch (buttonIndex) {
                    case 0:
                        takePhotoFromCamera();
                        break;
                    case 1:
                        choosePhotoFromLibrary();
                        break;
                    default:
                        break
                }

            })

    }

    const submitDetails = () =>{
        console.log("serviceType--",serviceType)
        console.log("servicedata--",servicedata)
        console.log("sendImageData--",sendImageData)
        let serviceData = {
            "serviceType": serviceType,
            "services": servicedata,
        }
        {
            isLoggedIn == true 
            ?
            props.navigation.navigate('QuerySubmit')
            :
            // props.navigation.navigate('Login')
            dispatch(serviceDataAction(serviceData, () => props.navigation.navigate('Login')));

        }

    }


    return (
        <Root>
            <View style={styles.mainContainer}>
                <ImageBackground source={Images.backgroundImage} style={styles.backgroundImage}>

                    <CustomHeader
                        headerTitle="Agri-Doctor"
                        headingTextStyle={{ color: "white" }}
                        textViewStyle={styles.headingtextViewStyle}
                        headingText="Mention your problem, area of your fields or number of trees you want to consult"
                        textStyle={styles.headingTextStyle}
                    />
                    <View style={styles.scrollStyle}>
                        <ScrollView>
                            <TextInputBox
                                placeholder="Mention your problem"
                                value={message}
                                onChangeText={(text) => setMassage(text)}
                            />
                            <TextInputBox
                                placeholder="Area of your fields"
                                value={fieldArea}
                                onChangeText={(text) => setFieldArea(text)}
                            />
                            <TextInputBox
                                placeholder="Number of trees you want to consult"
                                value={trees}
                                onChangeText={(text) => setTrees(text)}
                                keyboardType="number-pad"
                            />

                            <FlatList
                                data={apiData}
                                keyExtractor={item => item.id}
                                style={{ maxHeight: 520 }}
                                renderItem={(item) => {
                                    console.log("item22222---", item)
                                    return (
                                        <View style={styles.serviceView}>
                                            <View style={styles.bugView}>{item.item.icon}</View>
                                            <View style={{ flexDirection: "row" }}>
                                                <View style={styles.contentView}>
                                                    <Text style={styles.serviceText}>{item.item.serviceType}</Text>
                                                </View>
                                                <View style={{ paddingHorizontal: 10, justifyContent: "center" }}>
                                                    <TouchableOpacity onPress={() => selectService(item.item.serviceType, item.item.select,item.item.id)}>
                                                        <IconFontAwesome
                                                            size={26}
                                                            color="#fff"
                                                            name={item.item.select ? "check-square-o" : "square-o"} 
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ justifyContent: "center" }}>
                                                    <Text style={styles.serviceText}>{item.item.type}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }
                                }
                            />
                            <View style={styles.uploadTextView}>
                                <Text style={styles.uploadTextStyle}>Upload Photo if any</Text>
                            </View>
                            <View style={styles.uploadBox}>
                                <Image style={styles.imageStyle} source={pic} />
                            </View>
                            <FooterButton
                                mainbuttonView={styles.buttonview}
                                buttonStyle1={styles.ButtonView1}
                                buttonStyle2={styles.ButtonView2}
                                buttonTitle1="Upload"
                                onPressButton1={() => onClickUploadImage()}
                                buttonTitle2="Submit"
                                onPressButton2={()=>submitDetails()}
                            />
                        </ScrollView>
                    </View>

                </ImageBackground>
            </View>
        </Root>
    )
}
