export default {
    props: ['comment'],
    methods: {
        deleteMe() {
            this.$emit('shanchuwo', this.comment.id);
        }
    },
    template: `
       <div class='comment'>
           <span class='comment-author'>{{comment.author}}:</span>
           <span class='comment-content'>{{comment.content}}</span>
           <a href @click.prevent='deleteMe' class='comment-delete'>删除</a>
       </div>
    `
};
