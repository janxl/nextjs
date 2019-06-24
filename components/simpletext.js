import styled from 'styled-components'

const Wrapper = styled.div`
`

const Text = styled.p`
  font-size: 1em;
  color: #333333;
  font-family: "Helvetica Neue";
`

export default (props) => {
  const { paragraph, intro } = props

  return (
    <div className="c-simple-text">
      { <Text>{intro.values.find((itemText) => itemText['locale'] === props.siteLanguage).value}</Text> }
      { paragraph.map((item, index) => <Text key={`key-${index}`}>{item.values.find((itemText) => itemText['locale'] === props.siteLanguage).value}</Text>) }
    </div>
  )
}