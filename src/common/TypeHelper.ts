export interface DefaultHeaderTable {
    text: string,
    value: string,
    align?: 'start' | 'center' | 'end' | ' d-none',
    sortable?: boolean
    filterable?: boolean
    divider?: boolean
    class?: string | string[]
    width?: string | number
    filter?: (value: any, search: string, item: any) => boolean
    sort?: (a: any, b: any) => number
}

export interface DefaultSelect {
    label: string,
    value: any
}

export interface ResponseRequest {
    data: any
}

export interface ResponseHttpRequest<T> {
    data: T
}

export interface Credential {
    email: string,
    password: string,
}

export interface Paginate<T> {
    items: T[],
    totalItems: number,
    perPage: number,
    currentPage: number,
    lastPage: number,
}

export interface ListGroup<T = any> {
    group: string | number,
    itens: T[],
}