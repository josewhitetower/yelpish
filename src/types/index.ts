/* eslint-disable camelcase */

interface Hour {
    is_open_now: boolean
}

export interface Business {
    id: string,
    name: string,
    alias: string,
    photos: Array<string>,
    distance: number,
    hours: Array<Hour>,
    rating: number,
    url: string
}
