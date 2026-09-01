import { describe, expect, it } from 'vitest';
import { calculateAge } from './ageCalculator.js';

describe('calculateAge', () => {
	it('calculates a basic age correctly', () => {
		const result = calculateAge(
			'2000-01-01',
			'2026-01-01'
		);

		expect(result.years).toBe(26);
		expect(result.months).toBe(0);
		expect(result.days).toBe(0);
	});

	it('calculates years, months and days', () => {
		const result = calculateAge(
			'2000-01-15',
			'2026-03-20'
		);

		expect(result.years).toBe(26);
		expect(result.months).toBe(2);
		expect(result.days).toBe(5);
	});

	it('calculates total months', () => {
		const result = calculateAge(
			'2020-01-01',
			'2022-01-01'
		);

		expect(result.totalMonths).toBe(24);
	});

	it('calculates total weeks', () => {
		const result = calculateAge(
			'2020-01-01',
			'2020-01-15'
		);

		expect(result.totalWeeks).toBe(2);
	});

	it('calculates total days', () => {
		const result = calculateAge(
			'2020-01-01',
			'2020-01-11'
		);

		expect(result.totalDays).toBe(10);
	});

	it('rejects a future date of birth', () => {
		expect(() =>
			calculateAge(
				'2030-01-01',
				'2026-01-01'
			)
		).toThrow('Date of birth cannot be in the future');
	});
});