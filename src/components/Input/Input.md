### input组件说明

| 属性             | 数据类型         | 是否必填 | 默认值 | 释义                                 |
| ---------------- | ---------------- | -------- | ------ | ------------------------------------ |
| size             | Number           | N        | 1      | 输入框的规格,(1: 大， 2：中， 3：小) |
| labelText        | String           | N        | ""     | 输入组件的文字                       |
| labelTextAlign   | Number           | N        | 1      | 标签文字对齐方式(1: 左对齐， 2：右对齐) |
| value            | String           | N        | ""     | 输入框的默认值                       |
| placeHolder      | String           | N        | ""     | 输入框的placeholder                  |
| disabled         | Boolean          | N        | false  | 是否禁用                             |
| readonly         | Boolean          | N        | false  | 是否只读                             |
| inputType        | String           | N        | "text" | 输入框类型                           |
| validateErrorMsg | String           | N        | ""     | 输入框校验错误信息                   |
| validator        | Function或RegExp | N        | _=>{}  | 输入框校验器                         |

### input组件Slot

| 名称     | 说明                |
| -------- | ------------------- |
| inputTip | 对该input的解释说明 |

### 完整示例

```html
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
import HttInput from './Input';
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
            disabled: false,
            readonly: false,
            inputType: "text",

        }
    }
}
</script>
```