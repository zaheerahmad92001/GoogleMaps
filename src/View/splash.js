import React,{Component}from 'react';
import {
    View,
    StyleSheet,
    Image,
    ImageBackground,
    Dimensions
}from 'react-native';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
import { RFValue } from 'react-native-responsive-fontsize';


export default class Splash extends Component{
    componentDidMount(){
        setTimeout(()=>{
        this.props.navigation.navigate('Landing')
        },1000)
    }
    render(){
        return(
            <View style={styles.container}>
            <Image
            style={styles.imageStyle}
            source={require('../assets/Brainwake_Logos_1.jpg')}
            >
            </Image>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
    },
    imageStyle:{
        width:RFValue(350),
        height:RFValue(300)
    }
})