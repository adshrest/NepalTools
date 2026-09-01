<script setup>
import { computed, ref } from 'vue';
import { useHead } from '@unhead/vue';
import { calculateVAT } from '../utils/vatCalculator.js';

useHead({
	title: 'Nepal VAT Calculator - 13% VAT Calculator',
	meta: [
		{
			name: 'description',
			content:
				'Free Nepal VAT calculator. Calculate 13% VAT, add VAT to prices, or remove VAT from VAT-inclusive amounts instantly.'
		}
	],

	link: [
		{
			rel: 'canonical',
			href: 'https://nepaltools.netlify.app/vat-calculator'
		}
	],

	script: [
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'WebApplication',
				name: 'Nepal VAT Calculator',
				url: 'https://nepaltools.netlify.app/vat-calculator',
				description:
					'Calculate 13% VAT in Nepal, add VAT to prices or remove VAT from VAT-inclusive amounts.',
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

const amount = ref('');
const mode = ref('add');

const result = computed(() => {
	const numericAmount = Number(amount.value);

	if (
		!amount.value ||
		!Number.isFinite(numericAmount) ||
		numericAmount < 0
	) {
		return null;
	}

	return calculateVAT(numericAmount, mode.value);
});

function formatNumber(value) {
	return new Intl.NumberFormat('en-NP', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(value);
}

function resetCalculator() {
	amount.value = '';
	mode.value = 'add';
}
</script>

<template>
	<main>
		<section class="hero">
			<div class="container">
				<p class="eyebrow">FREE TOOL FOR NEPAL</p>

				<h1>Nepal VAT Calculator</h1>

				<p class="hero-description">
					Calculate Nepal's 13% VAT instantly. Add VAT to a price or
					work backwards from a VAT-inclusive amount.
				</p>
			</div>
		</section>

		<section class="calculator-section">
			<div class="container">
				<div class="simple-converter">
					<div class="simple-converter-input">
						<label for="vat-amount">Enter amount</label>

						<input
							id="vat-amount"
							v-model="amount"
							type="number"
							min="0"
							step="any"
							placeholder="Enter amount in NPR"
						/>
					</div>

					<div class="vat-mode">
						<label>
							<input
								v-model="mode"
								type="radio"
								value="add"
							/>
							Add 13% VAT
						</label>

						<label>
							<input
								v-model="mode"
								type="radio"
								value="remove"
							/>
							Remove 13% VAT
						</label>
					</div>

					<div v-if="result" class="salary-result">
						<p class="result-label">
							{{ mode === 'add' ? 'Total including VAT' : 'VAT breakdown' }}
						</p>

						<strong class="take-home">
							NPR {{ formatNumber(result.totalAmount) }}
						</strong>

						<div class="salary-summary">
							<div>
								<span>Base Amount</span>
								<strong>
									NPR {{ formatNumber(result.baseAmount) }}
								</strong>
							</div>

							<div>
								<span>VAT (13%)</span>
								<strong>
									NPR {{ formatNumber(result.vatAmount) }}
								</strong>
							</div>

							<div v-if="mode === 'add'">
								<span>Total</span>
								<strong>
									NPR {{ formatNumber(result.totalAmount) }}
								</strong>
							</div>

							<div v-else>
								<span>VAT Rate</span>
								<strong>13%</strong>
							</div>
						</div>
					</div>

					<div v-else class="empty-state">
						<p>Enter an amount above to calculate VAT.</p>
					</div>

					<button
						v-if="amount"
						class="reset-button"
						type="button"
						@click="resetCalculator"
					>
						Reset
					</button>
				</div>
			</div>
		</section>

		<section class="information-section">
			<div class="container information-card">
				<h2>Nepal VAT rate</h2>

				<p>
					The standard Value Added Tax (VAT) rate in Nepal is
					<strong>13%</strong>.
				</p>

				<h2>How to calculate VAT</h2>

				<p>
					To add VAT to a price, multiply the price by 13% and add the
					VAT amount to the original price.
				</p>

				<p class="formula">
					VAT = Amount × 13%
				</p>

				<p class="formula">
					Total = Amount + VAT
				</p>

				<h2>Example</h2>

				<p>
					If the price before VAT is NPR 1,000, the VAT is NPR 130 and
					the total amount including VAT is NPR 1,130.
				</p>

				<h2>Removing VAT</h2>

				<p>
					If an amount already includes 13% VAT, divide the
					VAT-inclusive amount by 1.13 to find the amount before VAT.
				</p>

				<p class="formula">
					Amount before VAT = VAT-inclusive amount ÷ 1.13
				</p>

				<p class="disclaimer">
					This calculator is provided for general calculation
					purposes. Tax rules and applicable VAT treatment can vary
					depending on the transaction, goods or services, and
					current Nepal tax regulations.
				</p>
			</div>
		</section>
	</main>
</template>