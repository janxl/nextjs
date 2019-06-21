import styled from 'styled-components'
import Text from './widgets/text.js'
import Image from './widgets/image.js'

const Wrapper = styled.div`
`

let getComponentProps = (componentId, componentList, siteLanguage) => {
  return getWidget(componentList.find((item) => item['@id'] === componentId), siteLanguage, componentList)
}

let getWidget = (component, siteLanguage, componentList) => {
  switch (component['@type']) {
    case 'https://raw.githubusercontent.com/janxl/nextjs/master/schemas/image.json':
      return <Image imageId={component.image['@id']} componentList={componentList} siteLanguage={siteLanguage} />
  
    case 'https://raw.githubusercontent.com/janxl/nextjs/master/schemas/richtextfield.json':
      return <Text header={component.title.values.find((item) => item['locale'] === siteLanguage).value} 
        text={component.body.values.find((item) => item['locale'] === siteLanguage).value} />
  }
}

export default (props) => {
  const {componentList, rightColumn, leftColumn, siteLanguage} = props

  return (
    <Wrapper className="c-col-2">
      <Wrapper className="c-col-left">
        {getComponentProps(rightColumn[0]['@id'], componentList, siteLanguage)}
      </Wrapper>
      <Wrapper className="c-col-right">
        {getComponentProps(leftColumn[0]['@id'], componentList, siteLanguage)}
      </Wrapper>  
    </Wrapper>
  )
}