import {MapModel} from 'models';
import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width, height} = Dimensions.get('screen');
const sizeOfWidth = 375;
const sizeOfHeight = 812;

export default class Utilities {
    static getWidthScreen(isPixel?: any) {
        if (width < height) {
            if (isPixel) return PixelRatio.getPixelSizeForLayoutSize(width);
            return width;
        }
        if (isPixel) return PixelRatio.getPixelSizeForLayoutSize(height);
        return height;
    }

    static getHeightScreen(isPixel?: any) {
        if (width < height) {
            if (isPixel) return PixelRatio.getPixelSizeForLayoutSize(height);
            return height;
        }
        if (isPixel) return PixelRatio.getPixelSizeForLayoutSize(width);
        return width;
    }

    /* 
        sizeOfItemDesign - kich thuoc chieu rong cua view can tinh toan
        sizeOfWidth - kich thuoc man hinh theo thiet ke theo chieu rong (Width)
    */
    static getResolutionByWidth = (sizeOfItemDesign: any) =>
        (sizeOfItemDesign / sizeOfWidth) * Utilities.getWidthScreen();

    /* 
        sizeOfItemDesign - kich thuoc chieu cao cua view can tinh toan
        sizeOfHeight - kich thuoc man hinh thiet ke theo chieu cao (Height)
    */
    static getResolutionByHeight = (sizeOfItemDesign: any) =>
        (sizeOfItemDesign / sizeOfHeight) * Utilities.getHeightScreen();

    static isAndroid = () => Platform.OS === 'android';

    static isIphoneX() {
        const dim = Dimensions.get('window');

        return (
            Platform.OS === 'ios' &&
            (dim.height === 812 ||
                dim.width === 812 ||
                dim.height === 896 ||
                dim.width === 896)
        );
    }

    static randomNumber() {
        return Math.random().toString(16).substring(2, 10);
    }

    static getDataInit(): MapModel[] {
        return [
            {
                polygon: [
                    {
                        latitude: 40.837662474675085,
                        longitude: -73.92905417829752,
                    },
                    {
                        latitude: 40.80426679966129,
                        longitude: -73.92905417829752,
                    },
                    {
                        latitude: 40.80426679966129,
                        longitude: -73.95687706768513,
                    },
                    {
                        latitude: 40.837662474675085,
                        longitude: -73.95687706768513,
                    },
                ],
                listMarkers: [
                    {
                        coordinate: {
                            latitude: 40.819069558745184,
                            longitude: -73.9385145079471,
                        },
                        type: 'group',
                        countProduct: 3,
                    },
                ],
            },
        ];
    }
}
