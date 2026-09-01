import { describe, expect, it } from 'vitest';
import { convertUsdToNpr } from './currencyConverter.js';

describe('convertUsdToNpr', () => {
	it('converts USD to NPR correctly', () => {
		const result = convertUsdToNpr(100, 140);

		expect(result).toBe(14000);
	});

	it('converts a fractional USD amount', () => {
		const result = convertUsdToNpr(25.5, 140);

		expect(result).toBe(3570);
	});

	it('handles zero USD', () => {
		const result = convertUsdToNpr(0, 140);

		expect(result).toBe(0);
	});

	it('rejects negative USD amounts', () => {
		expect(() => {
			convertUsdToNpr(-100, 140);
		}).toThrow();
	});

	it('rejects zero exchange rate', () => {
		expect(() => {
			convertUsdToNpr(100, 0);
		}).toThrow();
	});

	it('rejects invalid exchange rates', () => {
		expect(() => {
			convertUsdToNpr(100, NaN);
		}).toThrow();
	});
});