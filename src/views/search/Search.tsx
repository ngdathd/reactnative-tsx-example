import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import {searchStyles} from './styles';

class Search extends PureComponent {
    render() {
        return (
            <View style={searchStyles.container}>
                <Text>Search</Text>
            </View>
        );
    }
}

export default Search;
