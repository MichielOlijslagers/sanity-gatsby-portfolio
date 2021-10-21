export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6171c3cc4116522539ba1cf6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n6n55xa3',
                  apiId: '1884c7b2-d898-4915-87f8-98ef22c8725d'
                },
                {
                  buildHookId: '6171c3cc5dcb661faeabfea3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1oizrjmx',
                  apiId: 'a0e7d24f-07da-4a2a-9a35-d234e345991a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MichielOlijslagers/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1oizrjmx.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
