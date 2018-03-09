<template>
	<div class="hello">
		<htt-caption 
			:level="level"
			:text="text"
			:theme="theme"
			:textLength="textLength">
		</htt-caption>
	</div>
</template>

<script>
	import HttCaption from './Caption/Caption';
	export default {
		components: {
			'htt-caption': HttCaption,
		},
		data() {
			return {
				text: "这是一个正经的标题",
				level: 2,
				theme: 1,
				textLength: 2,
			}
		}
	}
</script>
