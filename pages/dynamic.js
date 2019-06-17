import React from 'react'
import Layout from '../components/mylayout.js'
import Banner from '../components/banner.js'
import SimpleText from '../components/simpletext.js'
import RichTextField from '../components/richtextfield.js'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'
import DynaHeader from '../components/dynamicheader.js'
import Link from "next/link";

export default class Dyn extends React.Component {
  static async getInitialProps({ query }) {
    const url = `https://c1.adis.ws/cms/content/query?query=%7b%22sys.iri%22:%22http://content.cms.amplience.net/${query.id}%22%7d&scope=tree&store=twe&fullBodyObject=true`
    const menuUrl = `https://c1.adis.ws/cms/content/query?query=%7b%22sys.iri%22:%22http://content.cms.amplience.net/6aee88e2-0358-429a-b721-82dd6854c4a1%22%7d&scope=tree&store=twe&fullBodyObject=true`

    console.log('QUERYYYYY', query)
    const res = await fetch(url)
    const data = await res.json()

    const resMenu = await fetch(menuUrl)
    const dataMenu = await resMenu.json()

    return { data, dataMenu }
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

  getComponentProps = (componentId, componentList) => {
    return componentList.find((item) => item['@id'] === componentId)
  }

  getMenuComponentProps = (componentId, componentList) => {
    return componentList.find((item) => item['@id'] === componentId)
  }

  render() {
    const { data } = this.props
    const { dataMenu } = this.props
    console.log(dataMenu)
    const componentList = data['@graph']
    const menuComponentList = dataMenu['@graph']
    const imageList = componentList.filter((item) => item.mediaType === 'image')

    const linkStyle = {
      marginRight: 15
    };
    
    return (
      <div>
        <DynaHeader>
          {
            menuComponentList[0].slugs.map((item, index) => {
              const componentProps = this.getMenuComponentProps(item['@id'], menuComponentList)
              console.log(componentProps)

              return <Link prefetch href="/dynamic?id=f012151c-9ed8-495b-9db0-6d3b35696a95">
                <a href={componentProps.page['@id']} style={linkStyle}>{componentProps._meta.name}</a>
              </Link>
            }
          )}
        </DynaHeader>
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
    )
  }
}