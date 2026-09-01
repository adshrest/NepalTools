```vue
<script setup>
import { computed, ref } from 'vue';
import { useHead } from '@unhead/vue';
import { convertUsdToNpr } from '../utils/currencyConverter.js';

const DEFAULT_EXCHANGE_RATE = 152.036;

useHead({
	title: 'USD to NPR Converter - US Dollar to Nepali Rupee',
	meta: [
		{
			name: 'description',
			content:
				'Convert US Dollars to Nepali Rupees instantly. Free USD to NPR converter with an editable exchange rate.'
		}
	],

	link: [
		{
			rel: 'canonical',
			href: 'https://nepaltools.netlify.app/usd-to-npr'
		}
	],

	script: [
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'WebApplication',
				name: 'USD to NPR Converter',
				url: 'https://nepaltools.netlify.app/usd-to-npr',
				description:
					'Convert US Dollars to Nepali Rupees using a selected exchange rate.',
				applicationCategory: 'FinanceApplication',
				operatingSystem: 'Any',
				isAccessibleForFree: true,
				offers: {
					'@type': 'Offer',
					price: '0',
					priceCurrency: 'NPR'
				},
				publisher: {
					'@id': 'https://nepaltools.netlify.app/#organization'
				}
			})
		}
	]
});

const usdAmount = ref('');
const exchangeRate = ref(String(DEFAULT_EXCHANGE_RATE));

const nprAmount = computed(() => {
	const amount = Number(usdAmount.value);
	const rate = Number(exchangeRate.value);

	if (
		!usdAmount.value ||
		!exchangeRate.value ||
		!Number.isFinite(amount) ||
		!Number.isFinite(rate) ||
		amount < 0 ||
		rate <= 0
	) {
		return null;
	}

	return convertUsdToNpr(amount, rate);
});

function formatNumber(number) {
	if (!Number.isFinite(number)) {
		return '';
	}

	return new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(number);
}

function resetCalculator() {
	usdAmount.value = '';
	exchangeRate.value = String(DEFAULT_EXCHANGE_RATE);
}
</script>

<template>
	<main>
		<section class="hero">
			<div class="container">
				<p class="eyebrow">FREE CURRENCY TOOL</p>

				<h1>USD to NPR Converter</h1>

				<p class="hero-description">
					Convert US Dollars to Nepali Rupees using the exchange
					rate you choose.
				</p>
			</div>
		</section>

		<section class="calculator-section">
			<div class="container">
				<div class="calculator-card">
					<div class="input-section">
						<label for="usd-amount">
							US Dollar (USD)
						</label>

						<input
							id="usd-amount"
							v-model="usdAmount"
							type="number"
							min="0"
							step="any"
							placeholder="Enter USD amount"
						/>

						<label for="exchange-rate">
							Exchange rate (NPR per USD)
						</label>

						<input
							id="exchange-rate"
							v-model="exchangeRate"
							type="number"
							min="0.01"
							step="any"
							placeholder="e.g. 152.036"
						/>

						<button
							v-if="usdAmount"
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
									CONVERSION RESULT
								</p>

								<h2>US Dollar to Nepali Rupee</h2>
							</div>
						</div>

						<div
							v-if="nprAmount !== null"
							class="results-grid"
						>
							<div class="result-card">
								<span class="result-label">
									USD
								</span>

								<strong class="result-value">
									$ {{ formatNumber(Number(usdAmount)) }}
								</strong>
							</div>

							<div class="result-card">
								<span class="result-label">
									Exchange Rate
								</span>

								<strong class="result-value">
									{{ formatNumber(Number(exchangeRate), 3) }}
								</strong>
							</div>

							<div class="result-card">
								<span class="result-label">
									Nepali Rupees
								</span>

								<strong class="result-value">
									Rs. {{ formatNumber(nprAmount) }}
								</strong>
							</div>
						</div>

						<div v-else class="empty-state">
							<p>
								Enter a USD amount to see the NPR
								conversion.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="information-section">
			<div class="container information-card">
				<h2>USD to NPR conversion</h2>

				<p>
					To convert US Dollars to Nepali Rupees, multiply the
					USD amount by the USD to NPR exchange rate.
				</p>

				<p class="formula">
					NPR = USD × Exchange Rate
				</p>

				<h2>Example</h2>

				<p>
					If the exchange rate is Rs. 152.036 per US Dollar,
					then:
				</p>

				<p class="formula">
					$100 × 152.036 = Rs. 15,203.60
				</p>

				<p class="disclaimer">
					Currency exchange rates change over time and may
					differ between banks, money exchanges and other
					providers. Enter the rate you want to use for your
					calculation.
				</p>
			</div>
		</section>
	</main>
</template>
```
