exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
        allGraphCmsPage(filter: {enabled: {eq: true}}) {
            edges {
                node {
                id
                pageName
                slug
                pageTemplate
                }
            }
        }
    }
  `)

  result.data.allGraphCmsPage.edges.forEach(({ node }) => {
    var template = "./src/templates/Page/Page.jsx"
    if (node.pageTemplate == "Home"){
      template = "./src/templates/Home/Home.jsx"
    }
    createPage({
      path: node.slug.toLowerCase(),
      component: require.resolve(template),
      context: { id: node.id },
    })
  })
}