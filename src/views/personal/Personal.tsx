import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import {personalStyles} from './styles';

class Personal extends PureComponent {
    test = () => {
        console.log(111);
    };

    aaa = () => {
        console.log(111);
    };

    render() {
        return (
            <View style={personalStyles.container}>
                <Text>Personal</Text>
            </View>
        );
    }
}

export default Personal;
