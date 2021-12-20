import { addSkill, doesStudentLiveIn, inactiveStudent } from './03';
import { StudentType } from "./02";

let student: StudentType;
beforeEach(() => {
    student = {
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
})

test('new tech skill should be added to stunet', () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, 'CSS');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('CSS');
    expect(student.technologies[3].id).toBeDefined();

})

test('should be inactive', () => {
    expect(student.isActive).toBe(true)

    inactiveStudent(student)

    expect(student.isActive).toBe(false)
})

test('student lives in Russia?', () => {

    let result1 = doesStudentLiveIn(student, 'Russia')
    let result2 = doesStudentLiveIn(student, 'Belarus')

    expect(result1).toBe(true)
    expect(result2).toBe(false)
})
