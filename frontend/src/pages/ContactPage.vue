<script setup>
import { useHead } from '@unhead/vue';

useHead({
	title: 'Contact NepalTools',
	meta: [
		{
			name: 'description',
			content:
				'Contact NepalTools with questions, suggestions, feedback or corrections about our online calculators and tools.'
		}
	]
});
</script>

<template>
	<main>
		<section class="hero">
			<div class="container">

				<h2>Contact NepalTools</h2>

				<p class="hero-description">
					Have a question, suggestion or found an error?
					We'd love to hear from you.
				</p>
			</div>
		</section>

		<section class="information-section">
			<div class="container information-card">
				<h2>Get in touch</h2>

				<p>
					If you have feedback about one of our calculators, notice
					an incorrect calculation, or have an idea for a new tool,
					please contact us.
				</p>

				<h2>Email</h2>

				<p>
					<a href="mailto:adshrest@gmail.com">
						adshrest@gmail.com
					</a>
				</p>

				<h2>Phone</h2>

				<p>
					<a href="tel:+9779803906961">
						+977 980 390 6961
					</a>
				</p>

				<h2>Feedback and corrections</h2>

				<p>
					When reporting an issue, please include the name of the
					tool and explain what you expected to see. This helps us
					investigate and improve NepalTools.
				</p>
			</div>
		</section>
	</main>
</template>