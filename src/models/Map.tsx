import {LatLng} from 'react-native-maps';

import {MarkerModel} from './Marker';

export interface MapModel {
    polygon: LatLng[];
    listMarkers: MarkerModel[];
}
