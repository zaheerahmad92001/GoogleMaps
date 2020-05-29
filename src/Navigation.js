import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Splash from '../src/View/splash';
import Landing from '../src/View/Landing';
import Setting from '../src/View/Setting';
import {Text, View,StyleSheet}from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import { Green, light_Black } from './Colors';

const SplashNavigator = createStackNavigator({
  Splash: Splash
}, {
  initialRouteName: 'Splash',
  headerMode: 'none'
});

const TabNavigator = createBottomTabNavigator({
    Landing: Landing,
    Setting:Setting
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Landing') {
          iconName = focused
            ? 'md-alarm'
            : 'md-alarm';
        } else if (routeName === 'Setting') {
          iconName = focused ? 'md-settings' : 'md-settings';
        }

        // You can return any component that you like here!
        return focused ?(<View>
         <IconComponent name={iconName} size={25} color={tintColor} />
          {routeName==='Landing'?
        <Text style={styles.textStyle}>Home</Text>:routeName==='Setting'?
        <Text style={styles.textStyle}>Setting</Text>:null  
        }
         </View>):
         <IconComponent name={iconName} size={25} color={tintColor} />;
      },


    }),
    tabBarOptions: {
      activeTintColor: Green,
      inactiveTintColor: 'gray',
      showLabel:false,
     style:{backgroundColor:light_Black} 
    },
    
  });

const RootNavigator = createSwitchNavigator({
  SplashNavigator,
  TabNavigator
}, {
  initialRouteName: 'SplashNavigator',
  headerMode: 'none',
  navigationOptions: {
    headerTransparent: true
  }
})
export default createAppContainer(RootNavigator)
const styles = StyleSheet.create({
  textStyle:{
  fontSize:RFValue(12),
  color:Green,
  right:5
  }
})