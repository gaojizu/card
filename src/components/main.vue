<template>
	<div id="global">
		<router-link to="/card">
			<button>{{card}}</button>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: "main",
		data() {
			return {
				//新加注释
				card: "卡片" //这是卡片
			}
		}
	}
</script>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}

	#global {
		button {
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
