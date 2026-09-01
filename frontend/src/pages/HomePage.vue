```vue
<script setup>
import { useHead } from '@unhead/vue';

useHead({
	title: 'NepalTools - Free Online Calculators & Converters for Nepal',
	link: [
		{
			rel: 'canonical',
			href: 'https://nepaltools.netlify.app/'
		}
	],
	meta: [
		{
			name: 'description',
			content:
				'Free online calculators and converters for Nepal. Calculate land area, salary tax, loans, VAT, fuel costs, percentages, age, currency and more.'
		},
		{
			name: 'robots',
			content: 'index, follow'
		},
		{
			property: 'og:title',
			content: 'NepalTools - Free Online Calculators & Converters for Nepal'
		},
		{
			property: 'og:description',
			content:
				'Free, simple and useful online calculators and converters made for everyday needs in Nepal.'
		},
		{
			property: 'og:url',
			content: 'https://nepaltools.netlify.app/'
		},
		{
			property: 'og:type',
			content: 'website'
		}
	],

	script: [
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'WebPage',
				'@id': 'https://nepaltools.netlify.app/#webpage',
				url: 'https://nepaltools.netlify.app/',
				name: 'NepalTools - Free Online Calculators & Converters for Nepal',
				description:
					'Free online calculators and useful tools for Nepal including land area, salary tax, loans, VAT, fuel cost, currency, dates and invoice generation.',
				isPartOf: {
					'@id': 'https://nepaltools.netlify.app/#website'
				},
				publisher: {
					'@id': 'https://nepaltools.netlify.app/#organization'
				}
			})
		}
	]
});
</script>

<template>
	<main>
		<!-- HERO -->
		<section class="home-hero">
			<div class="container">
				<h3>NepalTools</h3>

				<h1>Free Online Calculators & Tools for Nepal</h1>

				<p class="hero-description">
					Free, simple and useful calculators for everyday life in Nepal.
					Calculate land area, salary, loans, VAT, fuel costs and more.
				</p>

				<a class="primary-button" href="#tools">
					Browse Tools
				</a>
			</div>
		</section>

		<!-- TOOLS -->
		<section id="tools" class="tools-section">
			<div class="container">
				<h2>Free Tools</h2>

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

						<h3>Salary Tax Calculator</h3>

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

					<RouterLink class="tool-card" to="/usd-to-npr">
						<span class="tool-category">MONEY</span>

						<h3>USD to NPR Converter</h3>

						<p>
							Convert US Dollars to Nepali Rupees using your chosen
							exchange rate.
						</p>

						<span class="tool-link">Open tool →</span>
					</RouterLink>

					<RouterLink class="tool-card" to="/vat-calculator">
						<span class="tool-category">TAX</span>

						<h3>Nepal VAT Calculator</h3>

						<p>
							Calculate 13% VAT, add VAT to prices, or remove VAT from
							VAT-inclusive amounts.
						</p>

						<span class="tool-link">Calculate VAT →</span>
					</RouterLink>

					<RouterLink class="tool-card" to="/percentage-calculator">
						<span class="tool-category">CALCULATOR</span>

						<h3>Percentage Calculator</h3>

						<p>
							Calculate percentages, percentage changes, increases,
							decreases and percentage differences.
						</p>

						<span class="tool-link">Calculate Percentage →</span>
					</RouterLink>

					<RouterLink class="tool-card" to="/tools/invoice-generator">
						<span class="tool-category">BUSINESS</span>

						<h3>Invoice Generator</h3>

						<p>
							Create a professional invoice with items, discount and VAT.
						</p>

						<span class="tool-link">Open tool →</span>
					</RouterLink>
				</div>
			</div>
		</section>

		<!-- ABOUT -->
		<section class="information-section">
			<div class="container information-card">
				<h2>Free tools made for Nepal</h2>

				<p>
					NepalTools provides simple online calculators and useful tools
					for everyday needs in Nepal. Convert traditional land
					measurements such as Ropani, Aana, Paisa and Daam, calculate
					your age, estimate salary and income tax, calculate loan
					payments, VAT and fuel costs, or create an invoice for your
					business.
				</p>

				<p>
					Our tools are designed to be fast, simple and easy to use
					from phones and computers without installing an app.
				</p>

				<div class="why-nepaltools">
					<div>
						<strong>Free to use</strong>
						<span>No registration required.</span>
					</div>

					<div>
						<strong>Made for Nepal</strong>
						<span>Built around everyday Nepali needs.</span>
					</div>

					<div>
						<strong>Simple</strong>
						<span>Easy to understand and use.</span>
					</div>
				</div>
			</div>
		</section>

		<!-- CONTACT -->
		<section class="contact-section">
			<div class="container contact-card">
				<p class="eyebrow">CONTACT</p>

				<h2>Have a suggestion?</h2>

				<p>
					Found an error, have an idea for a new calculator, or want
					to get in touch with us?
				</p>

				<div class="contact-details">
					<a href="mailto:adshrest@gmail.com">
						<strong>Email</strong>
						<span>adshrest@gmail.com</span>
					</a>

					<a href="tel:+9779803906961">
						<strong>Phone</strong>
						<span>+977 9803906961</span>
					</a>
				</div>
			</div>
		</section>
	</main>
</template>
```
