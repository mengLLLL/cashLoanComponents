<template>
    <div class="pc-input">
        <label :for="labelFor" :class="labelClass" >{{labelText}}</label>
        <div :class="inputClass">
            <input 
                :disabled="disabled" 
                :id="labelFor"
                :readonly="readonly" 
                :placeholder="placeholder" 
                :type="inputType" 
                :value="currentValue" 
                @keyup="myValidator"
            />
        </div>
        <slot name="inputTip"></slot>
    </div>
</template>
<script>
    const SIZES = ["big", "medium", "small"];
    const TEXTALIGN = ["text-left", "text-right"];
    export default{
        name: "pc-input",
        props: {
            size: {
                type: Number,
                default: 2,
                validator:value => value - 1 in SIZES
            }, 
            labelText: {
                type: String,
                default: ""
            },
            labelTextAlign: {
                type: Number,
                default: 1,
                validator:value => value - 1 in TEXTALIGN
            },
            value: {
                type: String,
                default: ""
            }, // 默认值
            validateErrorMsg: {
                type: String,
                default: ""
            },
            validator: {
                type: [Function, RegExp],
                default: _ => {}
            },
            placeholder: {
                type: String,
                default: ""    
            }, // 提示
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            inputType: {
                type: String,
                default: "text"
            }
        },
        data() {
            return {
                currentValue: this.value,
            }
        },
        created() {
        },
        methods: {
            myValidator() {
                const mValidator = this.validator;
                if (mValidator instanceof Function && mValidator(this.currentValue) || mValidator instanceof RegExp && mValidator.test(this.currentValue)) {
                    // 校验成功, 做处理
                } else {
                    // 校验失败, 做处理
                }
            }
        },
        computed: {
            inputClass() {
                let className = [
                    "input-wrapper",
                    `input-${SIZES[this.size - 1]}`, 
                    {
                        "input-entered": this.value,
                        "input-disabled": this.disabled,
                        "input-readonly": this.readonly
                    }
                ];
                return className;
            },
            labelClass() {
                return ["input-label", TEXTALIGN[this.labelTextAlign - 1]];
            },
            labelFor() {
                return Math.random();
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "../../styles/input.styl";
</style>
