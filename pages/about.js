import Layout from '../components/mylayout.js'
import styled from 'styled-components'
import GetCss from '../components/styleregistry.js'

const Title = styled.h1`
  font-size: 1.5em;
  color: #a7a9ac;
`;

export default function About() {
  //console.log(GetCss(''))
  return (
    <Layout>
      <Title>Squelling Pig</Title>
      <p>This is the about page</p>
    </Layout>
  )
}