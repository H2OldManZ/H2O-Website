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

        allGraphCmsPage {
          nodes {
            id
            pageName
            slug
            
          }
        }

        allGraphCmsTeamMember(sort: {fields: lastName, order: ASC}) {
            edges {
              node {
                id
                firstNameS
                freeTime
                email
                funFact
                hometownS
                lastName
                study
                role
                why
                picture {
                  url
                }
              }
            }
          }

        allGraphCmsCommunityGroup(sort: {fields: order, order: ASC}) {
          nodes {
            name
            contactNames
            contactEmails
            time
            location
          }
        }
        
      }
    `
  )
  return siteData
}