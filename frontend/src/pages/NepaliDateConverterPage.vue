```vue
<script setup>
import { computed, ref } from 'vue';
import { useHead } from '@unhead/vue';
import { adToBs, bsToAd } from '../utils/nepaliDate.js';

useHead({
	title: 'Nepali Date Converter - BS to AD & AD to BS',
	meta: [
		{
			name: 'description',
			content:
				'Convert Nepali Bikram Sambat dates to English dates and English dates to Nepali dates with this free online date converter.'
		}
	]
});

const direction = ref('bs-to-ad');

const year = ref('');
const month = ref('');
const day = ref('');

const result = ref(null);
const error = ref('');

const nepaliMonthNames = [
	'Baisakh',
	'Jestha',
	'Ashadh',
	'Shrawan',
	'Bhadra',
	'Ashwin',
	'Kartik',
	'Mangsir',
	'Poush',
	'Magh',
	'Falgun',
	'Chaitra'
];

const englishMonthNames = [ 
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
];

const currentMonthNames = computed(() => { 
    return direction.value === 'bs-to-ad' 
    ? nepaliMonthNames 
    : englishMonthNames; 
});

const inputLabel = computed(() => {
	return direction.value === 'bs-to-ad'
		? 'Nepali Date (BS)'
		: 'English Date (AD)';
});

const resultLabel = computed(() => {
	return direction.value === 'bs-to-ad'
		? 'English Date (AD)'
		: 'Nepali Date (BS)';
});

const resultDate = computed(() => {
	if (!result.value) {
		return '';
	}

	return `${result.value.year}-${String(result.value.month).padStart(
		2,
		'0'
	)}-${String(result.value.day).padStart(2, '0')}`;
});

function convert() {
	error.value = '';
	result.value = null;

	const numericYear = Number(year.value);
	const numericMonth = Number(month.value);
	const numericDay = Number(day.value);

	if (
		!Number.isInteger(numericYear) ||
		!Number.isInteger(numericMonth) ||
		!Number.isInteger(numericDay)
	) {
		error.value = 'Please enter a valid year, month and day.';
		return;
	}

	if (numericMonth < 1 || numericMonth > 12) {
		error.value = 'Month must be between 1 and 12.';
		return;
	}

	if (numericDay < 1 || numericDay > 32) {
		error.value = 'Please enter a valid day.';
		return;
	}

	try {
		if (direction.value === 'bs-to-ad') {
			result.value = bsToAd(
				numericYear,
				numericMonth,
				numericDay
			);
		} else {
			result.value = adToBs(
				numericYear,
				numericMonth,
				numericDay
			);
		}
	} catch (conversionError) {
		console.error(conversionError);
		error.value =
			'Unable to convert this date. Please check the date and try again.';
	}
}

function reset() {
	year.value = '';
	month.value = '';
	day.value = '';
	result.value = null;
	error.value = '';
}

function swapDirection() {
	direction.value =
		direction.value === 'bs-to-ad' ? 'ad-to-bs' : 'bs-to-ad';

	reset();
}
</script>

<template>
	<main>
		<section class="hero">
			<div class="container">
				<p class="eyebrow">FREE DATE TOOL FOR NEPAL</p>

				<h1>Nepali Date Converter</h1>

				<p class="hero-description">
					Convert Bikram Sambat (BS) dates to English (AD) dates
					and English dates back to Nepali dates.
				</p>
			</div>
		</section>

		<section class="calculator-section">
			<div class="container">
				<div class="calculator-card">
					<div class="input-section">
						<label>Conversion</label>

						<select v-model="direction">
							<option value="bs-to-ad">
								Nepali BS → English AD
							</option>

							<option value="ad-to-bs">
								English AD → Nepali BS
							</option>
						</select>

						<label>{{ inputLabel }}</label>

						<div class="date-inputs">
							<input
								v-model="year"
								type="number"
								placeholder="Year"
								min="1"
							/>

							<select v-model="month">
								<option value="" disabled>
									Month
								</option>

								<option
									v-for="(monthName, index) in currentMonthNames"
									:key="monthName"
									:value="index + 1"
								>
									{{ index + 1 }} - {{ monthName }}
								</option>
							</select>

							<input
								v-model="day"
								type="number"
								placeholder="Day"
								min="1"
								max="32"
							/>
						</div>

						<div class="button-row">
							<button
								class="primary-button"
								type="button"
								@click="convert"
							>
								Convert Date
							</button>

							<button
								class="reset-button"
								type="button"
								@click="swapDirection"
							>
								Swap
							</button>

							<button
								v-if="year || month || day"
								class="reset-button"
								type="button"
								@click="reset"
							>
								Reset
							</button>
						</div>

						<p v-if="error" class="error-message">
							{{ error }}
						</p>
					</div>

					<div class="results-section">
						<div class="results-header">
							<div>
								<p class="results-label">CONVERTED DATE</p>
								<h2>{{ resultLabel }}</h2>
							</div>
						</div>

						<div v-if="result" class="result-card">
							<span class="result-label">
								{{ resultLabel }}
							</span>

							<strong class="result-value">
								{{ resultDate }}
							</strong>

                            <span class="result-label"> 
                                {{ result.dayOfWeek }}
                            </span>
						</div>

						<div v-else class="empty-state">
							<p>
								Enter a date above and click Convert Date.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="information-section">
			<div class="container information-card">
				<h2>BS and AD date conversion</h2>

				<p>
					Nepal commonly uses the Bikram Sambat (BS) calendar,
					while the Gregorian calendar is commonly used
					internationally as AD.
				</p>

				<p>
					This tool makes it easy to convert dates between the
					two calendar systems.
				</p>

				<p class="disclaimer">
					For official documents, government records and legal
					purposes, verify dates against the relevant official
					document or authority.
				</p>
			</div>
		</section>
	</main>
</template>
```
