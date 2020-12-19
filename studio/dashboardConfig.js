export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fddade2714dafb3cb2c5a33',
                  title: 'Sanity Studio',
                  name: 'sanitybolierplate-studio',
                  apiId: 'dd4ecf8c-c23c-4417-ab8f-b7c4a20f6599'
                },
                {
                  buildHookId: '5fddade2238605b65b790ab4',
                  title: 'Blog Website',
                  name: 'sanitybolierplate',
                  apiId: '07bc3dd2-3816-49e6-9a38-655f0bba959c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/albertnorberg/sanityBolierPlate',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanitybolierplate.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
