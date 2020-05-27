<template>
	<div id="app">
		<router-view/>
	</div>
</template>


<script>
	export default {
		name: 'App',
		data() {
			return {
				//新加了app的注释
				name : ''
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
