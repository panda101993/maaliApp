import React, {useState, useEffect} from 'react';
import { View, Text, ImageBackground,FlatList, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { CustomHeader } from '../../../Components/Header/index';
import { Images } from '../../../Utils/AppConstants/ImageConstants';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from "react-redux";
import {serviceDataAction} from '../../../Redux/Action/AuthAction';

export default function Horticulture(props) {
       const isLoggedIn = useSelector(state => state.AuthReducer.isLoggedIn)
       const [serviceType, setServiceType] = useState("Horticulture")
       const dispatch = useDispatch()
        const data = [
        {   
            rate:"999",
            icon: <IconFontAwesome name="leaf" size={35} color={"#fff"} />,
            title:"Garden Plant",
            id: "1"
        },
        {   
            rate:"499",
            icon: <IconFontAwesome name="apple" size={35} color={"#fff"} />,
            title:"Fruit Plant",
            id: "1"
        },
        {   
            rate:"599",
            icon: <IconFontAwesome name="tree" size={35} color={"#fff"} />,
            title:"Flower Plant",
            id: "1"
        },
        {   
            rate:"699",
            icon: <IconFontAwesome name="pagelines" size={35} color={"#fff"} />,
            title:"Scurbs & Herbs",
            id: "1"
        },

    ]

    const serviceDetails = (itemDetails, itemId) =>{
        console.log("itemId--",itemId)
        console.log("itemDetails--",itemDetails)
        console.log("serviceType--",serviceType)
        let serviceData = {
            "serviceType": serviceType,
            "services": itemDetails,
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
        <View style={styles.mainContainer}>
            <ImageBackground source={Images.backgroundImage} style={styles.backgroundImage}>
              <CustomHeader
                    headerTitle="HortiCulture"
                    headingTextStyle={{color:"white"}}
                />
                <FlatList
                data={data}
                keyExtractor={item => item.id}
                style={{maxHeight:520}}
                renderItem={(item) => {
                    console.log("item---", item)
                    return (
                        <View style={styles.itemView}>
                            <View style={styles.priceView}>
                                <Text style={styles.priceText}>Rs.</Text>
                                <Text style={styles.priceText}>{item.item.rate}</Text>
                            </View>
                            <TouchableOpacity onPress={()=> serviceDetails(item.item, item.item.id)}>
                                <View style={styles.buttonView}>
                                   
                                   <View style={{alignSelf:"center"}}>{item.item.icon}</View>
                                    <Text style={styles.buttonText}>{item.item.title}</Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
                }
            />
           </ImageBackground>    
        </View>
    )
}
