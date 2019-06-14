
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background-color: #333333
  padding: 20px 0px;
`

const Title = styled.h1`
  font-size: 1.5em;
  color: #ffffff;
  text-align: center;
  font-family: "Helvetica Neue";
`;

const SubTitle = styled.h1`
  font-size: 1.1em;
  color: #ffffff;
  text-align: center;
  font-family: "Helvetica Neue";
`;

export default (props) => {
  const { headline, strapline } = props
  console.log('BANNER PROPS', props)
  return (
    <Wrapper>
      <Title>{headline}</Title>
      <SubTitle>{strapline}</SubTitle>
    </Wrapper>
  )
}