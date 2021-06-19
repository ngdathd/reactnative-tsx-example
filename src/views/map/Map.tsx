import React, {PureComponent} from 'react';
import {Button, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MyNavigator from 'utils/MyNavigator';

import {mapStyles} from './styles';

class Map extends PureComponent {
    render() {
        return (
            <View style={mapStyles.container}>
                <Button
                    title="Search"
                    onPress={() => {
                        MyNavigator.navigate('Search');
                    }}
                />
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={mapStyles.container}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                />
            </View>
        );
    }
}

export default Map;
