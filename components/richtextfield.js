import Layout from '../components/mylayout.js'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const Wrapper = styled.div`
`

const TextField = styled.p`
  font-size: 1em;
  color: #333333;
  font-family: "Helvetica Neue";
  width: 100%;
  height: 100px;
`

export default (props) => {
  const { body } = props
  console.log('rich text props', props)

  return (
    <div className="container c-richtext">
      <ReactMarkdown source={body.values.find((item) => item['locale'] === props.siteLanguage).value} />
    </div>
  )
}