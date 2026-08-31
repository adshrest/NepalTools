<script setup>
import { useHead } from '@unhead/vue';
import ConversionTool from '../components/ConversionTool.vue';

const ROPANI_TO_SQUARE_FEET = 5476;

useHead({
	title: 'Ropani to Square Feet Converter - Nepal',
	meta: [
		{
			name: 'description',
			content:
				'Convert Ropani to square feet instantly. 1 Ropani equals 5,476 square feet. Free Nepal land area converter.'
		}
	]
});

function convertRopaniToSquareFeet(value) {
	return value * ROPANI_TO_SQUARE_FEET;
}
</script>

<template>
	<main>
		<section class="hero">
			<div class="container">
				<p class="eyebrow">NEPAL LAND CONVERTER</p>

				<h1>Ropani to Square Feet Converter</h1>

				<p class="hero-description">
					Convert Ropani to square feet instantly using the standard
					Nepal land measurement conversion.
				</p>
			</div>
		</section>

		<section class="calculator-section">
			<div class="container">
				<ConversionTool
					from-unit="ropani"
					to-unit="square-feet"
					from-label="Ropani"
					to-label="Square Feet"
					:converter="convertRopaniToSquareFeet"
				/>
			</div>
		</section>

		<section class="information-section">
			<div class="container information-card">
				<h2>Ropani to square feet conversion</h2>

				<p>
					<strong>1 Ropani = 5,476 square feet.</strong>
				</p>

				<table class="conversion-table">
					<thead>
						<tr>
							<th>Ropani</th>
							<th>Square Feet</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>1</td>
							<td>5,476</td>
						</tr>

						<tr>
							<td>2</td>
							<td>10,952</td>
						</tr>

						<tr>
							<td>3</td>
							<td>16,428</td>
						</tr>

						<tr>
							<td>5</td>
							<td>27,380</td>
						</tr>

						<tr>
							<td>10</td>
							<td>54,760</td>
						</tr>
					</tbody>
				</table>

				<h2>How to convert Ropani to square feet</h2>

				<p>
					To convert Ropani to square feet, multiply the number of
					Ropani by 5,476.
				</p>

				<p class="formula">
					Square feet = Ropani × 5,476
				</p>

				<h2>Nepal land measurement units</h2>

				<p>
					The traditional land measurement system commonly uses
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

				<RouterLink
					class="primary-button"
					to="/land-converter"
				>
					Open Full Land Converter
				</RouterLink>
			</div>
		</section>
	</main>
</template>