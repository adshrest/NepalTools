export function percentageOf(percent, value) {
	if (!Number.isFinite(percent) || !Number.isFinite(value)) {
		throw new Error('Values must be numbers');
	}

	return (percent / 100) * value;
}

export function percentageOfValue(value, total) {
	if (!Number.isFinite(value) || !Number.isFinite(total) || total === 0) {
		throw new Error('Value and total must be valid numbers');
	}

	return (value / total) * 100;
}

export function percentageChange(oldValue, newValue) {
	if (
		!Number.isFinite(oldValue) ||
		!Number.isFinite(newValue) ||
		oldValue === 0
	) {
		throw new Error('Values must be valid and old value cannot be zero');
	}

	return ((newValue - oldValue) / oldValue) * 100;
}

export function percentageDifference(firstValue, secondValue) {
	if (
		!Number.isFinite(firstValue) ||
		!Number.isFinite(secondValue) ||
		(firstValue + secondValue) === 0
	) {
		throw new Error('Values must be valid');
	}

	return (
		(Math.abs(firstValue - secondValue) /
			((firstValue + secondValue) / 2)) *
		100
	);
}