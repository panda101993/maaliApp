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
      headingtextViewStyle:{
        //   backgroundColor:"yellow",
          width:wp("90%"),
          alignSelf:"center",          
      },
      headingTextStyle:{
          color:"white",
          fontSize:20,
          textAlign:"center"
        },
    // textInputView:{
    //     marginVertical:hp("3%"),
    //     height:hp("20%"),
    //     width:wp("85%"),
    //     backgroundColor:"#fff",
    //     alignSelf:"center",
    //     borderRadius:10
    // },
    // textInputStyle:{
    //     padding:10,
    //     width:wp("73%"),
    //     flexWrap:"wrap",
    //     borderRadius:10
    // },
    // sendView:{
    //     borderRadius:30,
    //     alignSelf:"flex-start",
    //     padding:5,
    //     width:wp("12%"),
    //     height:hp("6%"),
    //     backgroundColor:"#23a7fa",
    //     justifyContent:"space-evenly"
    // },
    // renderTextStyle:{
    //     padding:10,
    //     height:hp("14%"),
    //     width:wp("85%"),
    //     borderRadius:10,
    //     flexWrap:"wrap",
    //     backgroundColor:"white"
    // },
    // scrollViewStyle:{
    //     height:hp("14%"),
    //     width:wp("83%"),
    // }
    serviceView:{
        marginTop:hp("1%"),
        width:wp("90%"),
        flexDirection:"row",
        alignSelf:"center",
    },
    bugView:{
        justifyContent:"center",
        width:wp("12%"), 
    },
    contentView:{
        justifyContent:"center",
        width: wp("55%") ,
    },
    serviceText:{
        fontSize: 18, 
        color: "#fff", 
        fontWeight: "700" 
    },
    uploadTextView:{
        // marginTop:hp("1%"),
        width:wp("60%"),
        // backgroundColor:"yellow",
        alignSelf:"center"
    },
    uploadTextStyle:{
        color:"#fff",
        fontSize:22,
        textAlign:"center"
    },
    uploadBox:{
        height:hp("12%"),
        width:wp("32%"),
        alignSelf:"center",
        borderRadius:10,
        // borderWidth:1,
        // backgroundColor:"red"
    },
    imageStyle:{
        width: wp('32%'),
        height: hp('12%'),
        alignSelf: "center",
        borderRadius: 10,
        backgroundColor: "#fff"
    },
    uploadButtonView:{
        marginTop:hp("1%"),
        height:hp("5.5%"),
        alignSelf:"center",
        width:wp("35%"),
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
    scrollStyle:{
        height:hp("72%"),
        width:wp("100%")
    },

    buttonview:{
        marginVertical:hp("1%"),
        width:wp("80%"),
        alignSelf:"center",
        height:hp("7%"),
        flexDirection:"row",
        borderRadius:25,
        
    },
    ButtonView1:{
        width:wp("40%"),
        height:hp("7%"),
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#23a7fa",
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
    },
    // buttonText:{
    //     fontSize:20,
    //     color:"white",
    //     fontWeight:"700"
    // },
    ButtonView2:{
        width:wp("40%"),
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
