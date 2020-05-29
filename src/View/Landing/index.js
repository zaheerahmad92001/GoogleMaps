import React, { Component } from 'react';
import { View, Text, Surface } from 'react-native';
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Content, Icon } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import _Alarm from '../../Component/Alarm';
import { White } from '../../Colors';
export default class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alarmStatus: false,
        }
    }
    setAlarm = () => {
        this.setState({ alarmStatus: !this.state.alarmStatus })
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
               
                    <View style={styles.content}>
                        <View style={styles.clockView}>
                            <Text style={styles.timeStyle}>0</Text>
                            <Text style={styles.timeStyle}>0</Text>
                            <Text style={[styles.timeStyle, { marginHorizontal: 5 }]}>:</Text>
                            <Text style={styles.timeStyle}>0</Text>
                            <Text style={styles.timeStyle}>0</Text>
                        </View>
                        <View style={styles.reminingTimeView}>
                            <Text style={[styles.remainingTime]}>19</Text>
                            <Text style={[styles.remainingTime]}>h</Text>
                            <Text style={[styles.remainingTime, { marginLeft: RFValue(5) }]}>58</Text>
                            <Text style={styles.remainingTime}>m</Text>
                            <Text style={[styles.remainingTime, { marginLeft: RFValue(5) }]}>until next alarm</Text>
                        </View>
                        <_Alarm
                            status={this.state.alarmStatus}
                            RingAlarm={this.setAlarm}
                        ></_Alarm>
                        <_Alarm
                            status={this.state.alarmStatus}
                            RingAlarm={this.setAlarm}
                        ></_Alarm>

                       
                    </View>
                    <View style={styles.addBtn}>
                            <View style={styles.circle}>
                              <Icon
                              name={'plus'}
                              type={'AntDesign'}
                              style={{fontSize:20,color:White}}
                              />
                            </View>
                        </View>
            </SafeAreaView>
        )
    }
}