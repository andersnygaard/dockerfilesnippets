export default {
    name: 'SnippetsPane',
    props: ['snippets'],
    data: () => {
        return {
            
        };
    },
    template: `<div class="col">
        <h3>Available snippets</h3>
        <br>
        <ul>
            <li v-for="snippet in snippets">
                {{ snippet.title }}

                <ul>
                    <li v-for="command in snippet.commands">
                        <a href="#" @click="$emit('snippetCommandSelected', command)">{{ command.title }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>`
}