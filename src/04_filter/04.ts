export const ages = [18, 20, 33, 32, 14, 15, 74, 91, 96, 99, 100]

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100]

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]

// < 160
const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}

const cheapCourses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150}
]