

export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = {
    books: Array<string>
}



export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }

    // copy.address = {
    //     ...copy.address,
    //     city: city
    // }
}

export function upgradeLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}


export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newbooks: Array<string>) {
    return {
        ...u,
        books: [
            ...u.books,
            newbooks
        ]
    }
}


export const updateBook = (u: UserWithLaptopType & UserWithBooksType,
    oldBook: string,
    newBook: string) => ({
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
        // if(b === oldBook) {
        //     return newBook
        // }
        // return b
        // })
    })

export const removeBook = (u: UserWithLaptopType & UserWithBooksType,
    bookForDelete: string) => ({
        ...u,
        books: u.books.filter(b => b !== bookForDelete)
    })
