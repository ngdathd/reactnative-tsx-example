import React, {PureComponent} from 'react';
import {Button, View} from 'react-native';
import MapView, {
    LatLng,
    Marker,
    Polygon,
    PROVIDER_GOOGLE,
    Region,
} from 'react-native-maps';
import MyNavigator from 'utils/MyNavigator';
import Utilities from 'utils/Utilities';

import {mapStyles} from './styles';

interface IProps {}

interface IStates {
    polygonArea: LatLng[];
}

class Map extends PureComponent<IProps, IStates> {
    mapRef: MapView | null;

    constructor(props: IProps) {
        super(props);
        this.mapRef = null;
        this.state = {
            polygonArea: Utilities.getPolygonTest1(),
        };
    }

    onRegionChangeComplete = (region: Region) => {
        const zoomLevel = Math.round(
            Math.log(360 / region.longitudeDelta) / Math.LN2,
        );
        const northeast = {
            // Đông Bắc
            latitude: region.latitude + region.latitudeDelta / 2,
            longitude: region.longitude + region.longitudeDelta / 2,
        };
        const southeast = {
            // Đông Nam
            latitude: region.latitude - region.latitudeDelta / 2,
            longitude: region.longitude + region.longitudeDelta / 2,
        };
        const southwest = {
            // Tây Nam
            latitude: region.latitude - region.latitudeDelta / 2,
            longitude: region.longitude - region.longitudeDelta / 2,
        };
        const northwest = {
            // Tây Bắc
            latitude: region.latitude + region.latitudeDelta / 2,
            longitude: region.longitude - region.longitudeDelta / 2,
        };
        console.log(zoomLevel, northeast, southeast, southwest, northwest);
    };

    onLayout = () => {
        const {polygonArea} = this.state;
        if (this.mapRef) {
            this.mapRef.fitToCoordinates(polygonArea, {
                edgePadding: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                },
                animated: false,
            });
        }
    };

    renderMarkers = () => (
        <Marker
            coordinate={{
                latitude: 40.819069558745184,
                longitude: -73.9385145079471,
            }}
            title="northeast"
            pinColor="red"
        />
    );

    render() {
        const {polygonArea} = this.state;
        return (
            <View style={mapStyles.container}>
                <Button
                    title="Search"
                    onPress={() => {
                        MyNavigator.navigate('Search');
                    }}
                />
                <MapView
                    ref={ref => {
                        this.mapRef = ref;
                    }}
                    provider={PROVIDER_GOOGLE}
                    style={mapStyles.mapView}
                    // minZoomLevel={7}
                    maxZoomLevel={19}
                    onLayout={this.onLayout}
                    onRegionChangeComplete={this.onRegionChangeComplete}>
                    {this.renderMarkers()}

                    <Polygon
                        coordinates={polygonArea}
                        strokeColor="red"
                        strokeWidth={1}
                    />
                </MapView>
            </View>
        );
    }
}

export default Map;
