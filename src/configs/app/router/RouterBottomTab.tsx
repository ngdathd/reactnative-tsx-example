import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {PureComponent} from 'react';
import {FavoriteScreen} from 'views/favorite';
import {MapScreen} from 'views/map';
import {PersonalScreen} from 'views/personal';

const MainBottomTab = createBottomTabNavigator();

class RouterBottomTab extends PureComponent {
    render() {
        return (
            <MainBottomTab.Navigator>
                <MainBottomTab.Screen name="Map" component={MapScreen} />
                <MainBottomTab.Screen
                    name="Favorite"
                    component={FavoriteScreen}
                />
                <MainBottomTab.Screen
                    name="Personal"
                    component={PersonalScreen}
                />
            </MainBottomTab.Navigator>
        );
    }
}

export {RouterBottomTab};
