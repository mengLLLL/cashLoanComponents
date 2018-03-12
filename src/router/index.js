import HelloWorld from "@/components/HelloWorld";
import Router from "vue-router";
import Vue from "vue";


Vue.use(Router)

export default new Router({
	routes: [{
		path: "/",
		name: "HelloWorld",
		component: HelloWorld
	}]
})

