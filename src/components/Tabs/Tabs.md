### Tab组件说明

| 属性  | 数据类型 | 是否必填 | 默认值      | 释义            |
| ----- | -------- | -------- | ----------- | --------------- |
| value | String   | N        | 第一个panel | 当前显示的panel |

### TabPanel组件说明
| 属性  | 数据类型 | 是否必填 | 默认值 | 释义                                       |
| ----- | -------- | -------- | ------ | ------------------------------------------ |
| label | String   | Y        | ""     | 该panel对应name                            |
| name  | String   | Y        | ""     | 该panel的身份属性,与Tab组件的value属性对应 |

### 完整示例

```html
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

```