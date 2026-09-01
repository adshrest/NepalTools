```vue
<script setup>
import { computed, ref } from 'vue';
import { useHead } from '@unhead/vue';
import { calculateLoan } from '../utils/loanCalculator.js';

useHead({
	title: 'Nepal Loan EMI Calculator - Calculate Monthly EMI',
	meta: [
		{
			name: 'description',
			content:
				'Calculate your monthly loan EMI, total interest and total repayment for loans in Nepal. Free online Nepal loan and EMI calculator.'
		}
	]
});

const loanAmount = ref('');
const annualInterestRate = ref('');
const loanTermYears = ref('');

const calculation = computed(() => {
	const amount = Number(loanAmount.value);
	const rate = Number(annualInterestRate.value);
	const years = Number(loanTermYears.value);

	if (
		!loanAmount.value ||
		!annualInterestRate.value ||
		!loanTermYears.value ||
		!Number.isFinite(amount) ||
		!Number.isFinite(rate) ||
		!Number.isFinite(years) ||
		amount <= 0 ||
		rate < 0 ||
		years <= 0
	) {
		return null;
	}

	return calculateLoan({
		loanAmount: amount,
		annualInterestRate: rate,
		loanTermYears: years
	});
});

function formatCurrency(value) {
	if (!Number.isFinite(value)) {
		return '';
	}

	return new Intl.NumberFormat('en-NP', {
		style: 'currency',
		currency: 'NPR',
		maximumFractionDigits: 2
	}).format(value);
}

function formatNumber(value) {
	if (!Number.isFinite(value)) {
		return '';
	}

	return new Intl.NumberFormat('en-US', {
		maximumFractionDigits: 2
	}).format(value);
}

function resetCalculator() {
	loanAmount.value = '';
	annualInterestRate.value = '';
	loanTermYears.value = '';
}
</script>

<template>
	<main>
		<section class="hero">
			<div class="container">
				<p class="eyebrow">FREE TOOL FOR NEPAL</p>

				<h1>Nepal Loan EMI Calculator</h1>

				<p class="hero-description">
					Calculate your monthly EMI, total interest and total
					loan repayment instantly.
				</p>
			</div>
		</section>

		<section class="calculator-section">
			<div class="container">
				<div class="calculator-card">
					<div class="input-section">
						<label for="loan-amount">
							Loan amount (NPR)
						</label>

						<input
							id="loan-amount"
							v-model="loanAmount"
							type="number"
							min="0"
							step="any"
							placeholder="e.g. 5000000"
						/>

						<label for="interest-rate">
							Annual interest rate (%)
						</label>

						<input
							id="interest-rate"
							v-model="annualInterestRate"
							type="number"
							min="0"
							step="any"
							placeholder="e.g. 10"
						/>

						<label for="loan-term">
							Loan term (years)
						</label>

						<input
							id="loan-term"
							v-model="loanTermYears"
							type="number"
							min="1"
							step="1"
							placeholder="e.g. 20"
						/>

						<button
							v-if="loanAmount || annualInterestRate || loanTermYears"
							class="reset-button"
							type="button"
							@click="resetCalculator"
						>
							Reset
						</button>
					</div>

					<div class="results-section">
						<div class="results-header">
							<div>
								<p class="results-label">
									LOAN SUMMARY
								</p>

								<h2>Your loan</h2>
							</div>
						</div>

						<div v-if="calculation" class="results-grid">
							<div class="result-card">
								<span class="result-label">
									Monthly EMI
								</span>

								<strong class="result-value">
									{{ formatCurrency(calculation.monthlyEMI) }}
								</strong>
							</div>

							<div class="result-card">
								<span class="result-label">
									Total Interest
								</span>

								<strong class="result-value">
									{{ formatCurrency(calculation.totalInterest) }}
								</strong>
							</div>

							<div class="result-card">
								<span class="result-label">
									Total Payment
								</span>

								<strong class="result-value">
									{{ formatCurrency(calculation.totalPayment) }}
								</strong>
							</div>

							<div class="result-card">
								<span class="result-label">
									Number of Payments
								</span>

								<strong class="result-value">
									{{ formatNumber(calculation.numberOfPayments) }}
								</strong>
							</div>
						</div>

						<div v-else class="empty-state">
							<p>
								Enter your loan details above to calculate
								your EMI.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="information-section">
			<div class="container information-card">
				<h2>How is EMI calculated?</h2>

				<p>
					For a standard reducing-balance loan, the monthly EMI is
					calculated using the loan amount, monthly interest rate
					and total number of monthly payments.
				</p>

				<p class="formula">
					EMI = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)
				</p>

				<p>
					Here, <strong>P</strong> is the principal loan amount,
					<strong>r</strong> is the monthly interest rate, and
					<strong>n</strong> is the total number of monthly
					payments.
				</p>

				<h2>Example</h2>

				<p>
					For a Rs. 5,000,000 loan at 10% annual interest over
					20 years, the estimated monthly EMI is approximately
					Rs. 48,251.
				</p>

				<h2>What does EMI include?</h2>

				<p>
					An EMI generally consists of both principal repayment
					and interest. As the loan is repaid, the portion going
					toward principal generally increases while the interest
					portion decreases.
				</p>

				<h2>Important note</h2>

				<p class="disclaimer">
					This calculator provides an estimate for standard
					reducing-balance loans. Actual repayments may differ
					because of bank-specific interest calculations, fees,
					insurance, taxes, rounding and other loan terms. Always
					confirm the final repayment schedule with your lender.
				</p>

				<div class="related-links">
					<RouterLink
						class="secondary-button"
						to="/land-converter"
					>
						Land Converter
					</RouterLink>

					<RouterLink
						class="secondary-button"
						to="/salary-calculator"
					>
						Salary Calculator
					</RouterLink>

					<RouterLink
						class="secondary-button"
						to="/age-calculator"
					>
						Age Calculator
					</RouterLink>
				</div>
			</div>
		</section>
	</main>
</template>
```
