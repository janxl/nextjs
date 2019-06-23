import styled from 'styled-components'

const Wrapper = styled.div`
`

export default (props) => {
  const {header, text} = props

  return <Wrapper>
    <Wrapper>{header}</Wrapper>
    <Wrapper>{text}</Wrapper>
  </Wrapper>
}