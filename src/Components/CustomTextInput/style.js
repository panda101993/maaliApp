import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({

    inputBoxView:{
        flexDirection:"row",
        // marginTop:hp(".5%"),
        width:wp("85%"),
        alignSelf:"center",
        height:hp("6.5%")    
    },
    inputBoxView1:{
        flexDirection:"row",
        // marginBottom:hp("2.5%"),
        width:wp("85%"),
        alignSelf:"center",
        height:hp("6.5%")    
    },
    nameTitleView:{
        width:wp("30%"),
        justifyContent:"center"
    },
    inputView:{
        width:wp("55%"),
        // borderWidth:1,
        borderRadius:25,
        justifyContent:"center",
        backgroundColor:"white" 
    },
    textInputStyle:{
        height: 40,
        paddingLeft:15 
    },

    ErrorView:{
        alignSelf:"flex-end", 
        width: wp("58%"),
         height: hp("2.5%"),

    },
    ErrorText:{
        color: "red",
    },

    selectionView:{
        borderRadius:25,
        // borderWidth:1,
        flexDirection:"row",
        backgroundColor:"white"
        
    },
    inputView1:{
        width:wp("47%"),
        justifyContent:"center",
        
    },
    dropDownView:{
        width:wp("8%"),
        justifyContent:"center",
    },
    provinceText:{
        paddingLeft:15,
        fontSize:15,
        color:"black",
    },
    textInputBox:{
        marginTop:hp("1%"),
        height:hp("6%"),
        width:wp("85%"),
        backgroundColor:"#fff",
        alignSelf:"center",
        borderRadius:20
    },
    textInputStyle2:{
        padding:10
    }

})
