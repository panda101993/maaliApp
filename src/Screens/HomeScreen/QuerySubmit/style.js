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
    messageView:{
        marginTop:hp("30%"),
        alignSelf:"center",
        justifyContent:"center",
        width:wp("90%"),
        // height:hp("6%"),
        // backgroundColor:"yellow",
        
    },
    messageText:{
        fontSize:20,
        textAlign:"center",
        color:"white"
    },
    submitButton:{
        marginVertical:hp("3%"),
        height:hp("6%"),
        width:wp("70%"),
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:25,
        backgroundColor:"#23a7fa"
    },
    submitText:{
        fontSize:20,
        color:"white",
        fontWeight:"700"
    },

})
