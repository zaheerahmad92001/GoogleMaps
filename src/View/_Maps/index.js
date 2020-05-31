import React, { Component } from 'react';
import {
    View,
    Text,
    Platform,
    PermissionsAndroid
} from 'react-native';
import Map from '../../Component/Map';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";
import styles from './styles';
import Geolocation from "react-native-geolocation-service";
import { Thumbnail } from 'native-base';
export default class _Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 37.78825,
            longitude: -122.4324,
            coordinates: [],

            markers: [{
                title: 'Marker 1',
                coordinates: {
                    latitude: 37.78825,
                    longitude: -122.4324,
                },
            },
            {
                title: 'Maker 2',
                coordinates: {
                    latitude: 40.73041,
                    longitude: -73.925232
                },
            },
            {
                title: 'Maker 3',
                coordinates: {
                    latitude: 40.73061,
                    longitude: -73.935242
                },
            }]
        };
    }
    requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Example App',
                    'message': 'Example App access to your location '
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location")
                alert("You can use the location");
                this._getCurrentPosition()
            } else {
                console.log("location permission denied")
                alert("Location permission denied");
            }
        } catch (err) {
            console.warn(err)
        }
    }
    _getCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log('position',position)
                this.setState({
                    //  latitude: parseFloat(JSON.stringify( position.coords.latitude)),
                    //  longitude:parseFloat(JSON.stringify( position.coords.longitude)),
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    coordinates: this.state.coordinates.concat({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    })
                });
            },
            (error) => {
                console.log('permission ', error.message.toString());
            },
            {
                showLocationDialog: true,
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 5000
            }
        );


    }
    componentDidMount() {
        Geolocation.watchPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    coordinates: this.state.coordinates.concat({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    })
                });
            },
            (error) => {
                alert(error.message.toString())
            },
            {
                showLocationDialog: true,
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 2000,
                distanceFilter: 5000
            }
        );
    }
     componentWillMount() {
     this.requestLocationPermission()
    }
    render() {
       
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
                    }}>
                    {this.state.markers.map((marker) => {
                        return (
                            <Marker
                                coordinate={{
                                    latitude: marker.coordinates.latitude,
                                    longitude: marker.coordinates.longitude,
                                }}>
                                {/* <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Text>zaheer</Text>
                                    <Thumbnail small circular
                                        source={require('../../assets/Brainwake_Logos_1.jpg')}
                                    />
                                </View> */}
                            </Marker>
                        )
                    })}
                </MapView>
            </View>


        )
    }
} 