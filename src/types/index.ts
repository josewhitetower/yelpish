/* eslint-disable camelcase */

interface Open {
    start: string,
    end: string
}
interface Hour {
    is_open_now: boolean
    open: Open
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
