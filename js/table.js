Vue.component('tab-el',{
	template:'<table class="table">\
		<tr class="captr">\
			<td v-for="item in opts.title">{{item}}</td>\
		</tr>\
		<tr class="othtr" v-if="!opts.data.length">\
			<td class="noresult" :colspan="opts.title.length">{{opts.empty}}</td>\
		</tr>\
		<tr class="othtr" v-for="(item, index) in opts.data" v-else>\
			<td>{{item.name}}</td><td>{{item.age}}</td><td>{{item.sex}}</td><td>{{item.fav|filterFav}}</td>\
			<td class="lasttd" v-bind:data="opts.set" v-if="opts.set.length"><a v-for="item in opts.set" href="javascript:;" v-on:click="item.fn(index)">{{item.name}}</ a></td>\
		</tr>\
	</table>',
	props:['options'],
	data:function(){
		var tempObj=this.options;
		// console.log(tempObj)
		return {
			opts:{
				data:tempObj.data||'',
				title:tempObj.title,
				empty:tempObj.empty||'无数据！',
				set:tempObj.set||'',
				backfn:function(){

				}
			}
		}
	},
	filters:{
		filterFav:function(val){
			return val||'/'
		}
	}
})