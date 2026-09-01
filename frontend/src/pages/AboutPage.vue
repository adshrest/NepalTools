<script setup>
import { useHead } from '@unhead/vue';

useHead({
	title: 'About NepalTools - Free Online Tools for Nepal',
	meta: [
		{
			name: 'description',
			content:
				'Learn about NepalTools, a collection of free online calculators and tools designed for everyday needs in Nepal.'
		}
	],

	link: [
		{
			rel: 'canonical',
			href: 'https://nepaltools.netlify.app/about'
		}
	]
});
</script>

<template>
	<main>
		<section class="hero">
			<div class="container">
				<h3>About NepalTools</h3>

				<h1>Simple Tools for Everyday Life in Nepal</h1>

				<p class="hero-description">
					NepalTools provides free, simple and practical online
					calculators and tools designed for people in Nepal.
				</p>
			</div>
		</section>

		<section class="information-section">
			<div class="container information-card">
				<h2>What is NepalTools?</h2>

				<p>
					NepalTools is a collection of free online tools created to
					make common calculations and everyday tasks easier.
				</p>

				<p>
					Our tools cover areas such as land measurements, salary and
					tax calculations, loans, dates, fuel costs, currency,
					percentages and business invoicing.
				</p>

				<h2>Why we built NepalTools</h2>

				<p>
					Many everyday calculations in Nepal require specific local
					units, rates or conventions. We wanted to create a simple
					place where these calculations could be performed quickly
					without installing an application.
				</p>

				<h2>Our goal</h2>

				<p>
					Our goal is to build a useful collection of reliable,
					easy-to-use tools for students, workers, families,
					landowners and small businesses in Nepal.
				</p>

				<h2>Free to use</h2>

				<p>
					NepalTools is currently free to use. We aim to keep the
					core calculators and tools accessible to everyone.
				</p>

				<h2>Questions or feedback?</h2>

				<p>
					If you have a suggestion, find an error, or would like to
					recommend a new tool, we'd be happy to hear from you.
				</p>

				<p>
					Email:
					<a href="mailto:adshrest@gmail.com">
						adshrest@gmail.com
					</a>
				</p>
			</div>
		</section>
	</main>
</template>