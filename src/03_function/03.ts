import { StudentType } from "./02";
import { CityType, GovernmentBuildingsType, HouseType } from "../02_object/02_02";

export const addSkill = (s: StudentType, skill: string) => {
    s.technologies.push({
        id: new Date().getTime(),
        library: null,
        title: skill
    })
}

export const inactiveStudent = (s: StudentType) => {
    s.isActive = false
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.adress.city.country === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budgetCount: number) => {
    return (
        building.budget += budgetCount)
}

export const repairHouseCity = (houses: HouseType ) => {
       houses.repaired = true
}

export const toFireStaff = (staff: GovernmentBuildingsType, staffCountToFire: number) => {
    staff.staffCount -= staffCountToFire
}
export const toHireStaff = (staff: GovernmentBuildingsType, staffCountToHire: number) => {
    staff.staffCount += staffCountToHire
}

export function createMessage(city: CityType) {
return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`
}
