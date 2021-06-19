import React, {PureComponent} from 'react';
import {Button, View} from 'react-native';
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
            </View>
        );
    }
}

export default Map;
