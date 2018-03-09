### 角标样式说明

> 需引入mark.styl样式文件

| class              | 是否必须 | 说明                                       |
| ------------------ | -------- | ------------------------------------------ |
| pc-mark            | Y        | 表明添加角标                               |
| mark-{size}        | N        | 表明角标的大小，size可选值big,medium,small |
| mark-{theme}       | N        | 表明角标样式，theme可选值red，green，grey  |
| mark-top-left      | N        | 角标的图标在左上角                         |
| mark-top-right     | N        | 角标中的图标在右上角                       |
| data-message-count | N        | 角标内容                                   |

### 使用实例

```html
<template>
<div class="hello">
    <span class="pc-mark mark-red mark-top-left" data-message-couont="22">这是一段字</span>
</div>
</template>

<script>
export default {
}
</script>
<style lang="stylus">
@import "../styles/mark.styl";
</style>

```