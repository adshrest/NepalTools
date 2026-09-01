import { describe, expect, it } from 'vitest';
import {
	calculateIncomeTax,
	calculateSalary
} from './salaryTax.js';

describe('calculateIncomeTax', () => {
	it('calculates the first 1% slab', () => {
		expect(calculateIncomeTax(500000)).toBe(5000);
	});

	it('calculates Rs. 10 lakh correctly', () => {
		expect(calculateIncomeTax(1000000)).toBe(10000);
	});

	it('calculates across the 10% slab', () => {
		expect(calculateIncomeTax(1500000)).toBe(60000);
	});

	it('calculates across the 20% slab', () => {
		expect(calculateIncomeTax(2500000)).toBe(260000);
	});

	it('calculates across the 27% slab', () => {
		expect(calculateIncomeTax(4000000)).toBe(665000);
	});

	it('calculates the 29% top slab', () => {
		expect(calculateIncomeTax(5000000)).toBe(955000);
	});

	it('returns zero for zero income', () => {
		expect(calculateIncomeTax(0)).toBe(0);
	});
});

describe('calculateSalary', () => {
	it('calculates annual salary from monthly salary', () => {
		const result = calculateSalary({
			monthlySalary: 50000
		});

		expect(result.annualSalary).toBe(600000);
		expect(result.grossAnnualIncome).toBe(600000);
	});

	it('includes annual bonus', () => {
		const result = calculateSalary({
			monthlySalary: 50000,
			annualBonus: 100000
		});

		expect(result.grossAnnualIncome).toBe(700000);
	});

	it('calculates monthly take-home', () => {
		const result = calculateSalary({
			monthlySalary: 50000
		});

		expect(result.monthlyTakeHome).toBe(
			result.annualTakeHome / 12
		);
	});
});