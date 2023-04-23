export const URL_BASE = window.location.hostname === 'localhost'
    ? 'http://localhost:8989/api/' : window.location.origin + '/api/'

export const ENV_PRD = 'prod'

export function getUrlStorage(path: string, env: string | null = null): string {
    path = path.startsWith('/') ? path.substring(1) : path
    const host = window.location.hostname
    const envs = [
        {env: 'dev', url: 'localhost', urlStorage: 'http://localhost:8989'},
    ]

    let filterEnv = envs.find((e) => e.env === env)
    if (!filterEnv) {
        filterEnv = envs.find((e) => e.url === host)
    }
    return filterEnv ? `${filterEnv.urlStorage}/${path}` : `${envs[0].urlStorage}/${path}`
}
