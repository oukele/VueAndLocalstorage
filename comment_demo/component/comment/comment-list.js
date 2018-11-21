import commentItem from './comment-item.js';

export default {
    props: ['comments'],
    methods: {
        doDelete(id) {
            this.$emit('shanchuwo', id);
        }
    },
    template: `
       <div class='clist'>
           <comment v-for='c in comments'
               :comment='c'
               :key='c.id'
               @shanchuwo='doDelete'>
           </comment>
       </div>
    `,
    components: {
        comment: commentItem
    }
};
