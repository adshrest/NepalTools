import { describe, expect, it } from 'vitest';
import { calculateInvoice } from './invoiceCalculator.js';

describe('calculateInvoice', () => {
	it('calculates item totals and subtotal', () => {
		const result = calculateInvoice([
			{
				description: 'Website Design',
				quantity: 2,
				rate: 5000
			},
			{
				description: 'Hosting',
				quantity: 1,
				rate: 2000
			}
		]);

		expect(result.subtotal).toBe(12000);
		expect(result.items[0].total).toBe(10000);
		expect(result.items[1].total).toBe(2000);
		expect(result.total).toBe(12000);
	});

	it('calculates discount', () => {
		const result = calculateInvoice(
			[
				{
					description: 'Service',
					quantity: 1,
					rate: 10000
				}
			],
			1000
		);

		expect(result.subtotal).toBe(10000);
		expect(result.discount).toBe(1000);
		expect(result.taxableAmount).toBe(9000);
		expect(result.total).toBe(9000);
	});

	it('calculates VAT after discount', () => {
		const result = calculateInvoice(
			[
				{
					description: 'Product',
					quantity: 2,
					rate: 5000
				}
			],
			1000,
			13
		);

		expect(result.subtotal).toBe(10000);
		expect(result.discount).toBe(1000);
		expect(result.taxableAmount).toBe(9000);
		expect(result.vatAmount).toBe(1170);
		expect(result.total).toBe(10170);
	});

	it('handles empty invoices', () => {
		const result = calculateInvoice();

		expect(result.subtotal).toBe(0);
		expect(result.discount).toBe(0);
		expect(result.vatAmount).toBe(0);
		expect(result.total).toBe(0);
	});
});