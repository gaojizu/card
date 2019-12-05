<template>
	<div id="global">
		<router-link to="/card">
			<button>卡片</button>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: "main"
	}
</script>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}

	#global {
		button{
			border: none;
			border-radius: 4px;
			background: #42b983;
			width: 100px;
			height: 40px;
			color: #FFF;
			font-weight: 700;
			font-size: 20px;
		}

	}
</style>
