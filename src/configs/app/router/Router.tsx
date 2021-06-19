import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {PureComponent} from 'react';
import MyNavigator from 'utils/MyNavigator';
import {SearchScreen} from 'views/search';
import {SplashScreen} from 'views/splash';

import {RouterBottomTab} from './RouterBottomTab';

const RootStack = createStackNavigator();

class Router extends PureComponent {
    navigator: any;

    routerNamePrev: any;

    render() {
        return (
            <NavigationContainer
                ref={nav => {
                    if (nav) {
                        this.navigator = nav;
                        MyNavigator.setNavigator(nav);
                    }
                }}
                onReady={() => {
                    this.routerNamePrev = this.navigator.getCurrentRoute().name;
                }}
                onStateChange={() => {
                    // const previousRouteName = this.routerNamePrev;
                    const currentRouteName =
                        this.navigator.getCurrentRoute().name;
                    // if (previousRouteName !== currentRouteName) {
                    //     Utilities.logAnalytics(currentRouteName);
                    // }
                    MyNavigator.setCurrentScreen(currentRouteName);
                }}>
                <RootStack.Navigator initialRouteName="Splash">
                    <RootStack.Screen name="Splash" component={SplashScreen} />
                    <RootStack.Screen
                        name="Home"
                        component={RouterBottomTab}
                        options={{headerShown: false}}
                    />
                    <RootStack.Screen name="Search" component={SearchScreen} />
                </RootStack.Navigator>
            </NavigationContainer>
        );
    }
}

export {Router};
