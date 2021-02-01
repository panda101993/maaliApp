import { StyleSheet,Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },
    backgroundImage:{
        height:hp("100%"),
        width:wp("100%")
      },
    signupButtonText:{
        fontSize:20,
        color:"white",
        fontWeight:"700"
    },
    signupButtonView:{
        marginVertical:hp("2%"),
        height:hp("6%"),
        alignSelf:"center",
        width:wp("40%"),
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#23a7fa",
        borderRadius:25,
        
    },
    modalContainer:{
            flex: 1,
            backgroundColor: 'rgba(122, 122, 122,0.5)',
            justifyContent: 'center'
    },
    modalCancelView:{
        backgroundColor: '#23a7fa', 
        width: wp("40%"),
        borderRadius:25
    },
    modalCancelText:{
            alignSelf: "center",
            marginVertical: 5,
            fontWeight: "bold",
            fontSize: 20,
            color: 'white'
    },
    //flatList style
    flatListStyle:{
        maxHeight: height / 2,
        width: wp("70%"), 
        // justifyContent: "center",
        alignSelf: "center", 
        alignItems: "center",
        backgroundColor: 'white', 
        paddingVertical: 15
    },
    itemSeperatorStyle:{
        height: 1,
        backgroundColor: "grey", 
        width: wp("70%")
    },
    renderItem:{ 
        fontSize: 15, 
        marginVertical: 10, 
    },
    renderItemView:{
        width: wp("50%"),
    }

  
})
