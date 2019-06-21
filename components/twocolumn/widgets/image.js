import styled from 'styled-components'

const Wrapper = styled.div`
`

export default (props) => {
  const { imageId, componentList, siteLanguage } = props

  let component = componentList.find((item) => item['@id'] === imageId)
  let defaultHost = component.defaultHost
  let endpoint = component.endpoint
  let name = component.name
  
  const imageUrl = `https://${defaultHost}/i/${endpoint}/${name}`
  
  return (
    <Wrapper imageUrl={imageUrl}>
      
    </Wrapper>
  )
}