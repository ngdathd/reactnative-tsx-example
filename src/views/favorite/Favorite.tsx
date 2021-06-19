import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import {favoriteStyles} from './styles';

class Favorite extends PureComponent {
    render() {
        return (
            <View style={favoriteStyles.container}>
                <Text>Favorite</Text>
            </View>
        );
    }
}

export default Favorite;
