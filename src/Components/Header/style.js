import { StyleSheet} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


export const styles = StyleSheet.create({
    headerView:{
        alignItems:"center",
        marginTop:hp("3%"),       
    },
    headingText:{
        fontSize:50,
    },
    containerView:{
        alignItems:"center"
    },
    containerViewText:{
        fontSize:22
    },
})
