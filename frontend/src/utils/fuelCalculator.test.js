import { describe, expect, it } from 'vitest';
import { calculateFuelCost } from './fuelCalculator.js';

describe('calculateFuelCost', () => {
	it('calculates fuel required and cost correctly', () => {
		const result = calculateFuelCost(100, 15, 170);

		expect(result.fuelRequired).toBeCloseTo(6.6667, 3);
		expect(result.totalCost).toBeCloseTo(1133.3333, 3);
		expect(result.costPerKm).toBeCloseTo(11.3333, 3);
	});

	it('calculates a round trip when distance is doubled', () => {
		const result = calculateFuelCost(200, 15, 170);

		expect(result.fuelRequired).toBeCloseTo(13.3333, 3);
		expect(result.totalCost).toBeCloseTo(2266.6667, 3);
	});

	it('handles zero distance', () => {
		const result = calculateFuelCost(0, 15, 170);

		expect(result.fuelRequired).toBe(0);
		expect(result.totalCost).toBe(0);
		expect(result.costPerKm).toBe(0);
	});

	it('rejects invalid mileage', () => {
		expect(() => {
			calculateFuelCost(100, 0, 170);
		}).toThrow();
	});

	it('rejects negative distance', () => {
		expect(() => {
			calculateFuelCost(-100, 15, 170);
		}).toThrow();
	});

	it('rejects negative fuel price', () => {
		expect(() => {
			calculateFuelCost(100, 15, -170);
		}).toThrow();
	});
});