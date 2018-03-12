<template>
<div>
    <transition name="fade">
        <div class="pc-mask" v-show="visible" ></div>
    </transition>
	<transition name="fade">
		<div :class="wrapClasses" v-show="visible">
            <div class="alert-modal">
                <div class="pc-alert">
                    <div class="alert-title" v-show="hasTitle">
                        <div class="title-inner">{{title}}</div>
                        <span v-if="titleClose" class="alert-close" @click="closeAlert()">×</span>
                    </div>
                    <div :class="contentWrapClasses">
                        <div class="alert-icon" v-if="withIcon">图标占位</div>
                        <div class="alert-content">
                            {{content}}
                        </div>
                        <slot name="myContent"></slot>  
                    </div>
                    <div class="alert-handle">
                        <button class="confirm-btn" @click="confirm">{{confirmText}}</button>
                        <button v-if="cancelButton" class="cancel-btn" @click="cancel">{{cancelText}}</button>
                    </div>
                </div>
            </div>
		</div>
	</transition>
</div>
</template>
<script>
const THEMES = ["default", "contract"];
const TYPES = ['default', "error"];
    export default{
        name: "pc-alert",
        props: {
            withIcon: {
                type:Boolean,
                default: false
            },
            className: {
                type: String,
                default: ""
            },
            closable: {
                type: Boolean,
                default: true
            }, // esc 关闭
            cancelButton: {
                type:Boolean,
                default: true
            },
            theme: {
                type: Number,
                default: 1,
                validator: value => value - 1 in THEMES
            },
            type: {
                type: Number,
                default: 1,
                validator: value => value - 1 in TYPES
            },
            title: {
                type: String,
                default: "",
            },
            titleClose: {
                type:Boolean,
                default: true,
            },
            content: {
                type: String,
                default: "",
            },
            withIcon: {
                type:Boolean,
                default: false,
            },
            confirmText: {
                type: String,
                default: "确认"
            },
            cancelText: {
                type: String,
                default: "取消"
            },
            value: {
                type:Boolean,
                default: false
            }
        },
        data() {
            return{
                visible: this.value,
                wrapShow: false,
            }
        },
        mounted() {
             if (this.visible) {
                this.wrapShow = true;
            }
            if (this.closable) document.addEventListener('keydown', this.EscClose);
        },
        methods: {
            closeAlert() {
                this.$emit("hide");
            },
            cancel() {
                this.visible = false
                this.$emit('input', false);
            },
            confirm() {
                this.visible = false
                this.$emit('input', false);
                this.$emit("confirm");
            },
           
            EscClose() {
                this.$emit('input', false);
                this.$emit("hide")
            }
        },
        computed: {
            wrapClasses() {
                return [
                    "pc-alert-wrap",
                    `alert-theme-${THEMES[this.theme - 1]}`,
                    `alert-type-${TYPES[this.type -1]}`,
                    this.className.replace(/(^\s*)|(\s*$)/g, "") ? this.className : "",
                    {
                        "pc-alert-hidden": !this.wrapShow,
                    }
                ]
            },
            contentWrapClasses() {
                return [
                    "content-wrap",
                    {
                         "content-with-icon": this.icon
                    }
                   
                ]
            },
            hasTitle() {
                return this.title.replace(/(^\s*)|(\s*$)/g, "") ? true : false; 
            },
        },
        watch: {
            value (val) {
                this.visible = val;
            },
            visible(val) {
                this.wrapShow = val;
            }
        }
    }
</script>
<style lang="stylus" scoped>
.fade-enter-active {
  animation: fadeIn .3s;
}
.fade-leave-active {
  animation: fadeIn .3s reverse;
}
@keyframes fadeIn {
  0% {
    opacity: 0
  }
  50% {
    opacity: 0.5
  }
  100% {
    opacity: 1
  }
}
.pc-mask
    position fixed
    height 100%    
    top 0
    right 0
    bottom 0
    left 0
    background-color rgba(55,55,55,.6)
    z-index 1000
.pc-alert-hidden
    display none
.pc-alert-wrap
    .alert-modal
        position fixed
        height 100%
        overflow auto
        top 0
        right 0
        bottom 0
        left 0
        z-index 1000
        .pc-alert
            position relative
            width 520px
            margin 0 auto
            top 100px
            background #fff
            border-radius 6px
            .alert-title
                line-height 1
                box-sizing border-box
                padding-top 14px
                padding-right 16px
                padding-left 16px
                .title-inner
                    display inline-block
                    width 100%
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis
                    font-size 14px
                    font-weight 700
                .alert-close
                    position absolute
                    top 16px
                    right 16px
                    cursor pointer
            .alert-content
                padding 14px 16px
            .content-with-icon
                position relative
                .alert-icon
                    position absolute
                .alert-content
                    padding-left 100px
            .alert-handle
                padding 14px 16px
                overflow auto
                button
                    float right 

</style>
