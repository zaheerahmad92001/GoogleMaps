import React,{Component}from 'react';
import {
    View,
    Text,Switch,
    SwitchIOS,
    StyleSheet,Platform
}from 'react-native';
import { light_Black, White, Green } from '../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { Thumbnail } from 'native-base';
// import { Switch } from 'react-native-gesture-handler';
const _Alarm =(props)=>{
    console.log('zaheer',props)
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row',flex:0.45,justifyContent:'space-between',alignItems:'center'}}>
        <Switch value={props.status} 
            trackColor={{true:Green ,false:White }}
            onValueChange={props.RingAlarm}
            thumbTintColor={props.status?White:'grey'}
            style={{transform: [{ scaleX:1}, { scaleY:1 }]} 
        
        }
      />
      <View>
          <Text style={styles.time}>05:00</Text>
          <Text style={styles.text}>Weekdays</Text>
      </View>
     
      </View>
      <View style={{flex:0.55,alignItems:'flex-end'}}>
      <Thumbnail square 
      source={require('../assets/Brainwake_Logos_1.jpg')}
      />
      </View>
        </View>
    )
}
export default _Alarm ;
const styles= StyleSheet.create({
container:{
    backgroundColor:light_Black,
    flexDirection:'row',
    borderRadius:RFValue(15),
    paddingHorizontal:RFValue(15),
    alignItems:'center',
    paddingVertical:RFValue(15),
    marginVertical:RFValue(15)
},
textColor:{
    color:White
},
text:{
    color:White,
    fontSize:RFValue(15),
    fontWeight:'600',
},
time:{
color:White,
fontSize:RFValue(25),
fontWeight:'600'  
}
})