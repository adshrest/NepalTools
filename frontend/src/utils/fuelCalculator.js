export function calculateFuelCost(distance, mileage, fuelPrice) {
	if (
		!Number.isFinite(distance) ||
		!Number.isFinite(mileage) ||
		!Number.isFinite(fuelPrice)
	) {
		throw new Error('All values must be valid numbers.');
	}

	if (distance < 0) {
		throw new Error('Distance cannot be negative.');
	}

	if (mileage <= 0) {
		throw new Error('Mileage must be greater than zero.');
	}

	if (fuelPrice < 0) {
		throw new Error('Fuel price cannot be negative.');
	}

	const fuelRequired = distance / mileage;
	const totalCost = fuelRequired * fuelPrice;
    const costPerKm = distance === 0 ? 0 : totalCost / distance;
	
    return {
		fuelRequired,
		totalCost,
		costPerKm
	};
}