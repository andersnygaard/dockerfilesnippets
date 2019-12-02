export default {
    name: 'PreviewPane',
    props: ['script'],
    methods: {
        calculatePreview: function(){
            var result = '';
            
            this.script.forEach(command => {
                result += command.action;
                if(command.args){
                    result += ' ' + command.args;
                }
                result += '\n';
            });

            result += '\n\n';

            return result;
        }
    },
    data: function() {
        return {
            text: this.calculatePreview()
        };
    },
    watch: { 
        script: function(newVal, oldVal) { // watch it
            this.text = this.calculatePreview();
        }
    },
    template: `<div class="col">
        <h3>Preview</h3>
        <br>
        <textarea>{{text}}</textarea>
    </div>`
}