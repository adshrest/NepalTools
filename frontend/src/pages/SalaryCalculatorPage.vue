<script setup>
import { computed, ref } from 'vue';
import { useHead } from '@unhead/vue';
import { calculateSalary } from '../utils/salaryTax.js';

useHead({
	title: 'Nepal Salary Calculator - Take Home Salary | NepalTools',
	meta: [
		{
			name: 'description',
			content:
				'Calculate annual salary, estimated income tax and monthly take-home salary in Nepal.'
		}
	]
});

const monthlySalary = ref('');
const annualBonus = ref('');
const otherAnnualIncome = ref('');

const result = computed(() => {
	const salary = Number(monthlySalary.value);

	if (!monthlySalary.value || !Number.isFinite(salary)) {
		return null;
	}

	try {
		return calculateSalary({
			monthlySalary: salary,
			annualBonus: Number(annualBonus.value) || 0,
			otherAnnualIncome:
				Number(otherAnnualIncome.value) || 0
		});
	} catch {
		return null;
	}
});

function formatCurrency(value) {
	return new Intl.NumberFormat('en-NP', {
		style: 'currency',
		currency: 'NPR',
		maximumFractionDigits: 0
	}).format(value);
}

function reset() {
	monthlySalary.value = '';
	annualBonus.value = '';
	otherAnnualIncome.value = '';
}
</script>

<template>
	<main>
		<section class="hero">
			<div class="container">
				<p class="eyebrow">MONEY TOOL</p>

				<h1>Nepal Salary Calculator</h1>

				<p class="hero-description">
					Calculate your annual salary, estimated income tax
					and monthly take-home salary.
				</p>
			</div>
		</section>

		<section class="calculator-section">
			<div class="container">
				<div class="salary-calculator">
					<div class="salary-input-group">
						<label for="monthly-salary">
							Monthly Salary
						</label>

						<div class="input-with-prefix">
							<span>Rs.</span>

							<input
								id="monthly-salary"
								v-model="monthlySalary"
								type="number"
								min="0"
								step="1000"
								placeholder="0"
							/>
						</div>
					</div>

					<div class="salary-input-group">
						<label for="annual-bonus">
							Annual Bonus
							<span>(optional)</span>
						</label>

						<div class="input-with-prefix">
							<span>Rs.</span>

							<input
								id="annual-bonus"
								v-model="annualBonus"
								type="number"
								min="0"
								step="1000"
								placeholder="0"
							/>
						</div>
					</div>

					<div class="salary-input-group">
						<label for="other-income">
							Other Annual Income
							<span>(optional)</span>
						</label>

						<div class="input-with-prefix">
							<span>Rs.</span>

							<input
								id="other-income"
								v-model="otherAnnualIncome"
								type="number"
								min="0"
								step="1000"
								placeholder="0"
							/>
						</div>
					</div>

					<div v-if="result" class="salary-result">
						<p class="result-label">
							Estimated Monthly Take-Home
						</p>

						<strong class="take-home">
							{{ formatCurrency(result.monthlyTakeHome) }}
						</strong>

						<div class="salary-summary">
							<div>
								<span>Annual Salary</span>
								<strong>
									{{ formatCurrency(result.annualSalary) }}
								</strong>
							</div>

							<div>
								<span>Gross Annual Income</span>
								<strong>
									{{
										formatCurrency(
											result.grossAnnualIncome
										)
									}}
								</strong>
							</div>

							<div>
								<span>Estimated Annual Tax</span>
								<strong>
									{{ formatCurrency(result.annualTax) }}
								</strong>
							</div>

							<div>
								<span>Estimated Monthly Tax</span>
								<strong>
									{{ formatCurrency(result.monthlyTax) }}
								</strong>
							</div>
						</div>
					</div>

					<button
						v-if="monthlySalary"
						class="reset-button"
						type="button"
						@click="reset"
					>
						Reset
					</button>

					<p class="calculator-note">
						This is an estimate based on the tax rules
						implemented by NepalTools. Actual tax may differ
						depending on deductions, SSF, EPF, CIT, rebates,
						and individual circumstances.
					</p>
				</div>
			</div>
		</section>

		<section class="information-section">
			<div class="container information-card">
				<h2>How to use the salary calculator</h2>

				<p>
					Enter your monthly salary. You can also enter an
					annual bonus or other annual income to estimate your
					total annual income and take-home salary.
				</p>

				<h2>Important</h2>

				<p>
					The result is an estimate and should not be treated
					as an official tax calculation. Your actual tax can
					change based on applicable deductions, contributions,
					rebates and other circumstances.
				</p>
			</div>
		</section>
	</main>
</template>