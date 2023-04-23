export interface SnackbarMessage {
    show: boolean
    message: string
    type: string
    timeout: number
}

export interface ShowMessageMutation {
    message: string
    timeout?: number
    type?: 'default' | 'error' | 'info' | '#166649'
}

export interface AuthData {
    access_token: string | boolean,
    expires_in: number,
    token_type: string,
    message?: string
}

export interface AuthDataResponse {
    access_token: boolean,
    expires_in: number,
    token_type: string
    message?: string
}

export interface Ajuda {
    chave: string,
    show: boolean,
    titulo: string,
    conteudo: string,
    loading: boolean,
}

export interface MaskMoney {
    decimal: string,
    thousands: string,
    prefix: string,
    suffix: string,
    precision: number,
    masked: boolean,
}
