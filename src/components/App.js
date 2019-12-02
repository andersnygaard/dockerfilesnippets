import SnippetsPane from './SnippetsPane.js';
import PreviewPane from './PreviewPane.js';
import SortingPane from './SortingPane.js';
import data from './../data/SnippetsData.js';

export default {
    name: 'App',
    components: {
        SnippetsPane,
        SortingPane,
        PreviewPane
    },
    data: () => {
        return {
            snippets: data.snippets.groups,
            script: []
        };
    },
    methods: {
        uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
            });
        },
        onSnippetCommandRemoved(id){
            this.script = this.script.filter( function(item) {
                return !(item.id === id);
            });
        },
        onSnippetCommandSelected(command) {
            command.id = this.uuidv4();
            this.script.push(command);
        },
        onArgsUpdated(id, args){
            var index = 0;
            var command;

            for(var i = 0; i < this.script.length; i++){
                if(this.script[i].id === id){
                    index = i;
                    command = this.script[i];
                }
            }

            command.args = args;

            this.$set(this.script, index, command);
        }
    },
    template: `
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3>Dockerfile-snippets</h3>
                </div>
            </div>
            <div class="row">
                <SnippetsPane :snippets="snippets" @snippetCommandSelected="onSnippetCommandSelected"></SnippetsPane>
                <SortingPane :script="script" @snippetCommandRemoved="onSnippetCommandRemoved" @argsChanged="onArgsUpdated"></SortingPane> 
                <PreviewPane :script="script"></PreviewPane> 
            </div>
        </div>
    `
};