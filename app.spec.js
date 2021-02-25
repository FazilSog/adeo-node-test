const { filterBy, count } = require('./app')

const data = [
    {
        name: 'France',
        people: [
            { name: 'François', animals: [{ name: 'XXX' }, { name: 'YYY' }] }
        ]
    },
    {
        name: 'USA',
        people: [
            { name: 'John', animals: [{ name: 'abc' }, { name: 'xyz' }] },
            { name: 'Smith', animals: [{ name: 'abcd' }, { name: 'mno' }] },
        ]
    }
]


describe('filterBy test suite', () => {
    it('should return array with length 1', () => {
        const array = filterBy('XX', data)
        expect(array.length).toBe(1)
    }),

    it('should return empty array', () => {
        const array = filterBy('ZZZ', data)
        expect(array.length).toBe(0)
    }),

    it('combined test', () => {
        const array = filterBy('ab', data)
        expect(array.length).toBe(1)
        expect(array[0].people.length).toBe(2)
    })
})


describe('count test suite', () => {
    it('should the first name country appended to 1', () => {
        const array = count(data)
        expect(array[0].name).toBe('France [1]')
    }),

    it('should first person name in France contain 2', () => {
        const array = count(data)
        expect(array[0].people[0].name).toBe('François [2]')
    })
})
