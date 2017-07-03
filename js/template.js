Vue.component('modal',{
	template:'<div :class="[\'cfmbox\',hideCfm?\'noneit\':\'\']" @click="cancel">\
		<div class="confirm" @click.stop="prevent">\
			<div class="content">\
				确定？\
			</div>\
			<div class="btnbox">\
				<button class="cancel" @click="cancel">取消</button>\
				<button class="sure" v-on:click="sure">确定</button>\
			</div>\
		</div>\
	</div>',
	props:['show'],
	data:function(){
		var show=this.show
		console.log(show)
		return {hideCfm:show}
	},
	methods:{
		prew:function(){
			this.hideCfm=false
		},
		prevent:function(e){
			e.preventDefault()
		},
		sure:function(obj){
			this.hideCfm=true
			this.$emit('sure')
		},
		cancel:function(){
			this.hideCfm=true
		}
	}
})