
type LocalCityType = {
    title: string,
    country: string
}
type AdressType = {
    streetTitle: string,
    streetNumber: number,
    city: LocalCityType
}
type TechType = {
    id: number,
    title: string,
    library: Array<string> | null
}
type  StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    height: number,
    adress: AdressType,
    technologies: Array<TechType>

}

const Student: StudentType = {
    id: 1,
    name: 'Maks',
    age: 21,
    isActive: true,
    height: 184,
    adress: {
        streetTitle: 'Grazhdanskay',
        streetNumber: 15,
        city: {
            title: 'Krasnodar',
            country: 'Russia'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML',
            library: null
        },
        {
            id: 2,
            title: 'JS',
            library: null
        },
        {
            id: 3,
            title: 'React',
            library: ['Redux', 'hooks', 'hoc']
        }
    ]

}