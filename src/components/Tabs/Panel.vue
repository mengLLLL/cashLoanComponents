<template>
    <div :class="panelClasses" v-show="show"><slot></slot></div>
</template>
<script>
    export default{
        name: 'tabPanel',
        props: {
            label: {
                type: String,
                default: '标题一',
                required: true
            },
            name: {
                type: String,
                default: "",
                required: false
            }
        },
        data() {
            return {
                show: true
            }
        },
        computed: {
            panelClasses() {
                return [
                    "tab-panel",
                ]
            }
        }
    }
</script>