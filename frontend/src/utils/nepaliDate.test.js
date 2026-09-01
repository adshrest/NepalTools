import { describe, expect, it } from 'vitest';
import { adToBs, bsToAd } from './nepaliDate.js';

describe('Nepali date conversion', () => {
	it('converts BS 2083-01-01 to AD 2026-04-14', () => {
		const result = bsToAd(2083, 1, 1);

		expect(result.year).toBe(2026);
		expect(result.month).toBe(4);
		expect(result.day).toBe(14);
        expect(result.dayOfWeek).toBe('Tuesday');
	});

	it('converts AD 2026-04-14 to BS 2083-01-01', () => {
		const result = adToBs(2026, 4, 14);

		expect(result.year).toBe(2083);
		expect(result.month).toBe(1);
		expect(result.day).toBe(1);
        expect(result.dayOfWeek).toBe('मंगलबार');
	});

	it('round trips a BS date', () => {
		const original = {
			year: 2083,
			month: 5,
			day: 15
		};

		const ad = bsToAd(
			original.year,
			original.month,
			original.day
		);

		const bs = adToBs(
			ad.year,
			ad.month,
			ad.day
		);

		expect(bs.year).toBe(original.year); 
        expect(bs.month).toBe(original.month); 
        expect(bs.day).toBe(original.day); 
        expect(bs.dayOfWeek).toBe('सोमबार');
	});
});