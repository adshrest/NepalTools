import { describe, expect, it } from 'vitest';
import { convertLand } from './landConversion.js';

describe('convertLand', () => {
	it('converts 1 Ropani correctly', () => {
		const result = convertLand(1, 'ropani');

		expect(result.ropani).toBe(1);
		expect(result.aana).toBe(16);
		expect(result.paisa).toBe(64);
		expect(result.daam).toBe(256);
		expect(result.squareFeet).toBe(5476);
	});

	it('converts 2 Ropani correctly', () => {
		const result = convertLand(2, 'ropani');

		expect(result.ropani).toBe(2);
		expect(result.aana).toBe(32);
		expect(result.paisa).toBe(128);
		expect(result.daam).toBe(512);
		expect(result.squareFeet).toBe(10952);
	});
});