```vue
<script setup>
import { computed, ref } from 'vue';
import { useHead } from '@unhead/vue';
import { convertLand } from '../utils/landConversion.js';

useHead({
	title: 'Nepal Land Area Converter | Ropani, Aana, Paisa & Daam',
	meta: [
		{
			name: 'description',
			content:
				'Free Nepal land area converter for Ropani, Aana, Paisa, Daam, square feet, square meters, acres and hectares. Convert Nepal land measurements instantly.'
		}
	],

	link: [
		{
			rel: 'canonical',
			href: 'https://nepaltools.netlify.app/land-converter'
		}
	],

	script: [
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'WebApplication',
				name: 'Nepal Land Area Converter',
				url: 'https://nepaltools.netlify.app/land-converter',
				description:
					'Convert Ropani, Aana, Paisa, Daam, square feet, square meters, acres and hectares.',
				applicationCategory: 'UtilitiesApplication',
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

const units = [
	{
		value: 'ropani',
		label: 'Ropani'
	},
	{
		value: 'aana',
		label: 'Aana'
	},
	{
		value: 'paisa',
		label: 'Paisa'
	},
	{
		value: 'daam',
		label: 'Daam'
	},
	{
		value: 'squareFeet',
		label: 'Square Feet'
	},
	{
		value: 'squareMeter',
		label: 'Square Meter'
	},
	{
		value: 'acre',
		label: 'Acre'
	},
	{
		value: 'hectare',
		label: 'Hectare'
	}
];

const value = ref('');
const selectedUnit = ref('ropani');
const copiedUnit = ref('');

const conversion = computed(() => {
	const numericValue = Number(value.value);

	if (!value.value || !Number.isFinite(numericValue) || numericValue < 0) {
		return null;
	}

	return convertLand(numericValue, selectedUnit.value);
});

const results = computed(() => {
	if (!conversion.value) {
		return [];
	}

	return [
		{
			key: 'ropani',
			label: 'Ropani',
			value: conversion.value.ropani
		},
		{
			key: 'aana',
			label: 'Aana',
			value: conversion.value.aana
		},
		{
			key: 'paisa',
			label: 'Paisa',
			value: conversion.value.paisa
		},
		{
			key: 'daam',
			label: 'Daam',
			value: conversion.value.daam
		},
		{
			key: 'squareFeet',
			label: 'Square Feet',
			value: conversion.value.squareFeet
		},
		{
			key: 'squareMeter',
			label: 'Square Meter',
			value: conversion.value.squareMeter
		},
		{
			key: 'acre',
			label: 'Acres',
			value: conversion.value.acre
		},
		{
			key: 'hectare',
			label: 'Hectares',
			value: conversion.value.hectare
		}
	];
});

function formatNumber(number) {
	if (!Number.isFinite(number)) {
		return '';
	}

	return new Intl.NumberFormat('en-US', {
		maximumFractionDigits: 6
	}).format(number);
}

async function copyResult(result) {
	try {
		await navigator.clipboard.writeText(String(result.value));
		copiedUnit.value = result.key;

		setTimeout(() => {
			copiedUnit.value = '';
		}, 1500);
	} catch (error) {
		console.error('Unable to copy result:', error);
	}
}

function resetCalculator() {
	value.value = '';
	selectedUnit.value = 'ropani';
	copiedUnit.value = '';
}
</script>

<template>
	<main>
		<section class="hero">
			<div class="container">
				<p class="eyebrow">FREE TOOL FOR NEPAL</p>

				<h1>Nepal Land Area Converter</h1>

				<p class="hero-description">
					Convert Ropani, Aana, Paisa, Daam, square feet, square
					meters, acres and hectares instantly.
				</p>
			</div>
		</section>

		<section class="calculator-section">
			<div class="container">
				<div class="calculator-card">
					<div class="input-section">
						<label for="land-value">Enter amount</label>

						<input
							id="land-value"
							v-model="value"
							type="number"
							min="0"
							step="any"
							placeholder="Enter a number"
						/>

						<label for="land-unit">Unit</label>

						<select id="land-unit" v-model="selectedUnit">
							<option
								v-for="unit in units"
								:key="unit.value"
								:value="unit.value"
							>
								{{ unit.label }}
							</option>
						</select>

						<button
							v-if="value"
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
								<p class="results-label">CONVERTED RESULTS</p>

								<h2>Your land area</h2>
							</div>
						</div>

						<div v-if="results.length" class="results-grid">
							<div
								v-for="result in results"
								:key="result.key"
								class="result-card"
							>
								<span class="result-label">
									{{ result.label }}
								</span>

								<strong class="result-value">
									{{ formatNumber(result.value) }}
								</strong>

								<button
									class="copy-button"
									type="button"
									@click="copyResult(result)"
								>
									{{
										copiedUnit === result.key
											? 'Copied!'
											: 'Copy'
									}}
								</button>
							</div>
						</div>

						<div v-else class="empty-state">
							<p>
								Enter an amount above to see the conversions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="information-section">
			<div class="container information-card">
				<h2>Nepal land measurement units</h2>

				<p>
					Nepal commonly uses traditional land measurements such
					as Ropani, Aana, Paisa and Daam. These units can also be
					converted into international units such as square feet
					and square meters.
				</p>

				<div class="conversion-chain">
					<span>1 Ropani</span>
					<span>=</span>
					<span>16 Aana</span>
					<span>=</span>
					<span>64 Paisa</span>
					<span>=</span>
					<span>256 Daam</span>
				</div>

				<h2>Common Nepal land conversions</h2>

				<table class="conversion-table">
					<thead>
						<tr>
							<th>Unit</th>
							<th>Equivalent in Square Feet</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>1 Ropani</td>
							<td>5,476 sq ft</td>
						</tr>

						<tr>
							<td>1 Aana</td>
							<td>342.25 sq ft</td>
						</tr>

						<tr>
							<td>1 Paisa</td>
							<td>85.5625 sq ft</td>
						</tr>

						<tr>
							<td>1 Daam</td>
							<td>21.390625 sq ft</td>
						</tr>
					</tbody>
				</table>

				<h2>How to use the land converter</h2>

				<p>
					Enter the land area, select the unit you are starting
					with, and the converter will automatically calculate
					the equivalent value in all supported units.
				</p>

				<p>
					For example, entering 1 Ropani shows the equivalent
					amount in Aana, Paisa, Daam, square feet, square meters,
					acres and hectares.
				</p>

				<h2>Ropani to square feet</h2>

				<p>
					One Ropani is equal to 5,476 square feet. If you only
					need a Ropani to square feet conversion, use our
					dedicated converter.
				</p>

				<RouterLink
					class="primary-button"
					to="/ropani-to-square-feet"
				>
					Ropani to Square Feet Converter
				</RouterLink>

				<h2>Frequently asked questions</h2>

				<div class="faq-list">
					<details>
						<summary>
							How many Aana are in 1 Ropani?
						</summary>

						<p>
							1 Ropani contains 16 Aana.
						</p>
					</details>

					<details>
						<summary>
							How many Paisa are in 1 Ropani?
						</summary>

						<p>
							1 Ropani contains 64 Paisa.
						</p>
					</details>

					<details>
						<summary>
							How many Daam are in 1 Ropani?
						</summary>

						<p>
							1 Ropani contains 256 Daam.
						</p>
					</details>

					<details>
						<summary>
							How many square feet are in 1 Ropani?
						</summary>

						<p>
							1 Ropani is equal to 5,476 square feet.
						</p>
					</details>
				</div>

				<p class="disclaimer">
					This tool provides mathematical unit conversion only.
					For legal property boundaries, ownership records or
					official land measurements, verify the information
					against official documents and qualified professionals.
				</p>
			</div>
		</section>
	</main>
</template>
```
