<script setup>
import { useHead } from '@unhead/vue';

useHead({
	title: 'NepalTools - Free Online Calculators & Converters for Nepal',
	meta: [
		{
			name: 'description',
			content:
				'Free Nepal calculators and converters including land area, Ropani to square feet, salary and age calculators.'
		}
	]
});
</script>

<template>
	<main>
		<section class="home-hero">
			<div class="container">
				<p class="eyebrow">NEPALTOOLS</p>

				<h1>Free Online Calculators & Tools for Nepal</h1>

				<p class="hero-description">
					Free, simple and useful calculators for everyday life in Nepal.
					Calculate land area, salary, age and more.
				</p>

				<RouterLink class="primary-button" to="/land-converter">
					Land Area Converter
				</RouterLink>
			</div>
		</section>

		<section class="tools-section">
			<div class="container">
				<h2>Tools</h2>

				<div class="tool-grid">
					<RouterLink class="tool-card" to="/land-converter">
						<span class="tool-category">LAND</span>

						<h3>Land Area Converter</h3>

						<p>
							Convert Ropani, Aana, Paisa, Daam, square feet,
							square meters and more.
						</p>

						<span class="tool-link">Open tool →</span>
					</RouterLink>

                    <RouterLink class="tool-card" to="/ropani-to-square-feet">
                        <span class="tool-category">LAND</span>

                        <h3>Ropani to Square Feet</h3>

                        <p>
                            Convert Ropani to square feet instantly.
                            1 Ropani equals 5,476 square feet.
                        </p>

                        <span class="tool-link">Open tool →</span>
                    </RouterLink>

					<RouterLink class="tool-card" to="/age-calculator">
						<span class="tool-category">EVERYDAY</span>

						<h3>Age Calculator</h3>

						<p>
							Calculate your exact age in years, months and days,
							plus total days and your next birthday.
						</p>

						<span class="tool-link">Open tool →</span>
					</RouterLink>

					<RouterLink class="tool-card" to="/salary-calculator">
						<span class="tool-category">MONEY</span>

						<h3>Salary Calculator</h3>

						<p>
							Estimate your annual income, income tax and monthly
							take-home salary in Nepal.
						</p>

						<span class="tool-link">Open tool →</span>
					</RouterLink>

					<RouterLink class="tool-card" to="/loan-calculator">
						<span class="tool-category">FINANCE</span>

						<h3>Loan / EMI Calculator</h3>

						<p>
							Calculate monthly EMI, total interest and total repayment
							for your loan.
						</p>

						<span class="tool-link">Open tool →</span>
					</RouterLink>

					<RouterLink class="tool-card" to="/nepali-date-converter">
						<span class="tool-category">DATE</span>

						<h3>Nepali Date Converter</h3>

						<p>
							Convert Nepali Bikram Sambat dates to English dates
							and English dates to Nepali dates.
						</p>

						<span class="tool-link">Open tool →</span>
					</RouterLink>

					<RouterLink class="tool-card" to="/fuel-cost-calculator">
						<span class="tool-category">EVERYDAY</span>

						<h3>Fuel Cost Calculator</h3>

						<p>
							Calculate fuel required, total fuel cost and cost per
							kilometer for your trip.
						</p>

						<span class="tool-link">Open tool →</span>
					</RouterLink>
				</div>
			</div>
		</section>

		<section class="information-section">
			<div class="container information-card">
				<h2>Free tools made for Nepal</h2>

				<p>
					NepalTools provides simple online calculators and converters
					for everyday needs in Nepal. Convert traditional land
					measurements such as Ropani, Aana, Paisa and Daam, calculate
					your age, or estimate your salary and income tax.
				</p>

				<p>
					Our tools are designed to be fast, easy to use and accessible
					from phones and computers without installing an app.
				</p>
			</div>
		</section>
	</main>
</template>