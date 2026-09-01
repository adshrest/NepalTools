import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import LandConverterPage from './pages/LandConverterPage.vue';
import NepaliDateConverterPage from './pages/NepaliDateConverterPage.vue';
import FuelCostCalculatorPage from './pages/FuelCostCalculatorPage.vue';

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
	},
	{
		path: '/salary-calculator',
		name: 'salary-calculator',
		component: () =>
			import('./pages/SalaryCalculatorPage.vue')
	},
	{
		path: '/loan-calculator',
		name: 'loan-calculator',
		component: () => 
			import('./pages/LoanCalculatorPage.vue')
	},
	{
		path: '/nepali-date-converter',
		name: 'nepali-date-converter',
		component: NepaliDateConverterPage
	},
	{
		path: '/fuel-cost-calculator',
		name: 'fuel-cost-calculator',
		component: FuelCostCalculatorPage
	}
];

export default createRouter({
	history: import.meta.env.SSR
		? createMemoryHistory()
		: createWebHistory(),
	routes
});