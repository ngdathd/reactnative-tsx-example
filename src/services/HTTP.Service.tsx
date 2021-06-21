import axios from 'axios';

const API_URL = 'http://192.168.1.84:7072';

const instance = axios.create({
    baseURL: API_URL,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface IResponse<T> {
    data: T;
    code?: number;
    message?: string;
}

const error: IResponse<undefined> = {
    data: undefined,
    code: -9000,
    message: 'Not Service',
};

async function GET<T>(url: string, params: any, header = {}) {
    const response = await instance.get<T>(url, {
        params,
        headers: {
            ...instance.defaults.headers,
            Authorization: 'Bearer ',
            ...header,
        },
    });
    return response.status === 200 ? response.data : error;
}

async function POST<T>(url: string, data: any, header = {}) {
    const response = await instance.post<T>(url, data, {
        headers: {
            ...instance.defaults.headers,
            Authorization: 'Bearer ',
            ...header,
        },
    });
    return response.status === 200 ? response.data : error;
}

async function PUT<T>(url: string, data: any, header = {}) {
    const response = await instance.put<T>(url, data, {
        headers: {
            ...instance.defaults.headers,
            Authorization: 'Bearer ',
            ...header,
        },
    });
    return response.status === 200 ? response.data : error;
}

async function DELETE<T>(url: string, header = {}) {
    const response = await instance.delete<T>(url, {
        headers: {
            ...instance.defaults.headers,
            Authorization: 'Bearer ',
            ...header,
        },
    });
    return response.status === 200 ? response.data : error;
}

export default {GET, POST, PUT, DELETE};
