import { useStaticQuery, graphql } from "gatsby"

export const useSiteData = () => {
  const siteData = useStaticQuery(
    graphql`
      query SiteMetaData {

        allGraphCmsNavBar(sort: {fields: order, order: ASC}) {
            edges {
                node {
                    id
                    order
                    name
                    href
                    dropdownNavs
                    dropdownHrefs
                    isDropDown
                }
            }
        }

        allGraphCmsPanel(sort: {fields: order, order: ASC}) {
            edges {
                node {
                id
                href
                name
                order
                width
                image {
                    url
                }
                }
            }
        }

        
      }
    `
  )
  return siteData
}