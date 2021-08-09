/* eslint-disable camelcase */

interface Open {
    start: string,
    end: string
}
interface Hour {
    is_open_now: boolean
    open: Open
}

interface Location {
    formatted_address: string
}

export interface Coordinates {
    latitude: number,
    longitude: number
}
export interface Category {
    title: string,
    alias: string,
    icon: string,
    color: string
}

export interface Business {
    name: string,
    alias: string,
    photos: Array<string>,
    distance: number,
    hours: Array<Hour>,
    rating: number,
    url: string
    location: Location
    coordinates: Coordinates
    categories: Category[]
}
