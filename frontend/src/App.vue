```vue
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
