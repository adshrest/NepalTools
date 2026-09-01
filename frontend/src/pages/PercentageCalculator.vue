<script setup>
import { computed, ref } from 'vue';
import { useHead } from '@unhead/vue';
import {
	percentageOf,
	percentageOfValue,
	percentageChange,
	percentageDifference
} from '../utils/percentageCalculator.js';

useHead({
	title: 'Percentage Calculator - Free Online Calculator',
	meta: [
		{
			name: 'description',
			content:
				'Free percentage calculator. Calculate percentages, percentage increases and decreases, what percentage one number is of another, and percentage difference.'
		}
	]
});

const percent = ref('');
const percentValue = ref('');

const partValue = ref('');
const totalValue = ref('');

const oldValue = ref('');
const newValue = ref('');

const firstDifference = ref('');
const secondDifference = ref('');

const percentageResult = computed(() => {
	const percentNumber = Number(percent.value);
	const valueNumber = Number(percentValue.value);

	if (
		percent.value === '' ||
		percentValue.value === '' ||
		!Number.isFinite(percentNumber) ||
		!Number.isFinite(valueNumber)
	) {
		return null;
	}

	return percentageOf(percentNumber, valueNumber);
});

const percentageOfValueResult = computed(() => {
	const valueNumber = Number(partValue.value);
	const totalNumber = Number(totalValue.value);

	if (
		partValue.value === '' ||
		totalValue.value === '' ||
		!Number.isFinite(valueNumber) ||
		!Number.isFinite(totalNumber) ||
		totalNumber === 0
	) {
		return null;
	}

	return percentageOfValue(valueNumber, totalNumber);
});

const percentageChangeResult = computed(() => {
	const oldNumber = Number(oldValue.value);
	const newNumber = Number(newValue.value);

	if (
		oldValue.value === '' ||
		newValue.value === '' ||
		!Number.isFinite(oldNumber) ||
		!Number.isFinite(newNumber) ||
		oldNumber === 0
	) {
		return null;
	}

	return percentageChange(oldNumber, newNumber);
});

const percentageDifferenceResult = computed(() => {
	const firstNumber = Number(firstDifference.value);
	const secondNumber = Number(secondDifference.value);

	if (
		firstDifference.value === '' ||
		secondDifference.value === '' ||
		!Number.isFinite(firstNumber) ||
		!Number.isFinite(secondNumber) ||
		firstNumber + secondNumber === 0
	) {
		return null;
	}

	return percentageDifference(firstNumber, secondNumber);
});

function formatNumber(value) {
	return new Intl.NumberFormat('en-US', {
		maximumFractionDigits: 6
	}).format(value);
}

function resetCalculator() {
	percent.value = '';
	percentValue.value = '';
	partValue.value = '';
	totalValue.value = '';
	oldValue.value = '';
	newValue.value = '';
	firstDifference.value = '';
	secondDifference.value = '';
}
</script>

<template>
	<main>
		<section class="hero">
			<div class="container">
				<p class="eyebrow">FREE ONLINE TOOL</p>

				<h1>Percentage Calculator</h1>

				<p class="hero-description">
					Calculate percentages, percentage changes, increases,
					decreases and percentage differences instantly.
				</p>
			</div>
		</section>

		<section class="calculator-section">
			<div class="container percentage-grid">
				<div class="percentage-card">
					<h2>What is X% of Y?</h2>

					<div class="percentage-input">
						<label for="percent">Percentage</label>

						<input
							id="percent"
							v-model="percent"
							type="number"
							step="any"
							placeholder="e.g. 20"
						/>
					</div>

					<div class="percentage-input">
						<label for="percent-value">Value</label>

						<input
							id="percent-value"
							v-model="percentValue"
							type="number"
							step="any"
							placeholder="e.g. 500"
						/>
					</div>

					<div v-if="percentageResult !== null" class="percentage-result">
						<span>Result</span>
						<strong>
							{{ formatNumber(percentageResult) }}
						</strong>
					</div>
				</div>

				<div class="percentage-card">
					<h2>X is what % of Y?</h2>

					<div class="percentage-input">
						<label for="part-value">Value</label>

						<input
							id="part-value"
							v-model="partValue"
							type="number"
							step="any"
							placeholder="e.g. 25"
						/>
					</div>

					<div class="percentage-input">
						<label for="total-value">Total</label>

						<input
							id="total-value"
							v-model="totalValue"
							type="number"
							step="any"
							placeholder="e.g. 100"
						/>
					</div>

					<div
						v-if="percentageOfValueResult !== null"
						class="percentage-result"
					>
						<span>Result</span>
						<strong>
							{{ formatNumber(percentageOfValueResult) }}%
						</strong>
					</div>
				</div>

				<div class="percentage-card">
					<h2>Percentage increase or decrease</h2>

					<div class="percentage-input">
						<label for="old-value">Original value</label>

						<input
							id="old-value"
							v-model="oldValue"
							type="number"
							step="any"
							placeholder="e.g. 100"
						/>
					</div>

					<div class="percentage-input">
						<label for="new-value">New value</label>

						<input
							id="new-value"
							v-model="newValue"
							type="number"
							step="any"
							placeholder="e.g. 120"
						/>
					</div>

					<div
						v-if="percentageChangeResult !== null"
						class="percentage-result"
					>
						<span>Percentage change</span>
						<strong>
							{{ formatNumber(percentageChangeResult) }}%
						</strong>

						<small v-if="percentageChangeResult > 0">
							Increase
						</small>

						<small v-else-if="percentageChangeResult < 0">
							Decrease
						</small>

						<small v-else>
							No change
						</small>
					</div>
				</div>

				<div class="percentage-card">
					<h2>Percentage difference</h2>

					<div class="percentage-input">
						<label for="first-difference">First value</label>

						<input
							id="first-difference"
							v-model="firstDifference"
							type="number"
							step="any"
							placeholder="e.g. 100"
						/>
					</div>

					<div class="percentage-input">
						<label for="second-difference">Second value</label>

						<input
							id="second-difference"
							v-model="secondDifference"
							type="number"
							step="any"
							placeholder="e.g. 120"
						/>
					</div>

					<div
						v-if="percentageDifferenceResult !== null"
						class="percentage-result"
					>
						<span>Percentage difference</span>
						<strong>
							{{ formatNumber(percentageDifferenceResult) }}%
						</strong>
					</div>
				</div>
			</div>

			<div class="container">
				<button
					class="reset-button percentage-reset"
					type="button"
					@click="resetCalculator"
				>
					Reset All
				</button>
			</div>
		</section>

		<section class="information-section">
			<div class="container information-card">
				<h2>How to calculate a percentage</h2>

				<p>
					To calculate a percentage of a number, multiply the number
					by the percentage and divide by 100.
				</p>

				<p class="formula">
					Percentage of a value = (Percentage ÷ 100) × Value
				</p>

				<h2>Percentage increase or decrease</h2>

				<p>
					To calculate percentage change, subtract the original value
					from the new value, divide by the original value, and
					multiply by 100.
				</p>

				<p class="formula">
					Percentage change = ((New − Original) ÷ Original) × 100
				</p>

				<h2>Example</h2>

				<p>
					If a price increases from 100 to 120, the percentage
					increase is 20%.
				</p>

				<h2>Percentage difference</h2>

				<p>
					Percentage difference compares two values using their
					average as the reference point.
				</p>

				<p class="formula">
					Percentage difference = |A − B| ÷ ((A + B) ÷ 2) × 100
				</p>
			</div>
		</section>
	</main>
</template>