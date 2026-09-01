<script setup>
import { computed, ref } from 'vue';
import { useHead } from '@unhead/vue';
import { calculateAge } from '../utils/ageCalculator.js';

useHead({
	title: 'Age Calculator - Calculate Your Exact Age | NepalTools',
	meta: [
		{
			name: 'description',
			content:
				'Calculate your exact age in years, months and days. Free online age calculator from NepalTools.'
		}
	]
});

const dateOfBirth = ref('');
const asOfDate = ref(
	new Date().toISOString().split('T')[0]
);
const error = ref('');

const result = computed(() => {
	if (!dateOfBirth.value) {
		return null;
	}

	try {
		error.value = '';

		return calculateAge(
			dateOfBirth.value,
			asOfDate.value
		);
	} catch (err) {
		error.value = err.message;

		return null;
	}
});

function formatDate(date) {
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(date);
}

function reset() {
	dateOfBirth.value = '';
	error.value = '';
}
</script>

<template>
	<main>
		<section class="hero">
			<div class="container">
				<p class="eyebrow">EVERYDAY TOOL</p>

				<h1>Age Calculator</h1>

				<p class="hero-description">
					Calculate your exact age in years, months and days.
				</p>
			</div>
		</section>

		<section class="calculator-section">
			<div class="container">
				<div class="age-calculator">
					<div class="date-input-group">
						<label for="date-of-birth">
							Date of Birth
						</label>

						<input
							id="date-of-birth"
							v-model="dateOfBirth"
							type="date"
						/>
					</div>

					<div class="date-input-group">
						<label for="as-of-date">
							Calculate Age As Of
						</label>

						<input
							id="as-of-date"
							v-model="asOfDate"
							type="date"
						/>
					</div>

					<p v-if="error" class="calculator-error">
						{{ error }}
					</p>

					<div v-if="result" class="age-result">
						<p class="result-label">Your age is</p>

						<div class="age-main">
							<strong>{{ result.years }}</strong>
							<span>years</span>

							<strong>{{ result.months }}</strong>
							<span>months</span>

							<strong>{{ result.days }}</strong>
							<span>days</span>
						</div>

						<div class="age-details">
							<div>
								<span>Total months</span>
								<strong>{{ result.totalMonths }}</strong>
							</div>

							<div>
								<span>Total weeks</span>
								<strong>{{ result.totalWeeks }}</strong>
							</div>

							<div>
								<span>Total days</span>
								<strong>{{ result.totalDays }}</strong>
							</div>
						</div>

						<div class="next-birthday">
							<span>Next birthday</span>

							<strong>
								{{ formatDate(result.nextBirthday) }}
							</strong>

							<small>
								{{ result.daysUntilNextBirthday }}
								days from the selected date
							</small>
						</div>
					</div>

					<button
						v-if="dateOfBirth"
						class="reset-button"
						type="button"
						@click="reset"
					>
						Reset
					</button>
				</div>
			</div>
		</section>

		<section class="information-section">
			<div class="container information-card">
				<h2>How does the age calculator work?</h2>

				<p>
					Enter your date of birth and the date you want to
					calculate your age as of. The calculator determines
					your age in complete years, months and days.
				</p>

				<h2>What can you calculate?</h2>

				<p>
					The calculator also shows your total number of
					months, weeks and days, along with your next
					birthday.
				</p>
			</div>
		</section>
	</main>
</template>