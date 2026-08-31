import { ViteSSG } from 'vite-ssg';
import { createHead } from '@unhead/vue/client';
import './style.css';
import App from './App.vue';
import router from './router.js';

export const createApp = ViteSSG(
	App,
	{
		routes: router.options.routes
	},
	({ app, router }) => {
		const head = createHead();

		app.use(router);
		app.use(head);
	}
);