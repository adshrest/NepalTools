const SQ_FEET_PER_UNIT = {
	ropani: 5476,
	aana: 342.25,
	paisa: 85.5625,
	daam: 21.390625,
	squareFeet: 1,
	squareMeter: 0.09290304,
	acre: 43560,
	hectare: 107639.104167
};

export function toSquareFeet(value, unit) {
	if (!Number.isFinite(value)) {
		return 0;
	}

	if (!(unit in SQ_FEET_PER_UNIT)) {
		throw new Error(`Unsupported unit: ${unit}`);
	}

	if (unit === 'squareMeter') {
		return value / SQ_FEET_PER_UNIT.squareMeter;
	}

	return value * SQ_FEET_PER_UNIT[unit];
}

export function fromSquareFeet(squareFeet, unit) {
	if (!Number.isFinite(squareFeet)) {
		return 0;
	}

	if (!(unit in SQ_FEET_PER_UNIT)) {
		throw new Error(`Unsupported unit: ${unit}`);
	}

	if (unit === 'squareMeter') {
		return squareFeet * SQ_FEET_PER_UNIT.squareMeter;
	}

	return squareFeet / SQ_FEET_PER_UNIT[unit];
}

export function convertLand(value, fromUnit) {
	const squareFeet = toSquareFeet(value, fromUnit);

	return {
		ropani: fromSquareFeet(squareFeet, 'ropani'),
		aana: fromSquareFeet(squareFeet, 'aana'),
		paisa: fromSquareFeet(squareFeet, 'paisa'),
		daam: fromSquareFeet(squareFeet, 'daam'),
		squareFeet,
		squareMeter: fromSquareFeet(squareFeet, 'squareMeter'),
		acre: fromSquareFeet(squareFeet, 'acre'),
		hectare: fromSquareFeet(squareFeet, 'hectare')
	};
}