import React ,{Component}from 'react';
import {StyleSheet}from 'react-native';
import { dark_Black ,White, Green} from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { Left } from 'native-base';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:dark_Black,
    },
    content:{
    flex:0.85,   
    marginHorizontal: RFValue(20)
    },
    clockView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(30),
    },
    timeStyle:{
        color:White,
        fontSize:RFValue(50),
    },
    reminingTimeView:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'center',
        marginTop:RFValue(10)
    },
    remainingTime:{
        color:White,
        fontStyle:'normal',
        fontWeight:'bold',
        fontSize:RFValue(15)
    },
    addBtn:{
    flex:0.15,
    position:'absolute',
    alignSelf:'center',
    bottom:30,
    },
    circle:{
        width:50,
        height:50,
        borderRadius:50/2,
        backgroundColor:Green,
        justifyContent:'center',
        alignItems:'center'
       
       
    }
})