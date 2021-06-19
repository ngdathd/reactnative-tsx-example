import {
    CommonActions,
    NavigationContainerRef,
    StackActions,
    TabActions,
} from '@react-navigation/native';
import {SCREEN} from 'configs/app/router';

export default class MyNavigator {
    static rootNavigator: NavigationContainerRef;

    static currentScene: SCREEN;

    static setNavigator = (navigator: NavigationContainerRef) => {
        MyNavigator.rootNavigator = navigator;
    };

    static getNavigator = () => MyNavigator.rootNavigator;

    static setCurrentScreen = (screen: SCREEN) => {
        MyNavigator.currentScene = screen;
    };

    static getCurrentScreen = () => MyNavigator.currentScene;

    /**
     * thay thế màn hình
     *
     * @T phải là kiểu object không phải là kiểu dữ liệu nguyên thủy (int, bool, string, [])
     * @params là kiểu object
     *
     */
    static replace<T extends {}>(name: SCREEN, params?: T) {
        if (MyNavigator.rootNavigator && name) {
            const action = StackActions.replace(name, params);
            MyNavigator.rootNavigator.dispatch(action);
        }
    }

    /**
     * chuyển tab
     *
     * @T phải là kiểu object không phải là kiểu dữ liệu nguyên thủy (int, bool, string, [])
     * @params là kiểu object
     *
     */
    static jump<T extends {}>(name: SCREEN, params?: T) {
        if (MyNavigator.rootNavigator && name) {
            const action = TabActions.jumpTo(name, params);
            MyNavigator.rootNavigator.dispatch(action);
        }
    }

    /**
     * reset, push only one on StackScreen, switch screen inside drawerContent
     *
     * @T phải là kiểu object không phải là kiểu dữ liệu nguyên thủy (int, bool, string, [])
     * @params là kiểu object
     *
     */
    static navigate<T extends {}>(name: SCREEN, params?: T) {
        if (MyNavigator.rootNavigator && name) {
            const action = CommonActions.navigate(name, params);
            MyNavigator.rootNavigator.dispatch(action);
        }
    }

    /**
     * push 1 màn hình trong StackScreen
     *
     * @T phải là kiểu object không phải là kiểu dữ liệu nguyên thủy (int, bool, string, [])
     * @params là kiểu object
     *
     */
    static push<T extends {}>(name: SCREEN, params?: T) {
        if (MyNavigator.rootNavigator && name) {
            const action = StackActions.push(name, params);
            MyNavigator.rootNavigator.dispatch(action);
        }
    }

    /**
     * Refresh 1 màn hình
     *
     * @T phải là kiểu object không phải là kiểu dữ liệu nguyên thủy (int, bool, string, [])
     * @params là kiểu object
     *
     */
    static refresh<T extends {}>(params: T) {
        if (MyNavigator.rootNavigator) {
            const state = MyNavigator.rootNavigator.getRootState();
            if (state) {
                const arrRoute = state.routes;
                if (arrRoute && arrRoute.length > 0) {
                    const action = CommonActions.setParams(params);
                    MyNavigator.rootNavigator.dispatch(action);
                }
            }
        }
    }

    static pop = (count: number) => {
        if (MyNavigator.rootNavigator) {
            const action = count ? StackActions.pop(count) : StackActions.pop();
            MyNavigator.rootNavigator.dispatch(action);
        }
    };

    static goBack = () => {
        if (MyNavigator.rootNavigator) {
            const action = CommonActions.goBack();
            MyNavigator.rootNavigator.dispatch(action);
        }
    };

    static popToTop = () => {
        if (MyNavigator.rootNavigator) {
            const action = StackActions.popToTop();
            MyNavigator.rootNavigator.dispatch(action);
        }
    };

    static popTo = (name: SCREEN) => {
        if (MyNavigator.rootNavigator) {
            const state = MyNavigator.rootNavigator.getRootState();
            if (state) {
                const arrRoute = state.routes;
                if (arrRoute && arrRoute.length > 0) {
                    const indexScreen = arrRoute.findIndex(
                        (x: any) => x.name === name,
                    );
                    if (indexScreen > -1) {
                        let count = 0;
                        count = arrRoute.length - 1 - indexScreen;
                        if (count) {
                            const action = StackActions.pop(count);
                            MyNavigator.rootNavigator.dispatch(action);
                        }
                    }
                }
            }
        }
    };
}
