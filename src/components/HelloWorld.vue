<template>
<div class="hello">
	<button @click="showModal()">显示alert</button>
	<Alert 
		:content="content" 
		:className="className"
		:confirmText="confirmText"
		:cancelText="cancelText"
		:cancelButton="cancelButton"
		:titleClose="titleClose"
		:title="title" 		
		:theme="theme"
		:type="type"
		v-model="modal1"
		@hide="onHide"
		@cancel="onCancel"
		@confirm="onConfirm"
		>
	<p slot="myContent">
		hello
	</p>
	</Alert>
</div>
</template>

<script> 
import Alert from "../components/Alert";
export default {
	name:"hello",
	components: {
		Alert
	},
	data() {
		return{
			title: "正经的标题",
			content: "确认删除吗",
			modal1: false,
			titleClose: false,
			className: "my-class",
			withIcon: true,
			closable: true,
			confirmText: '好的',
			cancelText: '不行',
			theme: 2,
			type: 2,
			cancelButton: false
		}
	},
	methods: {
		showModal() {
			this.modal1 = true
		},
		onHide() {
		},
		onCancel() {
		},
		onConfirm() {
			
		}
	}
}
</script>