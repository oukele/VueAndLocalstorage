var commentInput = {
	template: `<div>
			用户名:<input type="text" v-model="author" />
			<p></p>
			<label>
				<span>评论内容:</span>
				<textarea v-model="content" ></textarea>
			</label>
			<p><button @click='saveData'>发布</button></p>
		</div>`,
	data() {
		return {
			author: "",
			content: ""
		}
	},
	methods: {
		saveData() {
			var author = this.author;
			var content = this.content;
			if (author.trim() === "")
				return alert("请输入用户名，小老弟！！！！");
			if (content.trim() === "")
				return alert("请输入评论内容啊，大兄弟！！！！");
			//将用户名存入localstorage中
			localStorage.setItem("input_author", author);
			
			//将用户名和内容广播（发射）出去
			this.$emit("passdatasave",{
				id:+new Date(),
				key:author,
				value:content
			});
			//发射完成后，将内容区的数据清空
			this.content = "";
			
		}
	},
	created() {
		//使用上次保存的用户名
		//如果localstorage中存在有用户名则使用，否则不使用
		this.author = localStorage.getItem("input_author") == null ? this.author : localStorage.getItem("input_author");

	}
};

var commentList = {
	template: `<div> 
		<commentItem v-for="data in todo" :item="data" :key="data.id" @delData='parentdelmsg' ></commentItem>
	</div>`,
	props: ["todo"],
	methods:{
		parentdelmsg(id){
			console.log("子组件的父亲:"+id);
			//将绑定在item中的key的值（id） 广播出去 让父组件 处理
			this.$emit("parentdel",id);
		}
	}
};

var commentItem = {
	props: ['item'],
	methods:{
		delMsg(){
			//将绑定在item中的key的值（id） 广播出去 让父组件 处理
			console.log("给父组件"+this.item.id);
			this.$emit("delData",this.item.id);
		}
	},
	template: `<div>{{item.key}}:{{item.value}} <a href @click.prevent='delMsg' >删除此评论</a></div>`
}

// 2. 导出
// default 代表默认导出，一个模块中只能有一个
export {
	commentInput,
	commentList,
	commentItem
};
