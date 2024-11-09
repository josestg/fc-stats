import {expect, test} from '@jest/globals'
import {average, median, sum} from "./index.js";

test('median([]) thrown an error', () => {
    expect(() => median([])).toThrow(/^Array is empty; cannot compute median.$/)
})

test('median([1]) = 1', () => {
    expect(median([1])).toBe(1)
})

test('median([1, 2]) = ~1.5', () => {
    expect(median([1, 2])).toBeCloseTo(1.5)
})

test('average([1]) = 1', () => {
    expect(average([1])).toBe(1)
})

test('average([2, 2, 2]) = 2', () => {
    expect(average([2, 2, 2])).toBe(2)
})

test('average([1, 2, 4, 8, 16]) = 6.2', () => {
    expect(average([1, 2, 4, 8, 16])).toBe(6.2)
})

test('average([1, 2, 4]) = ~2.333', () => {
    expect(average([1, 2, 4])).toBeCloseTo(2.333)
})

test('average([])', () => {
    expect(() => average([]))
        .toThrow(/^Array is empty; cannot compute average.$/)
})


test('sum([1, 2, 4, 8, 16]) = 31',  () => {
    expect(sum([1, 2, 4, 8, 16])).toBe(31)
});

test('sum([]) = 0',  () => {
    expect(sum([])).toBe(0)
});

test('sum([-1]) = -1',  () => {
    expect(sum([-1])).toBe(-1)
});

test('sum([-1, -2]) = -3',  () => {
    expect(sum([-1, -2])).toBe(-3)
});

