<template>
    <div :class="captionWrapClasses">
        <h1 v-if="level === 1">{{text}}</h1>
        <h2 v-if="level === 2">{{text}}</h2>
        <h3 v-if="level === 3">{{text}}</h3>
    </div>
</template>
<script>
const LEVEL = ["big", "medium", "small"];
const THEMES = ["default","green", "grey"]
const TEXTLENGTH = ["big", "medium", "small"];
    export default{
        name: "pc-caption",
        props:{
            text: {
                type: String,
                default: "",
                required: true
            },
            level: {
                type: Number,
                default: 2,
                validator: value => value > 0 && value < 4
            }, // 级别
            theme: {
                type: Number,
                default: 1,
                validator: value => value - 1 in THEMES
            },
            textLength: {
                type: Number,
                default: 2, // 没想好
                validator: value => value - 1 in TEXTLENGTH
            }
        },
        computed: {
            captionWrapClasses() {
                return [
                    "pc-caption",
                    `caption-${LEVEL[this.level - 1]}`,
                    `caption-${THEMES[this.theme - 1]}`,
                    this.captionLength
                ]
            },
            captionLength() {
                return  this.textLength ? `textlength-${TEXTLENGTH[this.textLength - 1]}` : "";
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import "../../styles/caption.styl";
</style>