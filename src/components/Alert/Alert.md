### 弹窗组件说明

| 属性         | 数据类型 | 是否必填 | 默认值 | 释义                                              |
| ------------ | -------- | -------- | ------ | ------------------------------------------------- |
| value        | Boolean  | N        | false  | 弹窗是否显示，通过外层调用的时候v-model来双向绑定 |
| title        | String   | N        | ""     | 弹窗标题                                          |
| content      | String   | N        | ""     | 弹窗内容                                          |
| titleClose   | Boolean  | N        | false  | 标题右侧关闭按钮                                  |
| className    | String   | N        | ""     | 自定义类名，会加在最外层                          |
| withIcon     | Boolean  | N        | false  | 弹窗内容是否有图标                                |
| closable     | Boolean  | N        | true   | 是否允许esc关闭弹窗                               |
| confirmText  | String   | N        | 确认   | 确认按钮文字                                      |
| cancelText   | String   | N        | 取消   | 取消按钮文字                                      |
| cancelButton | Boolean  | N        | true   | 是否有取消按钮                                    |
| theme        | Number   | N        | 1      | 弹窗风格，1：默认， 2： 带滚动                    |
| type         | Number   | N        | 1      | 弹窗类型，1：默认，2：错误                        |

### 弹窗具名Slot

| 名称      | 释义              |
| --------- | ----------------- |
| myContent | 自定义content内容 |

### 事件

| 事件名  | 说明             | 返回值 |
| ------- | ---------------- | ------ |
| hide    | 隐藏弹窗         | 无     |
| cancel  | 取消按钮回调函数 | 无     |
| confirm | 确认按钮回调函数 | 无     |

### 示例

```html
<template>
<div class="hello">
	<button @click="this.modal1 = true">显示alert</button>
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
import Alert from "../components/Alert/Alert";
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
		onHide() {
		},
		onCancel() {
		},
		onConfirm() {
			
		}
	}
}
</script>
```