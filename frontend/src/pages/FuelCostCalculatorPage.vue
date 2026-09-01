```vue
<script setup>
import { computed, ref } from 'vue';
import { useHead } from '@unhead/vue';
import { calculateFuelCost } from '../utils/fuelCalculator.js';

useHead({
	title: 'Fuel Cost Calculator Nepal - Calculate Petrol & Diesel Cost',
	meta: [
		{
			name: 'description',
			content:
				'Calculate fuel required, fuel cost and cost per kilometer in Nepal. Free petrol and diesel travel cost calculator.'
		}
	]
});

const distance = ref('');
const mileage = ref('');
const fuelPrice = ref('');
const tripType = ref('one-way');

const calculation = computed(() => {
	const numericDistance = Number(distance.value);
	const numericMileage = Number(mileage.value);
	const numericFuelPrice = Number(fuelPrice.value);

	if (
		!distance.value ||
		!mileage.value ||
		!fuelPrice.value ||
		!Number.isFinite(numericDistance) ||
		!Number.isFinite(numericMileage) ||
		!Number.isFinite(numericFuelPrice) ||
		numericDistance < 0 ||
		numericMileage <= 0 ||
		numericFuelPrice < 0
	) {
		return null;
	}

	const totalDistance =
		tripType.value === 'round-trip'
			? numericDistance * 2
			: numericDistance;

	return calculateFuelCost(
		totalDistance,
		numericMileage,
		numericFuelPrice
	);
});

function formatNumber(number, decimals = 2) {
	if (!Number.isFinite(number)) {
		return '';
	}

	return new Intl.NumberFormat('en-US', {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals
	}).format(number);
}

function resetCalculator() {
	distance.value = '';
	mileage.value = '';
	fuelPrice.value = '';
	tripType.value = 'one-way';
}
</script>

<template>
	<main>
		<section class="hero">
			<div class="container">
				<p class="eyebrow">FREE TOOL FOR NEPAL</p>

				<h1>Fuel Cost Calculator</h1>

				<p class="hero-description">
					Calculate how much fuel you need and how much your
					trip will cost.
				</p>
			</div>
		</section>

		<section class="calculator-section">
			<div class="container">
				<div class="calculator-card">
					<div class="input-section">
						<label for="fuel-distance">
							Distance (km)
						</label>

						<input
							id="fuel-distance"
							v-model="distance"
							type="number"
							min="0"
							step="any"
							placeholder="e.g. 100"
						/>

						<label for="trip-type">Trip type</label>

						<select id="trip-type" v-model="tripType">
							<option value="one-way">
								One way
							</option>

							<option value="round-trip">
								Round trip
							</option>
						</select>

						<label for="fuel-mileage">
							Vehicle mileage (km/L)
						</label>

						<input
							id="fuel-mileage"
							v-model="mileage"
							type="number"
							min="0.1"
							step="any"
							placeholder="e.g. 15"
						/>

						<label for="fuel-price">
							Fuel price (Rs/L)
						</label>

						<input
							id="fuel-price"
							v-model="fuelPrice"
							type="number"
							min="0"
							step="any"
							placeholder="e.g. 170"
						/>

						<button
							v-if="distance || mileage || fuelPrice"
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
									TRIP ESTIMATE
								</p>

								<h2>Fuel cost</h2>
							</div>
						</div>

						<div
							v-if="calculation"
							class="results-grid"
						>
							<div class="result-card">
								<span class="result-label">
									Fuel Required
								</span>

								<strong class="result-value">
									{{
										formatNumber(
											calculation.fuelRequired
										)
									}}
									L
								</strong>
							</div>

							<div class="result-card">
								<span class="result-label">
									Total Fuel Cost
								</span>

								<strong class="result-value">
									Rs.
									{{
										formatNumber(
											calculation.totalCost
										)
									}}
								</strong>
							</div>

							<div class="result-card">
								<span class="result-label">
									Cost per Kilometer
								</span>

								<strong class="result-value">
									Rs.
									{{
										formatNumber(
											calculation.costPerKm
										)
									}}
								</strong>
							</div>
						</div>

						<div v-else class="empty-state">
							<p>
								Enter your distance, mileage and fuel
								price to calculate your trip cost.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="information-section">
			<div class="container information-card">
				<h2>How to calculate fuel cost</h2>

				<p>
					Fuel required is calculated by dividing the travel
					distance by your vehicle's mileage.
				</p>

				<p class="formula">
					Fuel required = Distance ÷ Mileage
				</p>

				<p>
					The total fuel cost is then calculated by multiplying
					the required fuel by the price per litre.
				</p>

				<p class="formula">
					Fuel cost = Fuel required × Fuel price
				</p>

				<p class="disclaimer">
					Fuel prices and vehicle mileage can change. Use the
					current fuel price and your vehicle's actual mileage
					for a more accurate estimate.
				</p>
			</div>
		</section>
	</main>
</template>
```
