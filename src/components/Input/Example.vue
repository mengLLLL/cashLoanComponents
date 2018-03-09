<template>
	<div class="hello">
		<htt-input
			:inputType="inputType" :size="size" labelText="labelText"
			:labelTextAlign="labelTextAlign"
			:value="value" validateErrorMsg="validateErrorMsg"
			:validator="validator" :placeholder="placeholder"
			:disabled="disabled" :readonly="readonly">
			<p slot="inputTip">	请输入文字 </p>
		</htt-input>
	</div>
</template>

<script>
	import HttInput from './Input/Input';
	export default {
		components: {
			'htt-input': HttInput,
		},
		data() {
			return {
				size: 1,
				labelText: "标签文字",
				labelTextStyle: 'red-text',
				labelTextAlign: 1,
				value: '默认值',
				validateErrorMsg: "输入不能为空",
				// validator: new RegExp('e'),
				validator: function(value) {
					// 校验函数
				},
				placeholder: '请输入...',
				disabled: true,
				readonly: false,
				inputType: "text",

			}
		}
	}
</script>
