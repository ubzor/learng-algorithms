/**
 * This function takes an array of numbers and returns the sum of all the numbers.
 * @param arr an array of numbers
 * @returns the sum of all the numbers in the array
 */
const sumAray = (arr: number[]): number => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

export { sumAray }
