import { describe, expect, it } from 'vitest';
import { calculateLoan } from './loanCalculator.js';

describe('calculateLoan', () => {
	it('calculates a standard EMI loan', () => {
		const result = calculateLoan({
			loanAmount: 5000000,
			annualInterestRate: 10,
			loanTermYears: 20
		});

		expect(result.numberOfPayments).toBe(240);

		expect(result.monthlyEMI).toBeCloseTo(
			48251.08,
			2
		);

		expect(result.totalPayment).toBeCloseTo(
			11580259.74,
			2
		);

		expect(result.totalInterest).toBeCloseTo(
			6580259.74,
			2
		);
	});

	it('handles zero interest', () => {
		const result = calculateLoan({
			loanAmount: 1200000,
			annualInterestRate: 0,
			loanTermYears: 10
		});

		expect(result.monthlyEMI).toBe(10000);
		expect(result.totalPayment).toBe(1200000);
		expect(result.totalInterest).toBe(0);
	});

	it('rejects invalid loan amounts', () => {
		expect(() =>
			calculateLoan({
				loanAmount: -100,
				annualInterestRate: 10,
				loanTermYears: 10
			})
		).toThrow();
	});

	it('rejects invalid loan terms', () => {
		expect(() =>
			calculateLoan({
				loanAmount: 1000000,
				annualInterestRate: 10,
				loanTermYears: 0
			})
		).toThrow();
	});
});