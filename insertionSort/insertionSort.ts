/**
 * Sorts an array of numbers in ascending order using the insertion sort algorithm.
 * @param arr - The array to be sorted
 * @returns The sorted array
 */
const insertionSort = (arr: number[]): number[] => {
    for (let i = 1; i < arr.length; i++) {
        let j = i
        while (j > 0 && arr[j - 1] > arr[j]) {
            ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            j--
        }
    }
    return arr
}

/**
 * Sorts an array of numbers in decreasing order using the insertion sort algorithm.
 * @param arr - The array to be sorted
 * @returns The sorted array
 */
const insertionSortDecreasing = (arr: number[]): number[] => {
    for (let i = 1; i < arr.length; i++) {
        let j = i
        while (j > 0 && arr[j - 1] < arr[j]) {
            ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            j--
        }
    }
    return arr
}

export { insertionSort, insertionSortDecreasing }
