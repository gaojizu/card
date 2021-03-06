import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Card from '@/views/card'

Vue.use(Router)
/**
 * 路有配置文件
 */
export default new Router({
	routes: [
		{
			path: '/',
			name: 'main',
			component: Main
		}, {
			path: '/card',
			name: 'card',
			component: Card
		}
	]
})
