exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
        allGraphCmsPage {
            edges {
                node {
                id
                pageName
                slug
                }
            }
        }
    }
  `)

  result.data.allGraphCmsPage.edges.forEach(({ node }) => {

    if (node.pageName == "Home" || node.pageName == "home" || node.pageName == "" || node.pageName == "/"){
        createPage({
            path: node.slug.toLowerCase(),
            component: require.resolve(`./src/templates/Home/Home.jsx`),
          })
    } else {
    createPage({
      path: node.slug.toLowerCase(),
      component: require.resolve(`./src/templates/Page/Page.jsx`),
      context: { id: node.id },
    })
    }
  })
}