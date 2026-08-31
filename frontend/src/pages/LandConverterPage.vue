<script setup>
import { useHead } from '@unhead/vue';
import { computed, ref } from 'vue';
import { convertLand } from '../utils/landConversion.js';

useHead({
	title: 'Nepal Land Area Converter - Ropani, Aana, Paisa & Daam',
	meta: [
		{
			name: 'description',
			content:
				'Convert Ropani, Aana, Paisa, Daam, square feet, square meters, acres and hectares with this free Nepal land area converter.'
		}
	],
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
					Convert Ropani, Aana, Paisa, Daam and international area
					units instantly.
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
				<h2>Nepal land measurement</h2>

				<p>
					The traditional Ropani system is commonly expressed using
					Ropani, Aana, Paisa and Daam.
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

				<p class="disclaimer">
					This tool provides mathematical unit conversion only. For
					legal property boundaries, ownership records or official
					land measurements, verify the information against official
					documents and qualified professionals.
				</p>
			</div>
		</section>
	</main>
</template>