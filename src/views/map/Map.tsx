import {aaa1} from 'abc';
import {MapModel} from 'models';
import React, {PureComponent} from 'react';
import {Button, View} from 'react-native';
import MapView, {
    Marker,
    Polygon,
    PROVIDER_GOOGLE,
    Region,
} from 'react-native-maps';
import {MapAPI} from 'services';
import MyNavigator from 'utils/MyNavigator';
import Utilities from 'utils/Utilities';

import {mapStyles} from './styles';

interface IProps {}

interface IStates {
    isFirstLoading: boolean;
    dataTest: MapModel[];
}

class Map extends PureComponent<IProps, IStates> {
    mapRef: MapView | null;

    constructor(props: IProps) {
        super(props);
        this.mapRef = null;
        this.state = {
            isFirstLoading: true,
            dataTest: Utilities.getDataInit(),
        };

        console.log(aaa1);
    }

    onRegionChangeComplete = (region: Region) => {
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
        const zoomlevel = Math.round(
            Math.log(360 / region.longitudeDelta) / Math.LN2,
        );

        const {isFirstLoading} = this.state;
        if (!isFirstLoading) {
            MapAPI.geospatial({
                viewport: [[northeast, southeast, southwest, northwest]],
                zoomlevel,
                isIntersects: true,
            })
                .then(res => {
                    this.setState({
                        dataTest: res.data || [],
                    });
                })
                .catch(error => {
                    console.log(error);
                    this.setState({
                        dataTest: [],
                    });
                });
        } else {
            this.setState({
                isFirstLoading: false,
            });
        }
    };

    onLayout = () => {
        const {dataTest} = this.state;

        if (this.mapRef) {
            this.mapRef.fitToCoordinates(dataTest[0].polygon, {
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

    renderPolygonsAndMarkers = () => {
        const {dataTest} = this.state;

        const dataPolygonsAndMarkers = [];
        for (let i = 0; i < dataTest.length; i += 1) {
            const mapModel = dataTest[i];
            dataPolygonsAndMarkers.push(
                <Polygon
                    key={Utilities.randomNumber()}
                    coordinates={mapModel.polygon}
                    strokeColor="red"
                    strokeWidth={1}
                />,
            );
            for (let j = 0; j < mapModel.listMarkers.length; j += 1) {
                const marker = mapModel.listMarkers[j];
                if (marker.type === 'group') {
                    dataPolygonsAndMarkers.push(
                        <Marker
                            key={Utilities.randomNumber()}
                            coordinate={marker.coordinate}
                            title={String(marker.countProduct)}
                            pinColor="blue"
                        />,
                    );
                } else {
                    dataPolygonsAndMarkers.push(
                        <Marker
                            key={Utilities.randomNumber()}
                            coordinate={marker.coordinate}
                            title={String(marker.countProduct)}
                            pinColor="red"
                        />,
                    );
                }
            }
        }
        return dataPolygonsAndMarkers;
    };

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
                    ref={ref => {
                        this.mapRef = ref;
                    }}
                    provider={PROVIDER_GOOGLE}
                    style={mapStyles.mapView}
                    minZoomLevel={7}
                    maxZoomLevel={19}
                    onLayout={this.onLayout}
                    onRegionChangeComplete={this.onRegionChangeComplete}>
                    {this.renderPolygonsAndMarkers()}
                </MapView>
            </View>
        );
    }
}

export default Map;
