import Layout from '../components/mylayout.js'
import Banner from '../components/banner.js'
import Image from '../components/image.js'
import SimpleText from '../components/simpletext.js'
import RichTextField from '../components/richtextfield.js'
import fetch from 'isomorphic-unfetch'
import Link from "next/link"
import Head from 'next/head'
import TwoColumn from '../components/twocolumn/layout.js'

export default class Dyn extends React.Component {
  
  static async getInitialProps({req, res, route, query}) {
    let siteLanguage = query.lang != null ? query.lang : 'en-AU';
    let urlId = query.id != null ? query.id : '';
    let siteName = query.site != null ? query.site : '';
    let liveSiteDomain = 'c1.adis.ws'
    let siteDomain = ''
    let siteId = ''
    let page = ''

    // Determine if we use preview or live site, preview site is used mostly by 
    // Amplience preview feature within CMS
    siteDomain = query.api != null && query.api != '' ? query.api : liveSiteDomain

    // This block identifies the site Id to use when in production
    if (req != null)
    {
      if (req.headers['x-forwarded-host'] == 'ativo.rhm.net.au'){
        siteName = 'ativo'
      } else if (req.headers['x-forwarded-host'] == 'squealingpig.rhm.net.au'){
        siteName = 'squealingpig'
      }
    }

    // Does handling of some screwy page params for internal routing
    if (query.page != '/')
      page = '/' + query.page;
    if (page == '/undefined')
      page = '/'

    // Get Site Id / Name
    switch (siteName) {
      case 'ativo':
        siteName = 'ativo'
        siteId = '99757712-7a28-4ce5-94f3-82c2f936cbc6'
        break;
      default:
        siteName = 'squealingpig'
        siteId = 'e904f0cd-7f15-4773-807a-f35f322b18e8'
        break;
    }
    
    // Url for Root of CMS Tree, returning all nodes
    const treeRootUrl = `https://${siteDomain}/cms/content/query?query=%7b%22sys.iri%22:%22http://content.cms.amplience.net/${siteId}%22%7d&scope=tree&store=twe&fullBodyObject=true`
    
    // Get route from Data
    var slugId = '';
    var dataMenu = ''
    await fetch(treeRootUrl)
      .then(response => response.json())
      .then(json => {
        slugId = this.getCustomRoute(json, page)
        dataMenu = json
      })
    
    var pageId = ''
    if(urlId!='')
      pageId = urlId
    else if(slugId!='')  
      pageId = slugId
    else 
      pageId = siteId
    
    const url = `https://${siteDomain}/cms/content/query?query=%7b%22sys.iri%22:%22http://content.cms.amplience.net/${pageId}%22%7d&scope=tree&store=twe&fullBodyObject=true`
    const response = await fetch(url)
    const data = await response.json()

    return { data, dataMenu, siteName, siteLanguage, page }
  }  

  mapTypeToComponent = (typeName, componentProps, image, siteLanguage, componentList) => {
    componentProps.siteLanguage = siteLanguage

    switch(typeName) {
      case 'https://raw.githubusercontent.com/janxl/nextjs/master/schemas/image.json':
        return <Image {...componentProps} image={image} />
      case 'https://raw.githubusercontent.com/janxl/nextjs/master/schemas/banner.json':
        return <Banner {...componentProps} image={image} />
      case 'https://raw.githubusercontent.com/janxl/nextjs/master/schemas/simpletextblock.json':
        return  <SimpleText {...componentProps} />
      case 'https://raw.githubusercontent.com/janxl/nextjs/master/schemas/richtextfield.json':
        return <RichTextField {...componentProps} />
      case 'https://raw.githubusercontent.com/janxl/nextjs/master/schemas/twocolumncontainer.json':
        return <TwoColumn {...componentProps} componentList={componentList} siteLanguage={siteLanguage} />
    }
  }

  // This method gets custom routes by looking up the nav path and finding the id
  static getCustomRoute = (data, path) => {
    if (path == null || path == '')
      path = '/'

    let componentList = data['@graph']
    const componentProps = componentList.find((item) => item['slug'] === path)
    
    if (componentProps != null){
      let componentId = componentProps.page['@id']
      if (componentId.length >= 0){
        let parts = componentId.split('/')
        if (parts.length >= 0){
          return parts[parts.length - 1]
        }
      }
    }
    return ''
  }

  getComponentProps = (componentId, componentList) => {
    return componentList.find((item) => item['@id'] === componentId)
  }

  getGuidFromId(componentId){
    if (componentId.length >= 0){
      let parts = componentId.split('/')
      
      if (parts.length >= 0){
        return parts[parts.length - 1]
      }
    }
    return ''
  }

  getMenu(menuComponentList, siteName){
    const { url } = this.props

    if (menuComponentList[0].slugs != null ){

      return <React.Fragment>
      {
        menuComponentList[0].slugs.map((item, index) => {
          const componentProps = this.getComponentProps(item['@id'], menuComponentList)
          
          let pageId = this.getGuidFromId(componentProps.page['@id'])
          let navUrl = `/index?site=${siteName}&id=${pageId}`
          let customRoute = navUrl
          
          return <Link prefetch href={customRoute} as={componentProps.slug} key={`key-${index}`}>
            <a className={`c-nav__item ${url.asPath === customRoute ? 'active' : ''}`}>{componentProps.navLabel != null ? componentProps.navLabel.values[0].value : ''}</a>
          </Link>
        }
      )}</React.Fragment>
    }
  }

  renderSingleComponent = (componentList, siteLanguage) => {
    let image = null
    const imageList = componentList.filter((item) => item.mediaType === 'image')
    let componentProps = this.getComponentProps(componentList[0]['@id'], componentList)

    if (componentProps.background || componentProps.image) {
      image = imageList.find((imageItem) => (componentProps.background && imageItem['@id'] === componentProps.background['@id']) || (componentProps.image && imageItem['@id'] === componentProps.image['@id']))
    }

    return this.mapTypeToComponent(componentProps['@type'], componentProps, image, siteLanguage, componentList)
  }

  render() {
    const { data, dataMenu, siteLanguage, siteName } = this.props
    const componentList = data['@graph']
    const menuComponentList = dataMenu['@graph']
    const imageList = componentList.filter((item) => item.mediaType === 'image')

    return (
      <div>
        <Head>
          <title>Treasure Wine Estates - {siteName}</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          <link rel="stylesheet" href={`../static/styles/${siteName}/styles.css`} crossOrigin="anonymous" />
        </Head>
        <div className='c-site-wrapper'>
          <nav className='nav'>
            <div className="c-nav">
              {
                this.getMenu(menuComponentList, siteName)
              }
            </div>
          </nav>
          <Layout>
            { componentList[0] && componentList[0].slotContent ? componentList[0].slotContent.map((item, index) => {
                let image = null
                const componentProps = this.getComponentProps(item['@id'], componentList)

                if (componentProps.background || componentProps.image) {
                  image = imageList.find((imageItem) => (componentProps.background && imageItem['@id'] === componentProps.background['@id']) || (componentProps.image && imageItem['@id'] === componentProps.image['@id']))
                }

                return <div key={`key-${index}`}>
                  {this.mapTypeToComponent(item['@type'], componentProps, image, siteLanguage, componentList)}
                </div>
              }) : 
                
              this.renderSingleComponent(componentList, siteLanguage)
                
            }
          </Layout>
        </div>
      </div>
    )
  }
}