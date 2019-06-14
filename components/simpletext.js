import Layout from '../components/mylayout.js'
import styled from 'styled-components'

const Wrapper = styled.div`
`

const Text = styled.p`
  font-size: 1em;
  color: #333333;
  font-family: "Helvetica Neue";
`

export default (props) => {
  const { paragraph } = props
  console.log('SIMPLE TEXT PROPS', props)

  return (
    <Wrapper>
      { paragraph.map((item) => <Text>{item}</Text>) }
    </Wrapper>
  )
}