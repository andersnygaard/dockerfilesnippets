import SortingPaneItem from './SortingPaneItem.js';
export default {
    name: 'SortingPane',
    props: ['script'],
    components: {
        SortingPaneItem
    },
    methods: {
        onSnippetCommandRemoved(id){
            this.$emit('snippetCommandRemoved', id);
        },
        onArgsUpdated(id, args){
            this.$emit('argsChanged', id, args);
        }
    },
    data: () => {
        return {
            text: ''
        };
    },
    template: `<div class="col">
        <h3>Sort</h3>
        <br>
        <ul>
            <SortingPaneItem v-for="command in script" :id="command.id" :title="command.title" :parameters="command.parameters" :args="command.args" @snippetCommandRemoved="onSnippetCommandRemoved" @argsUpdated="onArgsUpdated"></SortingPaneItem>
        </ul>
    </div>`
}