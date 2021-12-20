import {CityType, governmentBuildingsType} from "../02-objects/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(el => el.address.street.title !== street)
}

export function getBuildingsWithStaff(buildings: Array<governmentBuildingsType>, staff: number) {
    return buildings.filter(el => el.stuffCount > staff)
}