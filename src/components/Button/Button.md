### 按钮



### 配置文档

| 属性    | 数据类型       | 是否必填 | 默认值 | 释义                         |
| ------- | -------------- | -------- | ------ | ---------------------------- |
| size    | Number         | 否       | 1      | 按钮尺寸（1:大，2:中，3:小） |
| text    | Number\|String | 是       | -      | 按钮文本                     |
| carving | Number         | 否       | 1      | 按钮雕法（1:阴雕，2:阳雕）   |
| theme   | Number         | 否       | 1      | 按钮风格（1:中财绿，2:灰色） |
| click   | Function       | 否       | -      | 点击事件                     |
### 使用案例

```js
	<pc-button
		:size="1"
		:text="'asdf1'"
		:carving="1"
		:theme="1"
		@click="someMethod"
	/>
```