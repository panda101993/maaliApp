import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
    buttonview:{
        marginVertical:hp("3%"),
        // borderWidth:3,
        width:wp("80%"),
        alignSelf:"center",
        height:hp("7%"),
        // borderRightWidth:6,
        // borderBottomWidth:6,
        flexDirection:"row",
        borderRadius:25,
        // backgroundColor:"pink",
        
    },
    signInButtonView:{
        width:wp("30%"),
        height:hp("7%"),
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#23a7fa",
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
    },
    buttonText:{
        fontSize:20,
        color:"white",
        fontWeight:"700"
    },
    registerButtonView:{
        width:wp("50%"),
        height:hp("7%"),
        borderLeftWidth:3,
        borderLeftColor:"white",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ff7b00",
        borderTopRightRadius:25,
        borderBottomRightRadius:25 
    }
})
