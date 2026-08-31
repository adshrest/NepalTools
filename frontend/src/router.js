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
	}
];

export default createRouter({
	history: import.meta.env.SSR
		? createMemoryHistory()
		: createWebHistory(),
	routes
});