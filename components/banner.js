
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  padding: 20px 0px;
`

const Title = styled.h1`
  font-size: 1.5em;
  color: #ffffff;
  text-align: center;
  font-family: "Helvetica Neue";
  text-shadow: 2px 2px rgba(0,0,0,0.3);
`;

const SubTitle = styled.h1`
  font-size: 1.1em;
  color: #ffffff;
  text-align: center;
  font-family: "Helvetica Neue";
  text-shadow: 2px 2px rgba(0,0,0,0.3);
`;

export default (props) => {
  const { headline, strapline, image } = props
  const imageUrl = `https://${image.defaultHost}/i/${image.endpoint}/${image.name}`

  return (
    <Wrapper imageUrl={imageUrl}>
      <Title>{headline.values[0].value}</Title>
      <SubTitle>{strapline != null ? strapline.values[0].value : ''}</SubTitle>
    </Wrapper>
  )
}