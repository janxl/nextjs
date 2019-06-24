import ReactMarkdown from 'react-markdown'

export default (props) => {
  const { body } = props

  return (
    <div className="c-richtext">
      <ReactMarkdown source={body.values.find((item) => item['locale'] === props.siteLanguage).value} />
    </div>
  )
}