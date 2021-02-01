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
        marginTop:hp("1.5%"),
        marginLeft:hp("1.5%"),
        backgroundColor:"#99FF99",
        borderRadius:10,
        padding:5,
        height:hp("26%"),
        width:wp("45%")
    },
    imageView:{
        height:hp("12%"),
        width:wp("25%"),
        // borderWidth:3,
        borderRadius:10,
        alignSelf:"center"
        
    },
    imageTitle:{
        fontWeight:"700",
        color:"black",
        paddingVertical:3,
        fontSize:20, 
        textAlign:"center"
    },
    infoItem:{
        backgroundColor:"#3399FF",
        height:hp("8%"),
        width:wp("42%"),
        // borderWidth:3,
        borderRadius:30,
        justifyContent:"center"
    },
    descriptionText:{
        textAlign: "center", 
        color: "white", 
        fontWeight: "700"
    }
})
