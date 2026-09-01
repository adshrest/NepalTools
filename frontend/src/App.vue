```vue
<script setup>
import { useHead } from '@unhead/vue';

useHead({
	htmlAttrs: {
		lang: 'en'
	},
	meta: [
		{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1'
		}
	]
});
</script>

<template>
	<div class="app">
		<header class="site-header">
			<div class="container header-content">
				<RouterLink class="brand" to="/">
					<span class="brand-mark">NT</span>
					<span>NepalTools</span>
				</RouterLink>

				<nav class="site-nav">
					<RouterLink to="/">Home</RouterLink>

					<RouterLink to="/land-converter">
						Land Converter
					</RouterLink>

					<RouterLink to="/ropani-to-square-feet">
						Ropani → Sq Ft
					</RouterLink>

					<RouterLink to="/age-calculator">
						Age Calculator
					</RouterLink>
					
					<RouterLink to="/salary-calculator">
						Salary Calculator
					</RouterLink>

					<RouterLink to="/loan-calculator"> 
						Loan Calculator 
					</RouterLink>

					<RouterLink to="/nepali-date-converter">
						Nepali Date
					</RouterLink>

					<RouterLink to="/fuel-cost-calculator"> 
						Fuel Cost 
					</RouterLink>
				</nav>
			</div>
		</header>

		<RouterView />

		<footer class="site-footer">
			<div class="container">
				<p>© 2026 NepalTools</p>
			</div>
		</footer>
	</div>
</template>
```