import {MarkerProps} from 'react-native-maps';

export interface MarkerModel extends MarkerProps {
    type: 'group' | 'item';
    countProduct: number;
}
