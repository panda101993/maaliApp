import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, ScrollView, ImageBackground } from 'react-native';
import { styles } from './style';
import { CustomHeader } from '../../../Components/Header/index';
import { CustomButton } from '../../../Components/CustomButton/index';
import { useDispatch, useSelector } from "react-redux";
import {Images} from '../../../Utils/AppConstants/ImageConstants';
import {serviceDataAction} from '../../../Redux/Action/AuthAction';

export default function KitchenGarden(props) {
    const [length, setLength] = useState("20")
    const [width, setWidth] = useState("20")
    const [area, setArea] = useState("")
    const [status, setStatus] = useState(false)
    const [serviceType, setServiceType] = useState("Kitchen Garden")
    const isLoggedIn = useSelector(state => state.AuthReducer.isLoggedIn)
    const dispatch = useDispatch()

    const calculateArea = () =>{
    console.log("length--",length)
    console.log("width--",width)
    let areaSq = length * width
    console.log("areaSq--",areaSq)
    setArea(areaSq)
    console.log("area--",area)
    setStatus(true)
    }

    const submitButton = () =>{
        setStatus(false)
        console.log("area--",area)
        console.log("serviceType--",serviceType)

        let serviceData = {
            "serviceType": serviceType,
            "services": area,
        }
        {
            isLoggedIn == true 
            ?
            props.navigation.navigate('QuerySubmit')
            :
            dispatch(serviceDataAction(serviceData, () => props.navigation.navigate('Login')));
            // props.navigation.navigate('Login')

        }
    }

    useEffect(() => {
      console.log("isLoggedIn--",isLoggedIn)
    }, [isLoggedIn])

    return (
        <View style={styles.mainContainer}>
        <ImageBackground source={Images.backgroundImage} style={styles.backgroundImage}>
          <CustomHeader
                headerTitle="Kitchen Garden"
                headingTextStyle={{color:"white"}}
            />
            <ScrollView>
            <View style={styles.titleView}>
                <Text style={{fontSize:25, color:"white"}}>Length(ft.)</Text>
                <Text style={{fontSize:25,paddingRight:15,color:"white"}}>Width(ft.)</Text>
            </View >
            <View style={styles.titleView}>
                <View style={styles.lengthBox}>
                    <TextInput
                    style={{paddingLeft:15,height:40}}
                    placeholder="20"
                    value={length}
                    onChangeText={(text) => setLength(text)}
                    keyboardType="number-pad"
                    maxLength={10}
                    />
                </View>
                <View style={styles.lengthBox}>
                <TextInput
                    style={{paddingLeft:15,height:40}}
                    placeholder="20"
                    value={width}
                    onChangeText={(text) => setWidth(text)}
                    keyboardType="number-pad"
                    maxLength={10}
                    />
                </View>
            </View>
        <CustomButton
            buttonViewStyle={styles.areaButton}
            onPress={() => calculateArea()}
            buttonTextStyle={styles.areaText}
            buttonName="Calculate Area (Sq.Ft.)"
        />
         <View style={styles.outputBox}>
             <Text style={styles.outputText}>{area}</Text>
        </View>
        { status == true
        ?
            <CustomButton
            buttonViewStyle={styles.submitButton}
            onPress={() => submitButton()}
            buttonTextStyle={styles.areaText}
            buttonName="Submit"
        />
        :
        null
        }
        <View style={styles.descriptionbox}>
            <ScrollView>
           <View style={{margin:15}}>
                <Text style={{fontSize:22}}>
                    Urban:
                </Text>
                <Text style={{fontSize:22}}>
                    Up to 200 Sq. Ft. Rs. 400. Above 200 Sq. Ft. Rs. 2/Sq. Ft.
                </Text>
                <Text style={{fontSize:22}}>
                    Rural:
                </Text>
                <Text style={{fontSize:22}}>
                    Up to 200 Sq. Ft. Rs. 500. Above 200 Sq. Ft. Rs. 2.50/Sq. Ft.
                </Text>
           </View>
            </ScrollView>

        </View>
            </ScrollView>
            </ImageBackground>
    </View>
    )
}
