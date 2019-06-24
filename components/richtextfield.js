import Layout from '../components/mylayout.js'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const Wrapper = styled.div`
`

export default (props) => {
  const { body } = props

  return (
    <div className="c-richtext">
      <ReactMarkdown source={body.values.find((item) => item['locale'] === props.siteLanguage).value} />
    </div>
  )
}