var aaa = "ksdjfkdj";

// 1. 定义
var commentInput = {
    template: `
        <div class='cinput'>
            <label>
               <span>用户名</span>
               <input v-model='author'>
            </label>
            <label>
                <span>评论内容</span>
                <textarea v-model='content'></textarea>
            </label>
            <footer>
                <button @click='doSave'>发布</button>
            </footer>
        </div>
    `,
    data() { return {
        author: '',
        content: ''
    }},
    methods: {
        doSave() {
            if (!this.author) {
                return alert('用户名不能为空');
            }
            if (!this.content) {
                return alert('内容不能为空');
            }

            // 更新保存在 localStorage 里的作者名
            localStorage.setItem('vvv-authorname', this.author);

            // 发射、广播出去
            this.$emit('woyaobaocun', {
                id: +new Date(),
                author: this.author,
                content: this.content
            });

            // clear
            this.content = '';
        }
    },
    created() {
        const authorname = localStorage.getItem('vvv-authorname');
        if (authorname) {
            this.author = authorname;
        }
    }
};

// 2. 导出
// default 代表默认导出，一个模块中只能有一个
export default commentInput;
