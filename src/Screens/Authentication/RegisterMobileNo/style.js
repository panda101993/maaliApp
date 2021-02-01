import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    backgroundImage:{
        height:hp("100%"),
        width:wp("100%")
      },
    headerView:{
        alignItems:"center",
        marginTop:hp("15%"),
        
    },
    headingText:{
        fontSize:50,
        fontWeight:"700",
        color:"white"
        // fontFamily:"AbrilFatface-Regular"
    },
    ErrorView:{
        alignSelf:"center",
        width:wp("75%")
     },
     errorTextStyle:{
         paddingLeft:15
     },
    containerView:{
        marginTop:hp("10%"),
        alignItems:"center"
    },
    containerViewText:{
        fontSize:32,
        color:"white"
    },
    inputView:{
        marginTop:hp("2%"),
        // borderWidth:1,
        borderRadius:25,
        height:hp("6%"),
        alignSelf:"center",
        width:wp("75%"),
        backgroundColor:"white"
        

    },
    RegisterButtonView:{
        marginTop:hp("7%"),
        height:hp("6%"),
        alignSelf:"center",
        width:wp("50%"),
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#23a7fa",
        borderRadius:25,
    },
    buttonTextStyle:{
        fontSize:20,
        color:"white",
        fontWeight:"700"
    },
    textInputStyle:{
        height:40,
        paddingLeft:15
    }
})
