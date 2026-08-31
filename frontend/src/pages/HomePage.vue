<template>
	<main>
		<section class="home-hero">
			<div class="container">
				<p class="eyebrow">NEPALTOOLS</p>

				<h1>Useful online tools for Nepal</h1>

				<p class="hero-description">
					Simple, free calculators and converters designed for
					everyday use in Nepal.
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
				</div>
			</div>
		</section>
	</main>
</template>