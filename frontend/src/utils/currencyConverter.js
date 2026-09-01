export function convertUsdToNpr(amount, exchangeRate) {
	if (!Number.isFinite(amount)) {
		throw new Error('Amount must be a valid number.');
	}

	if (!Number.isFinite(exchangeRate)) {
		throw new Error('Exchange rate must be a valid number.');
	}

	if (amount < 0) {
		throw new Error('Amount cannot be negative.');
	}

	if (exchangeRate <= 0) {
		throw new Error('Exchange rate must be greater than zero.');
	}

	return amount * exchangeRate;
}