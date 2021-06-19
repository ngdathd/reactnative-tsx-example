import {Router} from 'configs/app/router';
import React, {PureComponent} from 'react';
import {BackHandler, StatusBar, StyleSheet, ToastAndroid} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';

enableScreens();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    statusBar: {
        backgroundColor: 'white',
    },
});

interface IProps {}

interface IStates {
    validCloseWindow: boolean;
}

class App extends PureComponent<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {validCloseWindow: false};
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backAction);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backAction);
    }

    backAction = () => {
        const {validCloseWindow} = this.state;

        if (validCloseWindow) {
            BackHandler.exitApp();
        }

        this.setState(
            {
                validCloseWindow: true,
            },
            () => {
                setTimeout(() => {
                    this.setState({
                        validCloseWindow: false,
                    });
                }, 3000);
                ToastAndroid.show(
                    'Nhấn một lần nữa để thoát ra. Tap again to exit',
                    ToastAndroid.SHORT,
                );
            },
        );
        return true;
    };

    render() {
        return (
            <SafeAreaView style={styles.container} edges={['left', 'right']}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={styles.statusBar.backgroundColor}
                />
                <Router />
            </SafeAreaView>
        );
    }
}

export default App;
