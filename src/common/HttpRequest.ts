import axios, {AxiosInstance, AxiosPromise, CancelTokenSource} from 'axios'
import {URL_BASE} from '@/common/Ambiente'
import {CommonModule} from '@/store/common'

const CancelToken = axios.CancelToken

export interface HttpRequestPromise<T = any> extends AxiosPromise<T> {
    cancel(): void
}

class HttpRequest {
    private axios: AxiosInstance
    private defaultErrorHandler: (error: any, context: any) => any

    constructor() {
        this.axios = axios.create()
        this.defaultErrorHandler = (error) => {
            console.error(error);
        };
    }

    public get<R = any>(url: string, params = {}, options = {}) {
        return this.request<R>('get', url, params, options)
    }

    public post<R = any>(url: string, params = {}, options = {}) {
        return this.request<R>('post', url, params, options)
    }

    public put<R = any>(url: string, params = {}, options = {}) {
        return this.request<R>('put', url, params, options)
    }

    public delete<R = any>(url: string, params = {}, options = {}) {
        return this.request<R>('delete', url, params, options)
    }

    public request<R>(method: 'get' | 'post' | 'put' | 'delete', url: string, data: any = {}, options: any = {}): HttpRequestPromise<R> {
        url = URL_BASE + url
        options = this._defaultRequestOptions(options)

        if (CommonModule.auth !== null) {
            options.headers.Authorization = 'Bearer ' + CommonModule.auth.access_token
        }

        let params = {}

        if (method === 'get') {
            data = {}
            params = data
        }

        const source = CancelToken.source()

        const request = this.axios({
            method,
            url,
            data,
            params,
            responseType: options.responseType,
            headers: options.headers,
            cancelToken: source.token,
        })

        return this._configureRequest(request, options, source)
    }

    public setDefaultErrorHandler(handler: (error: any) => void) {
        this.defaultErrorHandler = handler
    }

    private _defaultRequestOptions(options: any) {
        return {
            ...{
                defaultErrorHandler: true,
                headers: {},
                responseType: 'json',
            }, ...options,
        }
    }

    private _configureRequest<R>(request: any, options: any, source: CancelTokenSource): HttpRequestPromise<R> {

        if (options.defaultErrorHandler) {
            request.catch((error: any) => {
                if (options.defaultErrorHandler) {
                    this._callDefaultErrorHandler(error, {request, options})
                }

                throw error
            })
        }

        request.cancel = (msg = 'Operação cancelada pelo usuário') => {
            source.cancel(msg)
        }

        return request
    }

    private _callDefaultErrorHandler(error: any, context: any = {}) {
        this.defaultErrorHandler(error, context)
    }

}

const http = new HttpRequest()
export default http
