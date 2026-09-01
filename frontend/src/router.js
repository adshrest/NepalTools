import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import LandConverterPage from './pages/LandConverterPage.vue';

export const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/land-converter',
		name: 'land-converter',
		component: LandConverterPage
	},
    {
		path: '/ropani-to-square-feet',
		name: 'ropani-to-square-feet',
		component: () =>
			import('./pages/RopaniToSquareFeetPage.vue')
	},
	{
		path: '/age-calculator',
		name: 'age-calculator',
		component: () =>
			import('./pages/AgeCalculatorPage.vue')
	}
];

export default createRouter({
	history: import.meta.env.SSR
		? createMemoryHistory()
		: createWebHistory(),
	routes
});