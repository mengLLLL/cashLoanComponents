<template>
	<button type="button" :class="className" @click="handleClick">
		<span>{{text}}</span>
	</button>
</template>
<script>
	import isString from "lodash/isString";
	const SIZES = ["big", "medium", "small"];
	const CARVING = ["yin", "yang"];
	const THEMES = ["green", "gray"];
	export default {
		name: "pcButton",
		props: {
			size: {
				type: Number,
				required: 1,
				validator: value => value - 1 in SIZES,
				default: 1
			},
			text: {
				type: [Number, String],
				validator: value => value.length < 6,
				default: 1
			},
			carving: {
				type: Number,
				validator: value => value - 1 in CARVING,
				default: 1
			},
			theme: {
				type: Number,
				validator: value => value - 1 in THEMES,
				default: 1
			}
		},
		computed: {
			className(){
				return [
					"pc-button",
					SIZES[this.size - 1],
					CARVING[this.carving - 1],
					THEMES[this.theme - 1]
				];
			}
		},
		methods: {
			handleClick(e){
				this.$emit("click", {
					e
				});
			}
		}
	}
</script>
