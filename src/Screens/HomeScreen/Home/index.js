import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, FlatList, Image, ImageBackground } from 'react-native'
import { styles } from './style';
import { CustomHeader } from '../../../Components/Header/index';
import { FooterButton } from '../../../Components/Footer/index';
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../../Redux/Action/AuthAction";
import { Images } from '../../../Utils/AppConstants/ImageConstants';
import { serviceAction } from '../../../Redux/Action/ServiceAction';



export default function Home(props) {
    const dispatch = useDispatch()
    const completeSignupData = useSelector(state => state.AuthReducer.completeSignupData)
    const userDetails = useSelector(state => state)
    const isLoggedIn = useSelector(state => state.AuthReducer.isLoggedIn)
    const serviceData = useSelector(state => state.ServiceReducer.userServicesData)

    useEffect(() => {
        dispatch(serviceAction());  
    }, [])

    useEffect(() => {
        console.log("serviceData--", serviceData)
    }, [serviceData])

    // const data = [
    //     {
    //         image: Images.maaliGarden,
    //         title: "Maali",
    //         description: "Cutting and Grooming your garden",
    //         id: "1"
    //     },
    //     {
    //         image: Images.kitchenGarden,
    //         title: "Kitchen Garden",
    //         description: "Planting and design your kitchen garden",
    //         id: "2"
    //     },
    //     {
    //         image: Images.horticulture,
    //         title: "Horticulture",
    //         description: "Take care of your flowers",
    //         id: "3"
    //     },
    //     {
    //         image: Images.agriDoctor,
    //         title: "Agri-Doctor",
    //         description: "Consult an agri-Doctor",
    //         id: "4"
    //     },
    //     {
    //         image: Images.soilTest,
    //         title: "Soil Test",
    //         description: "Know your soil improve productivity",
    //         id: "1"
    //     },
    //     {
    //         image: Images.savePlants,
    //         title: "Save Plants",
    //         description: "Save Plants Save Environment",
    //         id: "6"
    //     }

    // ]


    useEffect(() => {
        console.log("completeSignupData--", completeSignupData)
    }, [completeSignupData])

    useEffect(() => {
        console.log("userDetails--", userDetails)
    }, [userDetails])

    const logoutUser = () => {
        dispatch(logoutAction(() => props.navigation.navigate('Home')));

    }

    const serviceDetails = (title,id) =>{
console.log("title--",title)
console.log("id--",id)
if (title){
    props.navigation.navigate(title)
}
    }

    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={Images.backgroundImage} style={styles.backgroundImage}>
            { isLoggedIn == true
                ?
                <CustomHeader
                    headerTitle="Service"
                    headingTextStyle={{color:"white"}}
                    headingText="What Service do you need?"
                    textStyle={{color:"white"}}
                />
                :
                <CustomHeader
                    headerTitle="MAALI"
                    headingTextStyle={{color:"white"}}
                    headingText="The Total Garden Solution"
                    textStyle={{color:"white"}}
                />
            }
            <FlatList
                data={serviceData}
                keyExtractor={item => item.id}
                numColumns={2}
                style={{backgroundColor:"white"}}
                renderItem={(item) => {
                    console.log("item---", item)
                    return (

                        <View style={styles.itemView}>
                            <View style={styles.imageView}>
                                <Image
                                    style={styles.imageView}
                                    source={{uri:item.item.image}}
                                />
                            </View>
                            <Text style={styles.imageTitle}>{item.item.title}</Text>
                            <TouchableOpacity onPress={()=> serviceDetails(item.item.title,item.item.id)}>
                                <View style={styles.infoItem}>
                                    <Text style={styles.descriptionText}>{item.item.description}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
                }
            />
            {  isLoggedIn == true
                ?
                <FooterButton
                    buttonTitle1="Logout"
                    onPressButton1={() => logoutUser()}
                    buttonTitle2="Edit Profile"
                    onPressButton2={()=>props.navigation.navigate('EditProfile')}
                />
                :
                <FooterButton
                    buttonTitle1="Sign In"
                    onPressButton1={() => props.navigation.navigate('Login')}
                    buttonTitle2="New Registration"
                    onPressButton2={() => props.navigation.navigate('RegisterMobileNo')}
                />
            }
            </ImageBackground>
        </View>
    )
}
