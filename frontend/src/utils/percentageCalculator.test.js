import { describe, expect, it } from 'vitest';
import {
	percentageOf,
	percentageOfValue,
	percentageChange,
	percentageDifference
} from './percentageCalculator.js';

describe('percentageOf', () => {
	it('calculates a percentage of a value', () => {
		expect(percentageOf(20, 500)).toBe(100);
	});

	it('handles zero', () => {
		expect(percentageOf(10, 0)).toBe(0);
	});
});

describe('percentageOfValue', () => {
	it('calculates what percentage one value is of another', () => {
		expect(percentageOfValue(25, 100)).toBe(25);
	});

	it('calculates partial percentages', () => {
		expect(percentageOfValue(50, 200)).toBe(25);
	});
});

describe('percentageChange', () => {
	it('calculates percentage increase', () => {
		expect(percentageChange(100, 120)).toBe(20);
	});

	it('calculates percentage decrease', () => {
		expect(percentageChange(100, 80)).toBe(-20);
	});

	it('rejects an old value of zero', () => {
		expect(() => percentageChange(0, 100)).toThrow();
	});
});

describe('percentageDifference', () => {
	it('calculates percentage difference', () => {
		expect(percentageDifference(100, 120)).toBeCloseTo(
			18.181818,
			5
		);
	});

	it('returns zero for equal values', () => {
		expect(percentageDifference(100, 100)).toBe(0);
	});
});