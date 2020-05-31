import React ,{Component}from 'react';
import {
StyleSheet
}from 'react-native';
export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    mapStyle:{
        ...StyleSheet.absoluteFillObject,
        position:'absolute',
        top:0,left:0,right:0,bottom:0
    }
})
