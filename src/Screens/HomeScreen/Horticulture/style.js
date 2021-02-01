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
    itemView:{
        marginVertical:hp("2.5%"),
        // borderWidth:1,
        height:hp("13%"),
        width:wp("75%"),
        // backgroundColor:"yellow",
        alignSelf:"center",
        // flexDirection:"row"
    },
    priceView:{
        height:hp("6%"),
        width:wp("25%"),
        // backgroundColor:"red",
        alignSelf:"center",
        flexDirection:"row",
        justifyContent:"center"
       },
    priceText:{
        color:"#fff",
        fontWeight:"700",
        fontSize:24
    },
    buttonView:{
        // marginTop:hp("2%"),
        height:hp("7%"),
        width:wp("75%"),
        backgroundColor:"#23a7fa",
        flexDirection:"row",
        justifyContent:"center",
        borderRadius:25,       
    },
    buttonText:{
        alignSelf:"center",
        fontSize:24,
        paddingLeft:10,
        color:"#fff",
        fontWeight:"bold"
    }
})
