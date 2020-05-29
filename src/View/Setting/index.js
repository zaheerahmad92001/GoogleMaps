import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import Map from '../../Component/Map';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
export default class Setting extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{flex:1}}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
            </View>
        )
    }
} 