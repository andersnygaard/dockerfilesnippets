export default {
    snippets: {
        groups: [
            {
                title: 'common',
                commands: [
                    {
                        title: 'install image',
                        action: 'FROM',
                        parameters: 1,
                        args: 'alpine'
                    },
                    {
                        title: 'set working directory',
                        action: 'WORKDIR',
                        parameters: 1,
                        args: './'
                    },
                    {
                        title: 'copy files',
                        action: 'COPY',
                        parameters: 1,
                        args: './'
                    },
                    {
                        title: 'echo',
                        action: 'CMD echo',
                        parameters: 1,
                        args: ''
                    }
                ]
            },
            {
                title: 'nodejs',
                commands: [
                    {
                        title: 'checkout',
                        action: 'RUN node...',
                        parameters: 0,
                        args: ''
                    }
                ]
            }, 
            {
                title: 'git',
                commands: [
                    {
                        title: 'checkout',
                        action: 'RUN git...',
                        parameters: 0,
                        args: ''
                    }
                ]
            },
            {
                title: 'dotnet',
                commands: [
                    {
                        title: 'dotnet restore',
                        action: 'RUN dotnet restore',
                        parameters: 0,
                        args: ''
                    }, {
                        title: 'dotnet build',
                        action: 'RUN dotnet build',
                        parameters: 0,
                        args: ''
                    }, {
                        title: 'dotnet run',
                        action: 'RUN dotnet run',
                        parameters: 0,
                        args: ''
                    }
                ]
            }
        ]
    }
}