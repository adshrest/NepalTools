export function calculateInvoice(items = [], discount = 0, vatRate = 0) {
	const normalizedItems = items.map((item) => {
		const quantity = Number(item.quantity);
		const rate = Number(item.rate);

		const safeQuantity =
			Number.isFinite(quantity) && quantity >= 0 ? quantity : 0;

		const safeRate =
			Number.isFinite(rate) && rate >= 0 ? rate : 0;

		return {
			description: item.description || '',
			quantity: safeQuantity,
			rate: safeRate,
			total: safeQuantity * safeRate
		};
	});

	const subtotal = normalizedItems.reduce(
		(sum, item) => sum + item.total,
		0
	);

	const safeDiscount =
		Number.isFinite(Number(discount)) && Number(discount) >= 0
			? Number(discount)
			: 0;

	const discountAmount = Math.min(safeDiscount, subtotal);

	const taxableAmount = subtotal - discountAmount;

	const safeVatRate =
		Number.isFinite(Number(vatRate)) && Number(vatRate) >= 0
			? Number(vatRate)
			: 0;

	const vatAmount = taxableAmount * (safeVatRate / 100);

	const total = taxableAmount + vatAmount;

	return {
		items: normalizedItems,
		subtotal,
		discount: discountAmount,
		taxableAmount,
		vatRate: safeVatRate,
		vatAmount,
		total
	};
}