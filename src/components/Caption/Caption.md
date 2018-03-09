### 标题组件说明

| 属性       | 数据类型 | 是否必填 | 默认值 | 释义                                        |
| ---------- | -------- | -------- | ------ | ------------------------------------------- |
| text       | String   | Y        | ""     | 标题内容                                    |
| level      | Number   | N        | 3      | 标题级别(1:h1，2：h2，3：h3 )               |
| theme      | Number   | N        | 1      | 标题主题（1：default， 2：green， 3：grey） |
| textLength | Number   | N        | 2      | 标题长度                                    |

### 完整示例

```html
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
```