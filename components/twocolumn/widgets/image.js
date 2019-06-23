export default (props) => {
  const { imageId, componentList, siteLanguage } = props

  let component = componentList.find((item) => item['@id'] === imageId)
  let defaultHost = component.defaultHost
  let endpoint = component.endpoint
  let name = component.name
  
  const imageUrl = `https://${defaultHost}/i/${endpoint}/${name}`
  
  return (
    <div style={{backgroundImage: `url(${imageUrl})`}}>
      
    </div>
  )
}