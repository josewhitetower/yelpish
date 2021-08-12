/* eslint-disable camelcase */

interface IOpen {
    start: string,
    end: string
}
interface IHour {
    is_open_now: boolean
    open: IOpen
}

interface ILocation {
    formatted_address: string
}

export interface ICoordinates {
    latitude: number,
    longitude: number
}
export interface ICategory {
    alias: string,
    icon: string,
    color: string,
    title: string
}

export interface IBusiness {
    name: string,
    alias: string,
    photos: Array<string>,
    distance: number,
    hours: Array<IHour>,
    rating: number,
    url: string
    location: ILocation
    coordinates: ICoordinates
    categories: ICategory[]
}
