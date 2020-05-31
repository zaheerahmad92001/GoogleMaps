import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import Map from '../../Component/Map';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import style from './styles';
import styles from './styles';
export default class _Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 24.926294,
            longitude: 67.022095,
            coordinates: [],
            markers: [{
                title: 'Title 1',
                coordinates: {
                    latitude: 3.148561,
                    longitude: -122.4324
                },
            },
            {
                title: 'Title 2',
                coordinates: {
                    latitude: 30.3753,
                    longitude: 69.3451
                },
            }]
        };
    }

    render() {
        {
            this.state.markers.map(marker => {
                console.log('latLong', marker.coordinates.latitude)
            })
        }
        return (

            <View style={{ flex: 1 }}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                    initialRegion={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                             coordinate={{
                                 latitude: this.state.latitude,
                                 longitude: this.state.longitude,
                             }}>
                         </Marker>

                
                        {/* <Marker
                        coordinate={{
                            latitude: 3.148561,
                            longitude: -122.4324
                        }}></Marker>  */}
                       

                </MapView>
            </View>
            // <MapView
            //      provider={PROVIDER_GOOGLE}
            //     // customMapStyle={mapStyle}
            //     style={styles.mapStyle}
            //     initialRegion={{
            //         latitude: this.state.latitude,
            //         longitude: this.state.longitude,
            //         latitudeDelta: 0.0922,
            //         longitudeDelta: 0.0421,
            //     }}>
            //     <Marker
            //         coordinate={{
            //             latitude: this.state.latitude,
            //             longitude: this.state.longitude,
            //         }}>
            //     </Marker>
            // </MapView>

        )
    }
} 