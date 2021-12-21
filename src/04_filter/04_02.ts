import {CityType, GovernmentBuildingsType, } from './../02_object/02_02';

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(el => el.address.street.title !== street)
}

export function getBuildingsWithStaff(buildings: Array<GovernmentBuildingsType>, staff: number) {
    return buildings.filter(el => el.stuffCount > staff)
}