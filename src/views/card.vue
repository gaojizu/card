<template>
	<div id="global">
		<div class="card" ref="global">
			<div class="card_top">
				<h2>{{head_info}}</h2>
			</div>
			<div class="card_middle">
				<span>{{card_name}}</span>
				<input disabled v-for="(item,index) in form_data" v-model="item.value"/>
			</div>
			<div class="card_bottom">
				<div>
					<h3>{{produce}}</h3>
				</div>
				<div>
					<h3>Date: {{month}}/{{days}}</h3>
				</div>
			</div>
		</div>

		<div class="input_global">
			<input v-model="card_name"/><input oninput="this.value=this.value.replace(/[^0-9]/g,'');" maxlength="4"
											   v-for="(item,index) in form_data" v-model="item.value"
											   @click="set_new_value(item.value,index)"
											   @blur="check_new_value(item.value,index)"/>
		</div>
		<div class="input_date">
			<input v-model="month"
				   @click="set_new_month(month)"
				   @blur="check_new_month(month)"/>
			<input v-model=" days"
				   @click="set_new_days(days)"
				   @blur="check_new_days(days)"/>
		</div>

	</div>
</template>

<script>
	export default {
		name: "card",
		data() {
			return {
				card_name: '卡号',
				produce: '工银储蓄卡',
				head_info: '中国工商银行',
				head_info_after: '金卡',
				month: '02',
				days: '28',
				form_data: [{
					value: '####'
				}, {
					value: '####'
				}, {
					value: '####'
				}, {
					value: '####'
				}]
			}
		},
		methods: {
			/**
			 * @set_new_value 鼠标点击的时候  将input里最后的值更新到store
			 * @param val 实参
			 * @param index 记录input中数组下标
			 */
			set_new_value(val, index) {
				let that = this;
				that.$store.dispatch("actions_card_num", val);
				that.form_data[index].value = '';
			},
			/**
			 * @check_new_value 鼠标失去焦点的时候  检查元素是否满足条件，不满足时候恢复值
			 * @param val 满足条件 4位 && 数字
			 * @param index 重置数组元素下标的值
			 */
			check_new_value(val, index) {
				let that = this;
				if (val.length === 4 && typeof val === "string") {
					//nothing
				} else {
					if (!that.form_data[index].value) {
						that.form_data[index].value = "####";
					} else {
						//将store里面存储的数据重置到不满足条件的数据中
						that.form_data[index].value = that.$store.state.card_last_value
					}

				}
			},
			/**
			 * @set_new_month 重置月份最新的值 到store
			 * @param val 值
			 */
			set_new_month(val) {
				this.$store.dispatch("actions_card_num", val);
				this.month = '';
			},
			/**
			 * @check_new_month 检验月份合法性
			 * @param val 值
			 */
			check_new_month(val) {
				if (Number(val) < 0 || Number(val) > 12 || !val) {
					this.month = this.$store.state.card_last_value
				} else {
					//nothing
				}
			},
			/**
			 * @set_new_days 重置天数最新的值 到store
			 * @param val 值
			 */
			set_new_days(val) {
				this.$store.dispatch("actions_card_num", val);
				this.days = '';
			},
			/**
			 * @check_new_days 检验天数合法性
			 * @param val 值
			 */
			check_new_days(val) {
				if (Number(this.month) === 2) {
					//28天
					if ((Number(val) > 28) || Number(val) < 0 || !val) this.days = this.$store.state.card_last_value
				} else if (this.check_month(Number(val)) === true) {
					//31天
					if (Number(val) > 31 || Number(val) < 0 || !val) this.days = this.$store.state.card_last_value
				} else {
					//30天
					if (Number(val) > 30 || Number(val) < 0 || !val) this.days = this.$store.state.card_last_value
				}
				//反转卡片
				this.$refs.global.style = "transform:rotate(-360deg);transition: all 4s";
			},
			/**
			 * @check_month 检验月份与天数的映射
			 * @param val
			 * @returns {boolean}
			 */
			check_month(val) {
				let month = [1, 3, 5, 7, 8, 10, 12];
				return month.includes(val)
			}
		}
	}
</script>

<style scoped lang="less">
	* {
		padding: 0;
		margin: 0;
	}

	#global {
		.card {
			margin: 5% 40% 0% 30%;
			width: 500px;
			height: 300px;
			background-image: url("../assets/imgs/card_bg.jpg");
			border-radius: 8px;

			.card_top {
				height: 105px;
				width: 100%;
				color: #FFFFFF;

				h2 {
					font-size: xx-large;
					padding-top: 30px;
				}

				h2::after {
					content: '金卡VIP';
					font-size: x-large;
					margin-left: 20px;
				}
			}

			.card_middle {
				height: 60px;
				width: 100%;
				display: flex;

				span {
					float: left;
					display: inline-block;
					width: 25%;
					line-height: 60px;
					color: #FFFFFF;
					font-size: 25px;
					font-weight: 700;
				}

				input {
					width: 16%;
					font-size: 30px;
					text-align: center;
					opacity: 1;
					background: rgba(0, 0, 0, 0);
					color: #000000;
					font-weight: 500;
					border: none;
					margin-left: 10px;
				}
			}

			.card_bottom {
				height: 135px;
				width: 100%;

				div {
					float: left;
					width: 48%;
					height: 135px;
					line-height: 135px;
					font-size: x-large;

					h3 {
						color: #000000;
					}
				}

				div:last-child {
					margin-left: 10px;
					width: 48%;
					height: 135px;
				}

				div:last-child:after {
					content: "";
					clear: both;
				}
			}
		}

		.input_global {
			margin: 5% 40% 0% 30%;
			width: 500px;
			height: 100px;

			input:first-child {
				width: 100px;
				height: 30px;
				text-align: center;
				border-bottom: 2px solid #F40;
				color: #f40;
				outline: none
			}

			input {
				width: 80px;
				height: 30px;
				text-align: center;
				margin-left: 10px;
				border: none;
				border-bottom: 2px solid #000000;
				outline: none
			}
		}

		.input_date {
			margin: 1% 40% 0% 30%;
			width: 500px;
			height: 100px;

			input {
				width: 80px;
				height: 30px;
				text-align: center;
				margin-left: 10px;
				border: none;
				border-bottom: 2px solid #000000;
				outline: none
			}

			input:last-child::before {
				content: "/";
			}
		}
	}
</style>
