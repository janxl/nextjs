import React from 'react'
import Layout from '../components/mylayout.js'
import Banner from '../components/banner.js'
import SimpleText from '../components/simpletext.js'
import RichTextField from '../components/richtextfield.js'
import dynamic from 'next/dynamic'
import fetch from 'isomorphic-unfetch'

const url = 'https://c1.adis.ws/cms/content/query?query=%7b%22sys.iri%22:%22http://content.cms.amplience.net/f7182c56-7553-43b0-af98-dd5b04a1b912%22%7d&scope=tree&store=twe&fullBodyObject=true'

export default class Dyn extends React.Component {
  static async getInitialProps() {
    const res = await fetch(url)
    const data = await res.json()
  
    console.log(`Data fetched`, data)
  
    return {
      data
    }
  }

  mapTypeToComponent = (typeName, componentProps) => {
    switch(typeName) {
      case 'http://twe-poc.way.com/banner.json':
        return <Banner {...componentProps} />
      case 'http://twe-poc.way.com/simpletextblock.json':
        return  <SimpleText {...componentProps} />
      case 'http://twe-poc.way.com/richtextfield.json':
        return <RichTextField {...componentProps} />
    }
  }

  getComponentProps = (componentId, componentList) => {
    console.log('componentListTTTTT', componentList)

    return componentList.find((item) => item['@id'] === componentId)
  }

  render() {
    const { data } = this.props
    const componentList = data['@graph']
    const imageList = componentList.filter((item) => item.mediaType === 'image')

    console.log('imageList', imageList)

    return (
      <Layout>
        { componentList[0].slotContent.map((item, index) => {
            const componentProps = this.getComponentProps(item['@id'], componentList)
            return this.mapTypeToComponent(item['@type'], componentProps)
        })}
      </Layout>
    )
  }
}