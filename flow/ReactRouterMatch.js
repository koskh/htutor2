declare type ReactRouterMatch = {
    isExact: boolean,
    params: { [key: string]: string },
    path: string,
    url: string
}