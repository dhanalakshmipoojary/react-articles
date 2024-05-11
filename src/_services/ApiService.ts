const API_URL: string | undefined = process.env.REACT_APP_API_URL;

interface RequestOptions {
    method: string;
    body?: string;
}

const ApiServices = {
    get: function (url: string): Promise<any> {
        const requestOptions: RequestOptions = {
            method: 'GET',
        };

        return this.fetch(url, requestOptions);
    },
    fetch: function (url: string, requestOptions: RequestOptions): Promise<any> {
        return fetch(API_URL + url, requestOptions).then(this.handleResponse);
    },
    handleResponse: function (response: Response): Promise<any> {
        return response.text().then((text: string) => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        });
    },
}

export default ApiServices;
