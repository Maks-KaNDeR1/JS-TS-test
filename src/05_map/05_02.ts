import { GovernmentBuildingsType, HouseType  } from './../02_object/02_02';

export const getStreetsTitlesOfGovBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}

export function createMessages(houses: Array<HouseType>) {
    return houses.map(el =>
        `Hello guys from ${el.address.street.title}`
    )
}