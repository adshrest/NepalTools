const NEPAL_VAT_RATE = 0.13;

export function calculateVAT(amount, mode = 'add') {
	if (!Number.isFinite(amount) || amount < 0) {
		throw new Error('Amount must be a non-negative number');
	}

	if (mode === 'add') {
		const vat = amount * NEPAL_VAT_RATE;

		return {
			baseAmount: amount,
			vatAmount: vat,
			totalAmount: amount + vat,
			vatRate: 13
		};
	}

	if (mode === 'remove') {
		const baseAmount = amount / (1 + NEPAL_VAT_RATE);
		const vat = amount - baseAmount;

		return {
			baseAmount,
			vatAmount: vat,
			totalAmount: amount,
			vatRate: 13
		};
	}

	throw new Error('Invalid VAT calculation mode');
}