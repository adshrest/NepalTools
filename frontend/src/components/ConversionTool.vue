<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
	fromUnit: {
		type: String,
		required: true
	},
	toUnit: {
		type: String,
		required: true
	},
	fromLabel: {
		type: String,
		required: true
	},
	toLabel: {
		type: String,
		required: true
	},
	converter: {
		type: Function,
		required: true
	}
});

const value = ref('');

const result = computed(() => {
	const numericValue = Number(value.value);

	if (
		!value.value ||
		!Number.isFinite(numericValue) ||
		numericValue < 0
	) {
		return null;
	}

	return props.converter(numericValue);
});

function formatNumber(number) {
	if (!Number.isFinite(number)) {
		return '';
	}

	return new Intl.NumberFormat('en-US', {
		maximumFractionDigits: 6
	}).format(number);
}

function reset() {
	value.value = '';
}
</script>

<template>
	<div class="simple-converter">
		<div class="simple-converter-input">
			<label :for="fromUnit">{{ fromLabel }}</label>

			<input
				:id="fromUnit"
				v-model="value"
				type="number"
				min="0"
				step="any"
				:placeholder="`Enter ${fromLabel.toLowerCase()}`"
			/>
		</div>

		<div class="conversion-arrow">
			↓
		</div>

		<div class="simple-converter-result">
			<span>{{ toLabel }}</span>

			<strong v-if="result !== null">
				{{ formatNumber(result) }}
			</strong>

			<strong v-else class="result-placeholder">
				—
			</strong>
		</div>

		<button
			v-if="value"
			class="reset-button"
			type="button"
			@click="reset"
		>
			Reset
		</button>
	</div>
</template>