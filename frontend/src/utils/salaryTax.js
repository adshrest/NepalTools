const TAX_SLABS = [
	{
		limit: 1000000,
		rate: 0.01
	},
	{
		limit: 1500000,
		rate: 0.10
	},
	{
		limit: 2500000,
		rate: 0.20
	},
	{
		limit: 4000000,
		rate: 0.27
	},
	{
		limit: Infinity,
		rate: 0.29
	}
];

export function calculateIncomeTax(taxableIncome) {
	if (!Number.isFinite(taxableIncome)) {
		return 0;
	}

	if (taxableIncome <= 0) {
		return 0;
	}

	let remainingIncome = taxableIncome;
	let previousLimit = 0;
	let tax = 0;

	for (const slab of TAX_SLABS) {
		const taxableInSlab = Math.min(
			Math.max(remainingIncome, 0),
			slab.limit - previousLimit
		);

		if (taxableInSlab <= 0) {
			break;
		}

		tax += taxableInSlab * slab.rate;
		remainingIncome -= taxableInSlab;
		previousLimit = slab.limit;
	}

	return tax;
}

export function calculateSalary({
	monthlySalary,
	annualBonus = 0,
	otherAnnualIncome = 0
}) {
	if (!Number.isFinite(monthlySalary) || monthlySalary < 0) {
		throw new Error('Monthly salary must be a valid positive number');
	}

	if (!Number.isFinite(annualBonus) || annualBonus < 0) {
		throw new Error('Annual bonus must be a valid positive number');
	}

	if (
		!Number.isFinite(otherAnnualIncome) ||
		otherAnnualIncome < 0
	) {
		throw new Error(
			'Other annual income must be a valid positive number'
		);
	}

	const annualSalary = monthlySalary * 12;

	const grossAnnualIncome =
		annualSalary +
		annualBonus +
		otherAnnualIncome;

	const annualTax = calculateIncomeTax(
		grossAnnualIncome
	);

	const monthlyTax = annualTax / 12;

	const annualTakeHome =
		grossAnnualIncome - annualTax;

	const monthlyTakeHome =
		annualTakeHome / 12;

	return {
		monthlySalary,
		annualSalary,
		annualBonus,
		otherAnnualIncome,
		grossAnnualIncome,
		taxableIncome: grossAnnualIncome,
		annualTax,
		monthlyTax,
		annualTakeHome,
		monthlyTakeHome
	};
}