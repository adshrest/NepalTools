import { describe, expect, it } from 'vitest';
import { calculateVAT } from './vatCalculator.js';

describe('calculateVAT', () => {
	it('calculates VAT when adding VAT', () => {
		const result = calculateVAT(1000, 'add');

		expect(result.baseAmount).toBe(1000);
		expect(result.vatAmount).toBe(130);
		expect(result.totalAmount).toBe(1130);
		expect(result.vatRate).toBe(13);
	});

	it('calculates VAT when removing VAT', () => {
		const result = calculateVAT(1130, 'remove');

		expect(result.baseAmount).toBeCloseTo(1000, 6);
		expect(result.vatAmount).toBeCloseTo(130, 6);
		expect(result.totalAmount).toBe(1130);
		expect(result.vatRate).toBe(13);
	});

	it('handles zero amount', () => {
		const result = calculateVAT(0, 'add');

		expect(result.baseAmount).toBe(0);
		expect(result.vatAmount).toBe(0);
		expect(result.totalAmount).toBe(0);
	});

	it('rejects negative amounts', () => {
		expect(() => calculateVAT(-1000, 'add')).toThrow();
	});

	it('rejects invalid amounts', () => {
		expect(() => calculateVAT(NaN, 'add')).toThrow();
	});

	it('rejects invalid VAT mode', () => {
		expect(() => calculateVAT(1000, 'invalid')).toThrow();
	});
});