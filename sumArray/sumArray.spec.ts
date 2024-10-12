import { describe, expect, test } from 'vitest'
import { sumAray } from './sumArray'

describe('Testing Sum Array algorithm', () => {
    test('Summing [5, 2, 4, 6, 1, 3]', () => {
        expect(sumAray([5, 2, 4, 6, 1, 3])).toEqual(21)
    })
})
