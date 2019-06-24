export default (props) => {
  const { image } = props
  const imageUrl = `https://${image.defaultHost}/i/${image.endpoint}/${image.name}`

  return (
    <div className="c-image__wrapper">
      <img className="c-image" src={imageUrl} />
    </div>
  )
}