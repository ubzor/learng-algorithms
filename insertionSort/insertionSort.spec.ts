import { describe, expect, test } from 'vitest'
import { insertionSort, insertionSortDecreasing } from './insertionSort'

describe('Testing Insertion Sort algorithm', () => {
    test('Sorting [5, 2, 4, 6, 1, 3]', () => {
        expect(insertionSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6])
    })

    test('Sorting [31, 41, 59, 26, 41, 58]', () => {
        expect(insertionSort([31, 41, 59, 26, 41, 58])).toEqual([26, 31, 41, 41, 58, 59])
    })

    test('Sorting [5, 2, 4, 6, 1, 3] in decreasing order', () => {
        expect(insertionSortDecreasing([5, 2, 4, 6, 1, 3])).toEqual([6, 5, 4, 3, 2, 1])
    })

    test('Sorting [31, 41, 59, 26, 41, 58] in decreasing order', () => {
        expect(insertionSortDecreasing([31, 41, 59, 26, 41, 58])).toEqual([59, 58, 41, 41, 31, 26])
    })
})
