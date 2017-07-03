Vue.component('but',{
	name:'app',
	data:function(){
		return {}
	},
	methods:{
		child:function(){
			var that=this;
			that.$emit('ft',7547)
		},
		childsay:function(){
			this.$refs.child.touchChild()
			alert('it is child')
		}
	},
	template:'<div><button v-on:click="child">submit</button></div>'
})