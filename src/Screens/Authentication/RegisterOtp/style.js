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
        marginTop:hp("30%"),
        
    },
    headingText:{
        fontSize:40,
        color:"white"
    },
    inputView:{
        marginTop:hp("5%"),
        height:hp("5.5%"),
        width:wp("40%"),
        alignSelf:"center",
        // borderWidth:1,
        borderRadius:25,
        backgroundColor:"white"
    },
    submitButton:{
        marginTop:hp("5%"),
        height:hp("5.5%"),
        width:wp("30%"),
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
    textInputStyle:{
       height:40,
       paddingLeft:15 
    },
    ErrorView:{
        alignSelf:"center",
        paddingLeft:15,
        width:wp("45%"),
    },
  
})
