export default (props) => {
  const { paragraph, intro } = props

  return (
    <div className="c-simple-text">
      { <p className="c-simple-text__paragraph">{intro.values.find((itemText) => itemText['locale'] === props.siteLanguage).value}</p> }
      { paragraph.map((item, index) => <Text key={`key-${index}`}>{item.values.find((itemText) => itemText['locale'] === props.siteLanguage).value}</Text>) }
    </div>
  )
}