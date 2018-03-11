<template>
<div class="hello">
	<Tabs value="name2">
		<TabPane label="标签一" name="name1">标签一的内容</TabPane>
		<TabPane label="标签二" name="name2">标签二的内容</TabPane>
		<TabPane label="标签三" name="name3">标签三的内容</TabPane>
	</Tabs>
</div>
</template>

<script>
import Tabs from './Tabs/Tabs';
import TabPane from './Tabs/Panel';
export default {
	name:'hello',
	components: {
		Tabs,
		TabPane
	}
}
</script>