import React from 'react'
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

    // Get Site Id / Name
    var siteName = 'mysite'

    // Create a route for the initial render of the page
    if (query.id == null || query.id == '' || query.id == '/')
      query = {id: '/'}

    // Url for Root of CMS Tree, returning all nodes
    const treeRootUrl = `https://c1.adis.ws/cms/content/query?query=%7b%22sys.iri%22:%22http://content.cms.amplience.net/6aee88e2-0358-429a-b721-82dd6854c4a1%22%7d&scope=tree&store=twe&fullBodyObject=true`
    
    // Fetch tree structure / content
    const resMenu = await fetch(treeRootUrl)
    const dataMenu = await resMenu.json()
    
    // Get route from Data
    var siteId = '';
    await fetch(treeRootUrl)
      .then(response => response.json())
      .then(json => {
        console.log('not await finished')
        siteId = this.getCustomRoute(json, query.id)
        console.log('SiteId... ' + siteId)
      })
    
    const url = `https://c1.adis.ws/cms/content/query?query=%7b%22sys.iri%22:%22http://content.cms.amplience.net/${siteId}%22%7d&scope=tree&store=twe&fullBodyObject=true`
    
    const res = await fetch(url)
    const data = await res.json()

    return { data, dataMenu, siteName }
  }

  mapTypeToComponent = (typeName, componentProps, image) => {
    switch(typeName) {
      case 'http://twe-poc.way.com/banner.json':
        return <Banner {...componentProps} image={image} />
      case 'http://twe-poc.way.com/simpletextblock.json':
        return  <SimpleText {...componentProps} />
      case 'http://twe-poc.way.com/richtextfield.json':
        return <RichTextField {...componentProps} />
    }
  }

  // This method gets custom routes by looking up the nav path and finding the id
  static getCustomRoute = (data, path) => {
    console.log('Path... ' + path)
    var componentList = data['@graph']
    console.log('componentList... ' + componentList)
    const componentProps = componentList.find((item) => item['slug'] === path)
    console.log('componentProps...' + componentProps)
    
    if (componentProps != null){
      var componentId = componentProps.page['@id']
      if (componentId.length >= 0){
        var parts = componentId.split('/')
        
        if (parts.length >= 0){
          return parts[parts.length - 1]
        }
      }
    }
    return 'f7182c56-7553-43b0-af98-dd5b04a1b912'
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
    return ""
  }

  render() {
    const { data } = this.props
    const { dataMenu } = this.props
    const componentList = data['@graph']
    const menuComponentList = dataMenu['@graph']
    const imageList = componentList.filter((item) => item.mediaType === 'image')
    const { siteName } = this.props

    const linkStyle = {
      marginRight: 15
    };
    
    return (
      <div>
        <Head>
          <title>Treasure Wine Estates - POC</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        </Head>
        <div className='container'>
          <nav className='nav'>
            <DynaHeader>
              {
                menuComponentList[0].slugs.map((item, index) => {
                  const componentProps = this.getComponentProps(item['@id'], menuComponentList)
                  
                  var pageId = this.getGuidFromId(componentProps.page['@id'])
                  var navUrl = `/index?site=${siteName}&id=${pageId}`
                  var customRoute = `/index?site=${siteName}&id=${componentProps.slug}`

                  return <Link className='nav-item' prefetch href={customRoute} key={`key-${index}`}>
                    <a class='nav-item' href={customRoute} style={linkStyle}>{componentProps.navLabel}</a>
                  </Link>
                }
              )}
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
                  {this.mapTypeToComponent(item['@type'], componentProps, image)}
                </div>
            })}
          </Layout>
        </div>
        
      </div>
    )
  }
}