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
                  buildHookId: '60406f9d94ea846e164d3f04',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-demo-studio',
                  apiId: 'ba3bcb86-c091-4970-bf62-9c69d4d378f7'
                },
                {
                  buildHookId: '60406f9d417d1c6ae69adc24',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-demo',
                  apiId: '1f3e42e2-5b52-4961-bf4f-238b0895a130'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pkeyser10/sanity-kitchen-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-demo.netlify.app', category: 'apps'}
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
