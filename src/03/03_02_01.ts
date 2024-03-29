export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

export type HousesType = {
    buildeAt: number
    repaired: boolean
    address: AdressType
    id?: number
}

type AdressType = {
    number: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: GoverAddressType
}

type GoverAddressType = {
    street: GoverStreetType
}

type GoverStreetType = {
    title: string
}