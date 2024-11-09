/**
 * @module stats
 *
 * @overview
 * stats is a JavaScript package designed to simplify common statistical operations for numeric data.
 *
 * @example
 * import { PI, sum, average, median } from 'stats';
 *
 * const numbers = [1, 2, 4, 8, 16];
 * console.log(sum(numbers)); // Outputs: 31
 * console.log(average(numbers)); // Outputs: 6.2
 * console.log(median(numbers)); // Outputs: 4
 * console.log(PI); // Outputs: 3.14
 *
 * @author
 * Jose Alfredo Sitanggang
 */

/**
 * Approximation of the PI value.
 * Used for basic calculations that do not require high precision.
 * @constant {number}
 */
export const PI = 3.14;

/**
 * Custom error class for handling invalid argument errors.
 * Thrown when an argument does not meet expected requirements.
 * @extends Error
 */
class ErrorInvalidArgument extends Error {
    /**
     * Creates an instance of ErrorInvalidArgument with a custom message.
     * @param {string} message - The error message describing the invalid argument.
     */
    constructor(message) {
        super(message);
        this.name = 'ErrorInvalidArgument';
    }
}

/**
 * Calculates the sum of all elements in a numeric array.
 * Returns 0 if the array is empty.
 * @param {number[]} nums - An array of numbers to be summed.
 * @returns {number} The sum of all elements in the array.
 * @example
 * const numbers = [1, 2, 4, 8, 16];
 * console.log(sum(numbers)); // Outputs: 31
 */
export function sum(nums) {
    return nums.reduce((acc, cur) => acc + cur, 0);
}

/**
 * Calculates the average of all elements in a numeric array.
 * @param {number[]} nums - An array of numbers.
 * @returns {number} - The average value of the elements in the array.
 * @throws {ErrorInvalidArgument} - Throws an error if the array is empty.
 * @example
 * const numbers = [1, 2, 4, 8, 16];
 * console.log(average(numbers)); // Outputs: 6.2
 */
export function average(nums) {
    if (nums.length === 0) {
        throw new ErrorInvalidArgument('Array is empty; cannot compute average.');
    }
    return sum(nums) / nums.length;
}

/**
 * Calculates the median value of a numeric array.
 * The median is the middle number in a sorted list. If the list has an even number of elements,
 * the median is the average of the two middle numbers.
 * @param {number[]} nums - An array of numbers.
 * @returns {number} - The median value.
 * @throws {ErrorInvalidArgument} - Throws an error if the array is empty.
 * @example
 * const numbers = [1, 2, 4, 8, 16];
 * console.log(median(numbers)); // Outputs: 4
 */
export function median(nums) {
    if (nums.length === 0) {
        throw new ErrorInvalidArgument('Array is empty; cannot compute median.');
    }
    const sorted = [...nums].sort((a, b) => a - b);
    const midIndex = Math.floor(sorted.length / 2);
    return isEven(sorted.length) ?
        (sorted[midIndex - 1] + sorted[midIndex]) / 2 :
        sorted[midIndex];
}

/**
 * Determines if a given number is even.
 * @private
 * @param {number} n - The number to check.
 * @returns {boolean} `true` if the number is even, `false` otherwise.
 */
function isEven(n) {
    return n % 2 === 0;
}
