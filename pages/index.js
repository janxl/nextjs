import Layout from '../components/mylayout.js'
import Banner from '../components/banner.js'
import SimpleText from '../components/simpletext.js'
import RichTextField from '../components/richtextfield.js'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
import DynaHeader from '../components/dynamicheader.js'
import Link from "next/link";
import Head from 'next/head'

export default class Dyn extends React.Component {
  static async getInitialProps({ query }) {

    console.log('Page requested with... id=' + query.id)
    console.log('Page requested with... site=' + query.site)
    console.log('Page requested with... page=' + query.page)

    // test header
    console.log('Request header... ' + request.headers);

    // Set the site language with a default of English
    var siteLanguage = query.lang != null ? query.lang : 'en-AU';

    // Get Site Id / Name
    var siteName = 'squealingpig'
    var urlId = ''
    switch (query.site) {
      case 'squealingpig':
        siteName = 'squealingpig'
        urlId = 'e904f0cd-7f15-4773-807a-f35f322b18e8'
        break;
    
      default:
        siteName = 'ativo'
        urlId = '99757712-7a28-4ce5-94f3-82c2f936cbc6'
        break;
    }

    // Create a route for the initial render of the page
    if (query.id == null || query.id == '' || query.id == '/')
      query = {id: '/'}

    // Url for Root of CMS Tree, returning all nodes
    const treeRootUrl = `https://c1.adis.ws/cms/content/query?query=%7b%22sys.iri%22:%22http://content.cms.amplience.net/${urlId}%22%7d&scope=tree&store=twe&fullBodyObject=true`
    
    // Get route from Data
    var siteId = '';
    var dataMenu = ''
    await fetch(treeRootUrl)
      .then(response => response.json())
      .then(json => {
        siteId = this.getCustomRoute(json, query.id)
        dataMenu = json
        console.log('SiteId... ' + siteId)
      })
    
    if (siteId == null || siteId == '')
      siteId = urlId

    const url = `https://c1.adis.ws/cms/content/query?query=%7b%22sys.iri%22:%22http://content.cms.amplience.net/${siteId}%22%7d&scope=tree&store=twe&fullBodyObject=true`
    
    const res = await fetch(url)
    const data = await res.json()

    return { data, dataMenu, siteName, siteLanguage }
  }

  mapTypeToComponent = (typeName, componentProps, image, siteLanguage) => {
    componentProps.siteLanguage = siteLanguage
    switch(typeName) {
      case 'https://raw.githubusercontent.com/janxl/nextjs/master/schemas/banner.json':
        return <Banner {...componentProps} image={image} />
      case 'http://twe-poc.way.com/simpletextblock.json':
        return  <SimpleText {...componentProps} />
      case 'https://raw.githubusercontent.com/janxl/nextjs/master/schemas/richtextfield.json':
        return <RichTextField {...componentProps} />
    }
  }

  // This method gets custom routes by looking up the nav path and finding the id
  static getCustomRoute = (data, path) => {
    var componentList = data['@graph']
    const componentProps = componentList.find((item) => item['slug'] === path)
    
    if (componentProps != null){
      var componentId = componentProps.page['@id']
      if (componentId.length >= 0){
        var parts = componentId.split('/')
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
      var parts = componentId.split('/')
      
      if (parts.length >= 0){
        return parts[parts.length - 1]
      }
    }
    return ''
  }

  getMenu(menuComponentList, siteName){
    const linkStyle = {
      marginRight: 15
    };

    if (menuComponentList[0].slugs != null ){

      return <DynaHeader>
      {
        menuComponentList[0].slugs.map((item, index) => {
          const componentProps = this.getComponentProps(item['@id'], menuComponentList)
          
          var pageId = this.getGuidFromId(componentProps.page['@id'])
          var navUrl = `/index?site=${siteName}&id=${pageId}`
          var customRoute = `/index?site=${siteName}&id=${componentProps.slug}`
  
          return <Link prefetch href={customRoute} key={`key-${index}`}>
            <a className='nav-item' href={customRoute} style={linkStyle}>{componentProps.navLabel.values[0].value}</a>
          </Link>
        }
      )}</DynaHeader>

    }
  }

  render() {
    const { data } = this.props
    const { dataMenu } = this.props
    const componentList = data['@graph']
    const menuComponentList = dataMenu['@graph']
    const imageList = componentList.filter((item) => item.mediaType === 'image')
    const { siteName } = this.props
    const { siteLanguage } = this.props
    
    return (
      <div>
        <Head>
          <title>Treasure Wine Estates - {siteName}</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        </Head>
        <div className='container'>
          <nav className='nav'>
            <DynaHeader>
              {
                this.getMenu(menuComponentList, siteName)
              }
            </DynaHeader>
          </nav>
          <Layout>
            { componentList[0].slotContent.map((item, index) => {
                let image = null
                const componentProps = this.getComponentProps(item['@id'], componentList)

                if (componentProps.background) {
                  image = imageList.find((imageItem) => imageItem['@id'] === componentProps.background['@id'])
                }

                return <div key={`key-${index}`}>
                  {this.mapTypeToComponent(item['@type'], componentProps, image, siteLanguage)}
                </div>
            })}
          </Layout>
        </div>
        
      </div>
    )
  }
}