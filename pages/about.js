import Layout from '../components/mylayout.js'
import styled from 'styled-components'
import GetCss from '../components/styleregistry.js'

export default function About({id}) {
  console.log(id)
  var styles = GetCss('6aee88e2-0358-429a-b721-82dd6854c4a1')
  
  return (
    <Layout>
      {styles}
      <h1>Squelling Pig</h1>
      <p>This is the about page</p>
    </Layout>
  )
}