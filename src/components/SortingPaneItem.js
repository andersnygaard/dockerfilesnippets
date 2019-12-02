export default {
    name: 'SortingPaneItem',
    props: ['id', 'title', 'parameters', 'args'],
    template: `
        <li>
            <a href="#" @click="$emit('snippetCommandRemoved', id)">{{ title }}</a>
            <div v-if="parameters > 0">
                <input :value="args" @keyup="$emit('argsUpdated', id, $event.target.value)">
            </div>
        </li>
    `
}