import { makeHairStyle, moveUser, upgradeLaptop, UserType, UserWithLaptopType, UserWithBooksType, addNewBooksToUser, updateBook, removeBook } from './10_01';



test('reference type test', () => {
    const user: UserType = {
        name: 'Maks',
        hair: 15,
        address: {
            city: 'Krasnodar'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(7)
    expect(user.hair).toBe(15)
})

test('change type test', () => {
    const user: UserWithLaptopType = {
        name: 'Maks',
        hair: 15,
        address: {
            city: 'Krasnodar',
            house: 14
        },
        laptop: {
            title: 'Samsung'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

   
    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop mackbook', () => {
    const user: UserWithLaptopType = {
        name: 'Maks',
        hair: 15,
        address: {
            city: 'Krasnodar',
            house: 14
        },
        laptop: {
            title: 'Samsung'
        }
    }

    const userCopy = upgradeLaptop(user, 'mackbook')

   
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('mackbook')
})

test('add new books to user', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Maks',
        hair: 15,
        address: {
            city: 'Krasnodar',
            house: 14
        },
        laptop: {
            title: 'Samsung'
        },
        books: ['js', 'css', 'html','react']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest API'])

   
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest API')
})

test('update book ', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Maks',
        hair: 15,
        address: {
            city: 'Krasnodar',
            house: 14
        },
        laptop: {
            title: 'Samsung'
        },
        books: ['js', 'css', 'html', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')

   
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[0]).toBe('ts')
})

test('update book ', () => {
    const user: UserWithLaptopType & UserWithBooksType = {
        name: 'Maks',
        hair: 15,
        address: {
            city: 'Krasnodar',
            house: 14
        },
        laptop: {
            title: 'Samsung'
        },
        books: ['js', 'css', 'html', 'react']
    }

    const userCopy = removeBook(user, 'js')

   
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[0]).toBe('css')
})