import React, {PureComponent} from 'react';
import {Button, View} from 'react-native';
import MyNavigator from 'utils/MyNavigator';

import {splashStyles} from './styles';

class Splash extends PureComponent {
    render() {
        return (
            <View style={splashStyles.container}>
                <Button
                    title="Home"
                    onPress={() => {
                        MyNavigator.replace('Home');
                    }}
                />
            </View>
        );
    }
}

export default Splash;
