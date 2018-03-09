<template>
    <div class="pc-tab">
        <div class="tab-header">
            <label v-for="(item, key) in navList" :data-message-couont="22" :class="navClass(item)" :key="key" @click="change(item.name)">{{item.label}}</label>
        </div>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'pc-tabs',
        props: {
            value:{
                type: [Number, String],
                default: 0
            }
        },
        data() {
            return{
                navList: [],
                activeKey: this.value ? this.value : 0,
            }
        },
        mounted() {
            this.updateNav();
            this.updateStatus();
        },
        methods: {
            getTabs() {
                return this.$children.filter(item => item.$options.name === 'tabPanel');
            },
            updateNav() {
                this.navList = [];
                this.getTabs().forEach((pane, index) => {
                    
                    this.navList.push({
                        label: pane.label,
                        index: pane.currentName || index,
                        name: pane.name
                    });
                });
            },
            updateStatus () {
                // 更新tabPanel的显示
                const tabs = this.getTabs();
                tabs.forEach(tab => tab.show = (tab.name === this.activeKey) || (tab.currentName === this.activeKey));
            },
            change(name) {
                // 点击更新
                this.activeKey = name;
            },
            navClass(item) {
                return [
                    "tab-nav",
                    {
                        "tab-active": item.name === this.activeKey
                    },
                    "pc-mark",
                ]
            }
        },
        watch: {
            value() {
                return this.value;
            },
            activeKey () {
                this.updateNav();
                this.updateStatus();
            }
        }
    }
</script>
<style lang="stylus">
	@import "../../styles/mark.styl";
</style>