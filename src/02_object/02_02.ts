export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType

}

export type HouseType = {
    id?: number
    buildedAt: number
    repaired: false
    address: AddressType
}

export type GovernmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    stuffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}