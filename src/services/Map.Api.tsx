import {MapModel} from 'models';
import {LatLng} from 'react-native-maps';

import ClientAPI, {IResponse} from './HTTP.Service';

const MAP_URL = '/v2/geospatial';

export interface IMapAPIRequest {
    viewport: LatLng[][];
    zoomlevel: number | 'country' | 'city' | 'district' | 'ward';
    isIntersects: boolean;
}

async function geospatial(data: IMapAPIRequest) {
    const response = await ClientAPI.POST<IResponse<MapModel[]>>(MAP_URL, data);
    return response;
}

export const MapAPI = {
    geospatial,
};
