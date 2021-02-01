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
    titleView:{
        flexDirection:"row",
        width:wp("80%"),
        alignSelf:"center",
        justifyContent:"space-between"
    },
    lengthView:{
        width:wp("52%"),
        
    },
    lengthBox:{
        marginTop:hp("2%"),
        // borderWidth:1,
        width:wp("33%"),
        height:hp("6%"),
        borderRadius:25,
        backgroundColor:"white"
    },
    areaButton:{
        marginVertical:hp("3%"),
        height:hp("6%"),
        width:wp("70%"),
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:25,
        backgroundColor:"#23a7fa"
    },
    areaText:{
        fontSize:20,
        color:"white",
        fontWeight:"700"
    },
    outputBox:{
        // marginTop:hp("2%"),
        // borderWidth:1,
        width:wp("50%"),
        height:hp("6%"),
        borderRadius:25,
        alignSelf:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },
    outputText:{
        // alignSelf:"center",
        paddingLeft:15,
        fontSize:22
    },
    submitButton:{
        marginTop:hp("3%"),
        height:hp("6%"),
        alignSelf:"center",
        width:wp("40%"),
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ff7b00",
        borderRadius:25,
        
    },
    descriptionbox:{
        marginVertical:hp("3%"),
        height:hp("35%"),
        width:wp("85%"),
        backgroundColor:"#99FF99",
        alignSelf:"center",
        backgroundColor:"white",
        borderRadius:20

    }
})
