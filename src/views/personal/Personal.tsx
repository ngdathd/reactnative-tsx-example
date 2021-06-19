import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import {personalStyles} from './styles';

class Personal extends PureComponent {
    render() {
        return (
            <View style={personalStyles.container}>
                <Text>Personal</Text>
            </View>
        );
    }
}

export default Personal;
