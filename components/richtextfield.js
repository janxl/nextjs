import Layout from '../components/mylayout.js'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

const TextField = styled.textarea`
  font-size: 1em;
  color: #333333;
  font-family: "Helvetica Neue";
  width: 100%;
  height: 100px;
`

export default (props) => {
  const { body } = props

  return (
    <Wrapper>
      <TextField defaultValue={body} />
    </Wrapper>
  )
}