```vue
<script setup>
import { computed, ref } from 'vue';
import { useHead } from '@unhead/vue';
import { calculateSalary } from '../utils/salaryTax.js';

useHead({
	title: 'Nepal Salary Calculator & Tax Calculator | NepalTools',
	meta: [
		{
			name: 'description',
			content:
				'Calculate your annual salary, estimated income tax and monthly take-home salary in Nepal. Free Nepal salary calculator.'
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
				<p class="eyebrow">NEPAL MONEY CALCULATOR</p>

				<h1>Nepal Salary Calculator</h1>

				<p class="hero-description">
					Estimate your annual income, income tax and monthly
					take-home salary in Nepal.
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
						This calculator provides an estimate. Actual
						tax may differ depending on applicable
						deductions, contributions, rebates and individual
						circumstances.
					</p>
				</div>
			</div>
		</section>

		<section class="information-section">
			<div class="container information-card">
				<h2>How the Nepal salary calculator works</h2>

				<p>
					Enter your monthly salary to estimate your annual
					income, estimated income tax and monthly take-home
					pay. You can also include an annual bonus or other
					annual income.
				</p>

				<h2>Annual salary calculation</h2>

				<p>
					Your basic annual salary is calculated by multiplying
					your monthly salary by 12.
				</p>

				<p class="formula">
					Annual salary = Monthly salary × 12
				</p>

				<h2>Monthly take-home salary</h2>

				<p>
					Your estimated take-home amount is calculated by
					subtracting estimated annual income tax from your
					gross annual income and dividing the result by 12.
				</p>

				<p class="formula">
					Monthly take-home = (Annual income − Estimated tax) ÷ 12
				</p>

				<h2>Salary calculator example</h2>

				<p>
					For example, if your monthly salary is Rs. 50,000,
					your annual salary before other income or deductions
					is Rs. 600,000.
				</p>

				<h2>Frequently asked questions</h2>

				<div class="faq-list">
					<details>
						<summary>
							How do I calculate my annual salary in Nepal?
						</summary>

						<p>
							Multiply your monthly salary by 12. For
							example, a monthly salary of Rs. 50,000
							gives an annual salary of Rs. 600,000 before
							bonus, other income or deductions.
						</p>
					</details>

					<details>
						<summary>
							What is take-home salary?
						</summary>

						<p>
							Take-home salary is the amount you receive
							after applicable taxes and other deductions.
							The exact amount depends on your individual
							employment and deduction details.
						</p>
					</details>

					<details>
						<summary>
							Does this calculator include bonuses?
						</summary>

						<p>
							Yes. You can enter an annual bonus separately
							and include it in the estimated gross annual
							income.
						</p>
					</details>

					<details>
						<summary>
							Is this an official Nepal tax calculator?
						</summary>

						<p>
							No. NepalTools is an independent calculator.
							It provides an estimate and should not replace
							calculation by your employer, tax adviser or
							the Inland Revenue Department.
						</p>
					</details>
				</div>

				<div class="related-tools">
					<h2>More NepalTools</h2>

					<div class="related-links">
						<RouterLink
							class="secondary-button"
							to="/land-converter"
						>
							Land Area Converter
						</RouterLink>

						<RouterLink
							class="secondary-button"
							to="/age-calculator"
						>
							Age Calculator
						</RouterLink>

						<RouterLink
							class="secondary-button"
							to="/ropani-to-square-feet"
						>
							Ropani to Square Feet
						</RouterLink>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
```
