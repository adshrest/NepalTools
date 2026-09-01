export function calculateLoan({
	loanAmount,
	annualInterestRate,
	loanTermYears
}) {
	if (
		!Number.isFinite(loanAmount) ||
		!Number.isFinite(annualInterestRate) ||
		!Number.isFinite(loanTermYears)
	) {
		throw new Error('Invalid loan input');
	}

	if (loanAmount < 0) {
		throw new Error('Loan amount cannot be negative');
	}

	if (annualInterestRate < 0) {
		throw new Error('Interest rate cannot be negative');
	}

	if (loanTermYears <= 0) {
		throw new Error('Loan term must be greater than zero');
	}

	const numberOfPayments = loanTermYears * 12;
	const monthlyInterestRate = annualInterestRate / 100 / 12;

	let monthlyEMI;

	if (monthlyInterestRate === 0) {
		monthlyEMI = loanAmount / numberOfPayments;
	} else {
		monthlyEMI =
			(loanAmount *
				monthlyInterestRate *
				Math.pow(
					1 + monthlyInterestRate,
					numberOfPayments
				)) /
			(Math.pow(
				1 + monthlyInterestRate,
				numberOfPayments
			) - 1);
	}

	const totalPayment = monthlyEMI * numberOfPayments;
	const totalInterest = totalPayment - loanAmount;

	return {
		loanAmount,
		annualInterestRate,
		loanTermYears,
		numberOfPayments,
		monthlyEMI,
		totalPayment,
		totalInterest
	};
}